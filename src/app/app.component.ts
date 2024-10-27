import { Component } from '@angular/core';
import { Contato, Tipo } from './contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mudarDiv: number; //(0 - todos, 1 - favoritos)
  adicionaContato: boolean;

  constructor() {
    this.mudarDiv = 0;
    this.adicionaContato = false;
  }

  aparecerTodos() {
    this.mudarDiv = 0;
  }
  aparecerFavoritos() {
    this.mudarDiv = 1;
  }

  aparecerAdicionar() {
    this.adicionaContato = true;
  }
  desaparecerAdicionar() {
    this.adicionaContato = false;
  }
}


