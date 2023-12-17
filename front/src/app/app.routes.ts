import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { InvestigadorViewComponent } from './investigador/components/investigador-view/investigador-view.component';

import { UsuariosComponent } from './admin/components/admin-dashboard/usuarios/usuarios.component';
import { ConvocatoriasComponent } from './admin/components/admin-dashboard/convocatorias/convocatorias.component';
import { GruposInvestigacionComponent } from './admin/components/admin-dashboard/grupos-investigacion/grupos-investigacion.component';
import { OrganismosComponent } from './admin/components/admin-dashboard/organismos/organismos.component';

export const routes: Routes = [
    { path: 'login', component: LoginViewComponent },
    { path: 'admin-view', component: AdminDashboardComponent},
    { path: 'investigador-view', component: InvestigadorViewComponent},
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'convocatorias', component: ConvocatoriasComponent },
    { path: 'grupos-inv', component: GruposInvestigacionComponent },
    { path: 'organismos', component: OrganismosComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
