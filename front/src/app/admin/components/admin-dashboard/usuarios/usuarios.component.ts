import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [AdminDashboardComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
