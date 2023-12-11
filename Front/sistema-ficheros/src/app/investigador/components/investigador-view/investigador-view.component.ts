import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConvocatoriaInvComponent } from './convocatoria-inv/convocatoria-inv.component';
import { SolicitudInvComponent } from './solicitud-inv/solicitud-inv.component';
import { GInvesInvComponent } from './g-inves-inv/g-inves-inv.component';

@Component({
  selector: 'app-investigador-view',
  standalone: true,
  imports: [CommonModule, ConvocatoriaInvComponent, SolicitudInvComponent, GInvesInvComponent],
  templateUrl: './investigador-view.component.html',
  styleUrl: './investigador-view.component.css'
})
export class InvestigadorViewComponent implements OnInit {

  convocatoriaInv: boolean = false;
  solicitudInv: boolean = false;
  grupoInvestInv: boolean = false;

  constructor () {}

  ngOnInit(): void {
    
  }

  setOff() {
    this.convocatoriaInv = false;
    this.solicitudInv = false;
    this.grupoInvestInv = false;
  }

  showConvocatoria(){
    this.setOff();
    this.convocatoriaInv = true;
  }

  showSolicitud(){
    this.setOff();
    this.solicitudInv = true;
  }

  showGrupoInvestigacion(){
    this.setOff();
    this.grupoInvestInv = true;
  }

}
