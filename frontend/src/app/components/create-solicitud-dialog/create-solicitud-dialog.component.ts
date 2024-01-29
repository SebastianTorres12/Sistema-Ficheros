import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Investigador } from '../../models/investigador.model';
import { CrudInvestigadorService } from '../../services/crudInvestigador.service';
import { AlertifyService } from '../../services/alertify.service';
import { CrudSolicitudService } from '../../services/crudSolicitud.service';

@Component({
  selector: 'app-create-solicitud-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-solicitud-dialog.component.html',
  styleUrl: './create-solicitud-dialog.component.css'
})
export class CreateSolicitudDialogComponent {
  formSolicitud: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateSolicitudDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { convocatoriaId: string },
    private formBuilder: FormBuilder,
    private crudSolicitudService: CrudSolicitudService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  getNoResponsableInvestigadores(): Investigador[] {
    return this.investigadores.filter((investigador) => !investigador.responsable);
  }

  loadInvestigadores(): void {
    this.crudInvestigadorService.getInvestigadores().subscribe((res: Investigador[]) => {
      this.investigadores = res;
    });
  }

  initForm(): void {
    this.formSolicitud = this.formBuilder.group({
      // Definir los campos para la creación de solicitud según tu modelo
      titulo_proyecto: ['', Validators.required],
      fecha_presentacion: [null, Validators.required],
      fecha_resolucion: [null, Validators.required],
      importe_economico: [null, Validators.required],
      fecha_inicioProyecto: [null, Validators.required],
      fecha_finProyecto: [null, Validators.required],
      participantes: [],
      estado: [false],  // El estado por defecto es falso
      convocatoriaId: [this.data.convocatoriaId, Validators.required]
    });
  }

  onSubmit(): void {
    // Implementa la lógica para crear la solicitud aquí
  }

}
