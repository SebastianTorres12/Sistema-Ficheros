import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrudOrganismoService } from '../../services/crudOrganismo.service';
import { Convocatoria } from '../../models/convocatoria.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-organismo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './dashboard-organismo.component.html',
  styleUrl: './dashboard-organismo.component.css'
})
export class DashboardOrganismoComponent implements OnInit {
  convocatorias: Convocatoria[] = [];
  organismoId: string = '';

  constructor(
    private router: Router,
    private crudOrganismoService: CrudOrganismoService,
    private authService: AuthService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // Obtén el token y el ID del organismo desde el servicio de autenticación
    const { token, id } = this.authService.getTokenAndOrganismoId();

    // Asigna el ID del organismo
    this.organismoId = id;
    console.log(this.organismoId);
    // Obtén las convocatorias por organismo utilizando el servicio de organismo
    if (this.organismoId) {
      // Incluye el token en las solicitudes para autenticación
      this.crudOrganismoService.getConvocatoriasByOrganismo(this.organismoId).subscribe(
        (convocatorias) => {
          console.log('Convocatorias recibidas:', convocatorias);
          // Usa NgZone.run para asegurarte de que las actualizaciones estén dentro de la zona de Angular
          this.ngZone.run(() => {
            this.convocatorias = convocatorias;
          });
        },
        (error) => {
          console.error('Error al obtener convocatorias:', error);
        }
      );
    } else {
      console.error('ID del organismo no disponible: ', id);
    }
  }

  crearConvocatoria(): void {
    this.router.navigateByUrl('/createConvocatoria');
  }
}
