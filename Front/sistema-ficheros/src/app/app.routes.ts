import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { InvestigadorViewComponent } from './investigador/components/investigador-view/investigador-view.component';

export const routes: Routes = [
    { path: 'login-view', component: LoginViewComponent },
    { path: 'login-view/admin-view', component: AdminDashboardComponent },
    { path: 'login-view/investigador-view', component: InvestigadorViewComponent },
    { path: '', component: LoginViewComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
