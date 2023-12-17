import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-list-organismos',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './list-organismos.component.html',
  styleUrl: './list-organismos.component.css'
})
export class ListOrganismosComponent {

}
