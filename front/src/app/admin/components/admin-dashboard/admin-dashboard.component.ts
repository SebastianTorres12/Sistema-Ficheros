import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListConvocatoriasComponent } from './list-convocatorias/list-convocatorias.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { ListOrganismosComponent } from './list-organismos/list-organismos.component';
import { ListGrupoInvComponent } from './list-grupo-inv/list-grupo-inv.component';
import { ListSolicitudesComponent } from './list-solicitudes/list-solicitudes.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ListConvocatoriasComponent, ListUsuariosComponent, ListOrganismosComponent, ListGrupoInvComponent, ListSolicitudesComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent implements OnInit {

  list_usuarios: boolean = false;
  list_organismo: boolean = false;
  list_convocatoria: boolean = false;
  list_grupo_inv: boolean = false;
  list_solicitudes: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setOff() {
    this.list_usuarios = false;
    this.list_organismo = false;
    this.list_convocatoria = false;
    this.list_grupo_inv = false;
    this.list_solicitudes = false;
  }

  showList_usuarios() {
    this.setOff();
    this.list_usuarios = true;
  }

  showList_organismos() {
    this.setOff();
    this.list_organismo = true;
  }

  showList_convocatoria() {
    this.setOff();
    this.list_convocatoria = true;
  }

  showList_grupo_inv() {
    this.setOff();
    this.list_grupo_inv = true;
  }

  showList_solicitudes() {
    this.setOff();
    this.list_solicitudes = true;
  }

}
