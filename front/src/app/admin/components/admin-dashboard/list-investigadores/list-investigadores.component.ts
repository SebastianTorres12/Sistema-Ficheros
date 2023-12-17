import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-list-investigadores',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './list-investigadores.component.html',
  styleUrl: './list-investigadores.component.css'
})
export class ListInvestigadoresComponent {

}
