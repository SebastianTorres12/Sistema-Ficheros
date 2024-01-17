import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Solicitud } from '../../models/solicitud.model';
import { Convocatoria } from '../../models/convocatoria.model';
import { CrudSolicitudService } from '../../services/crudSolicitud.service';
import { CrudConvocatoriaService } from '../../services/crudConvocatoria.service';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-create-solicitud',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './create-solicitud.component.html',
  styleUrl: './create-solicitud.component.css',
})
export class CreateSolicitudComponent {

  formSolicitud: FormGroup;
  convocatorias: Convocatoria[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private crudSolicitudService: CrudSolicitudService,
    private crudConvocatoriaService: CrudConvocatoriaService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadOrganismos();
  }

  initForm(): void {
    this.formSolicitud = this.formBuilder.group({
      titulo_proyecto: ['', Validators.required],
      fecha_presentacion: ['', Validators.required],
      fecha_resolucion: ['', Validators.required],
      importe_economico: ['', Validators.required],
      fecha_inicioProyecto: ['', Validators.required],
      fecha_finProyecto: ['', Validators.required],
      estado: [false],
      convocatoriaId: [null, Validators.required]
    });
  }

  loadOrganismos(): void {
    this.crudConvocatoriaService.getConvocatorias().subscribe(
      (res: Convocatoria[]) => {
        this.convocatorias = res;
      },
      (error) => {
        this.alertifyService.error('Error al cargar las convocatorias');
      }
    );
  }



  onSubmit(): void {
    const { convocatoriaId, ...solicitud } = this.formSolicitud.value;
  
    this.crudSolicitudService.createSolicitud(solicitud).subscribe({
      next: (solicitudCreada) => {
        if (convocatoriaId && solicitudCreada?._id) {
          const convocatoria: Convocatoria | undefined = this.convocatorias.find((o) => o._id === convocatoriaId);
  
          if (convocatoria) {
            convocatoria.solicitudes.push(solicitudCreada._id);
  
            this.crudSolicitudService.updateSolicitud(convocatoriaId, convocatoria).subscribe({
              next: () => {
                this.alertifyService.success('Solicitud Creada');
                this.router.navigateByUrl('/showSolicitud');
              },
              error: (updateError) => {
                this.alertifyService.error('Error al actualizar la convocatoria: ' + updateError);
              }
            });
          } else {
            this.alertifyService.error('Solicitud no encontrado');
          }
        } else {
          this.alertifyService.error('Error al obtener el ID de la solicitud');
        }
      },
      error: (createError) => {
        this.alertifyService.error('Error al crear la solictud: ' + createError);
      }
    });
  }
}
