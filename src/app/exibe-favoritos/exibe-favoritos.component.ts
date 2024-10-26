import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrl: './exibe-favoritos.component.css'
})
export class ExibeFavoritosComponent {
  constructor(public cs: AgendaService) { }
}
