import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-list-soltds-org',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './list-soltds-org.component.html',
  styleUrl: './list-soltds-org.component.css'
})
export class ListSoltdsOrgComponent {
  solicitudes = [
    {
      titulo: 'Proyecto A',
      importe: '$1000',
      investigador: 'Sebastian',
      fechaInicio: '2023-01-01',
      fechaFin: '2023-02-01',
      nombreGrupo: 'Grupo A',
      horasSemana: '20',
      convocatoria: 'Convocatoria 1',
      estado: ''  // Campo para controlar el estado de aprobación/desaprobación
    },
    {
      titulo: 'Proyecto B',
      importe: '$1000',
      investigador: 'David',
      fechaInicio: '2023-03-01',
      fechaFin: '2023-04-01',
      nombreGrupo: 'Líder B',
      horasSemana: '25',
      convocatoria: 'Convocatoria 2',
      estado: ''  // Campo para controlar el estado de aprobación/desaprobación
    },
    // ... más solicitudes ...
  ];

  toggleAprobada(solicitud: any) {
    solicitud.estado = solicitud.estado === 'aprobada' ? '' : 'aprobada';
  }

  toggleDesaprobada(solicitud: any) {
    solicitud.estado = solicitud.estado === 'desaprobada' ? '' : 'desaprobada';
  }
}