import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-list-convocatorias',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './list-convocatorias.component.html',
  styleUrl: './list-convocatorias.component.css'
})
export class ListConvocatoriasComponent {

}
