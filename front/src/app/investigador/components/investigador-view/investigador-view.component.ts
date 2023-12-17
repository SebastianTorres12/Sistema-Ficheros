import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConvocatoriaInvComponent } from './convocatoria-inv/convocatoria-inv.component';
import { ListSoltdInvComponent } from './list-soltd-inv/list-soltd-inv.component';
import { ListInvesInvComponent } from './list-inves-inv/list-inves-inv.component';
import { ListGpoInvInvComponent } from './list-gpo-inv-inv/list-gpo-inv-inv.component';

@Component({
  selector: 'app-investigador-view',
  standalone: true,
  imports: [CommonModule, ConvocatoriaInvComponent, ListSoltdInvComponent, ListInvesInvComponent, ListGpoInvInvComponent],
  templateUrl: './investigador-view.component.html',
  styleUrl: './investigador-view.component.css'
})
export class InvestigadorViewComponent implements OnInit {

  convocatoriaInv: boolean = false;
  listSolicitudInv: boolean = false;
  listGrupo: boolean = false;
  listInvestigador: boolean = false;

  constructor () {}

  ngOnInit(): void {
    
  }

  setOff() {
    this.convocatoriaInv = false;
    this.listSolicitudInv = false;
    this.listGrupo = false;
    this.listInvestigador = false;
  }

  showConvocatoria(){
    this.setOff();
    this.convocatoriaInv = true;
  }

  showListSolicitud(){
    this.setOff();
    this.listSolicitudInv = true;
  }

  showListGrupoInvestigacion(){
    this.setOff();
    this.listGrupo = true;
  }

  showListInvestigador(){
    this.setOff();
    this.listInvestigador = true;
  }

}
