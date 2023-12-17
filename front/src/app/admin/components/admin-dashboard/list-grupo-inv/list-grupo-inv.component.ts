import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-list-grupo-inv',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './list-grupo-inv.component.html',
  styleUrl: './list-grupo-inv.component.css'
})
export class ListGrupoInvComponent {

}
