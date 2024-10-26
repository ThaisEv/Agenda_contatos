import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
  constructor(public cs: AgendaService) {}
}
