import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-inv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitud-inv.component.html',
  styleUrl: './solicitud-inv.component.css'
})
export class SolicitudInvComponent implements OnInit {
  solicitudes = [
    {
      titulo: 'Proyecto A',
      importe: 75000,
      fechaInicio: new Date('2023-02-15'),
      fechaFin: new Date('2023-05-30'),
      estado: 'Aprobada'
    },
    {
      titulo: 'Proyecto B',
      importe: 48000,
      fechaInicio: new Date('2023-03-01'),
      fechaFin: new Date('2023-07-15'),
      estado: 'Pendiente'
    },
    {
      titulo: 'Proyecto C',
      importe: 120000,
      fechaInicio: new Date('2023-04-10'),
      fechaFin: new Date('2023-09-22'),
      estado: 'Rechazada'
    },
    // Agrega más solicitudes según sea necesario
  ];

  agregarSolicitud() {
    // Implementa lógica para agregar una nueva solicitud
    // Puedes abrir un modal o navegar a una nueva página para agregar la solicitud
    console.log('Agregar Solicitud');
  }

  verSolicitud() {
    // Implementa lógica para ver detalles de la solicitud
    console.log('Ver Solicitud:');
  }

  editarSolicitud() {
    // Implementa lógica para editar la solicitud
    console.log('Editar Solicitud:');
  }

  eliminarSolicitud() {
    // Implementa lógica para eliminar la solicitud
    console.log('Eliminar Solicitud:');
  }

  ngOnInit(): void {
    
  }
}
