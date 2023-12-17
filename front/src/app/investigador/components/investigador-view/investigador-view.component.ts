import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConvocatoriaInvComponent } from './convocatoria-inv/convocatoria-inv.component';
import { ListSoltdInvComponent } from './list-soltd-inv/list-soltd-inv.component';

@Component({
  selector: 'app-investigador-view',
  standalone: true,
  imports: [CommonModule, ConvocatoriaInvComponent, ListSoltdInvComponent],
  templateUrl: './investigador-view.component.html',
  styleUrl: './investigador-view.component.css'
})
export class InvestigadorViewComponent implements OnInit {

  convocatoriaInv: boolean = false;
  listSolicitudInv: boolean = false;
  grupoInvestInv: boolean = false;

  constructor () {}

  ngOnInit(): void {
    
  }

  setOff() {
    this.convocatoriaInv = false;
    this.listSolicitudInv = false;
    this.grupoInvestInv = false;
  }

  showConvocatoria(){
    this.setOff();
    this.convocatoriaInv = true;
  }

  showListSolicitud(){
    this.setOff();
    this.listSolicitudInv = true;
  }

  showGrupoInvestigacion(){
    this.setOff();
    this.grupoInvestInv = true;
  }

}
