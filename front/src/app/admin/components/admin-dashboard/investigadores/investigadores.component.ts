import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-investigadores',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './investigadores.component.html',
  styleUrl: './investigadores.component.css'
})
export class InvestigadoresComponent {

}
