import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListSoltdsOrgComponent } from './list-soltds-org/list-soltds-org.component';
import { ListConvtOrgComponent } from './list-convt-org/list-convt-org.component';

@Component({
  selector: 'app-organismo-view',
  standalone: true,
  imports: [CommonModule, ListSoltdsOrgComponent, ListConvtOrgComponent],
  templateUrl: './organismo-view.component.html',
  styleUrl: './organismo-view.component.css'
})
export class OrganismoViewComponent implements OnInit {

  listSolicitudesOrg = false;
  listConvocatoriaOrg = false;

  constructor(){}


  setOff() {
    this.listSolicitudesOrg = false;
    this.listConvocatoriaOrg = false;
  }

  ngOnInit(): void {
    
  }

  showListSolicitudInv() {
    this.setOff();
    this.listSolicitudesOrg = true;
  }
  showListConvocatoria() {
    this.setOff();
    this.listConvocatoriaOrg = true;
  }

}
