import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GruposInvestigacionComponent } from './grupos-investigacion/grupos-investigacion.component';
import { OrganismosComponent } from './organismos/organismos.component';



@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule, UsuariosComponent, ConvocatoriasComponent, OrganismosComponent, GruposInvestigacionComponent],
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent implements OnInit {

  usuarios: boolean = false;
  organismo: boolean = false;
  convocatoria: boolean = false;
  grupoInvestigacion: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  setOff() {
    this.usuarios = false;
    this.organismo = false;
    this.convocatoria = false;
    this.grupoInvestigacion = false;
  }

  showUsuarios(){
    this.setOff();
    this.usuarios = true;
  }

  showOrganismos(){
    this.setOff();
    this.organismo = true;
  }

  showConvocatoria(){
    this.setOff();
    this.convocatoria = true;
  }

  showGrupoInvestigacion() {
    this.setOff();
    this.grupoInvestigacion = true;
  }

}
