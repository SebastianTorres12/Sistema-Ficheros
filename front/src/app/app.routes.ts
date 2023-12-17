import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
<<<<<<< Updated upstream
import { LoginViewComponent } from './login-view/login-view.component';
import { InvestigadorViewComponent } from './investigador/components/investigador-view/investigador-view.component';

export const routes: Routes = [
    { path: 'login-view', component: LoginViewComponent },
    { path: 'login-view/admin-view', component: AdminDashboardComponent },
    { path: 'login-view/investigador-view', component: InvestigadorViewComponent },
    { path: '', component: LoginViewComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
=======
import { LoginAdminComponent } from './admin/components/login-admin/login-admin.component';
import { UsuariosComponent } from './admin/components/admin-dashboard/usuarios/usuarios.component';
import { ConvocatoriasComponent } from './admin/components/admin-dashboard/convocatorias/convocatorias.component';
import { GruposInvestigacionComponent } from './admin/components/admin-dashboard/grupos-investigacion/grupos-investigacion.component';
import { OrganismosComponent } from './admin/components/admin-dashboard/organismos/organismos.component';

export const routes: Routes = [
    { path: 'login-admin', component: LoginAdminComponent },
    { path: 'login-admin/admin-view', component: AdminDashboardComponent},
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'convocatorias', component: ConvocatoriasComponent },
    { path: 'grupos-inv', component: GruposInvestigacionComponent },
    { path: 'organismos', component: OrganismosComponent },
    { path: '', redirectTo: 'admin', pathMatch: 'full' }
>>>>>>> Stashed changes
];
