import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { InvestigadorViewComponent } from './investigador/components/investigador-view/investigador-view.component';
import { OrganismoViewComponent } from './organismos/components/organismo-view/organismo-view.component';

//admin
import { UsuariosComponent } from './admin/components/admin-dashboard/usuarios/usuarios.component';
import { ConvocatoriasComponent } from './admin/components/admin-dashboard/convocatorias/convocatorias.component';
import { GruposInvestigacionComponent } from './admin/components/admin-dashboard/grupos-investigacion/grupos-investigacion.component';
import { OrganismosComponent } from './admin/components/admin-dashboard/organismos/organismos.component';
import { InvestigadoresComponent } from './admin/components/admin-dashboard/investigadores/investigadores.component';
import { SolicitudesComponent } from './admin/components/admin-dashboard/solicitudes/solicitudes.component';

//investigador
import { SolicitudInvComponent } from './investigador/components/investigador-view/solicitud-inv/solicitud-inv.component';
import { GpoInvInvComponent } from './investigador/components/investigador-view/gpo-inv-inv/gpo-inv-inv.component';
import { InvesInvComponent } from './investigador/components/investigador-view/inves-inv/inves-inv.component';

//organismo
import { ConvtOrgComponent } from './organismos/components/organismo-view/convt-org/convt-org.component';
import { SoltdsOrgComponent } from './organismos/components/organismo-view/soltds-org/soltds-org.component';

export const routes: Routes = [
    { path: 'login', component: LoginViewComponent },
    { path: 'admin-view', component: AdminDashboardComponent},
    { path: 'investigador-view', component: InvestigadorViewComponent},
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'convocatorias', component: ConvocatoriasComponent },
    { path: 'grupos-inv', component: GruposInvestigacionComponent },
    { path: 'organismos', component: OrganismosComponent },
    { path: 'solicitud-inv', component: SolicitudInvComponent },
    { path: 'organismo-view', component: OrganismoViewComponent },
    { path: 'convocatorias-org', component: ConvtOrgComponent },
    { path: 'solicitudes-org', component: SoltdsOrgComponent },
    { path: 'investigadores', component: InvestigadoresComponent },
    { path: 'solicitudes', component: SolicitudesComponent },
    { path: 'gpo-inv-inv', component: GpoInvInvComponent },
    { path: 'inves-inv', component: InvesInvComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
