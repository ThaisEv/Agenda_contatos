import { Injectable } from '@angular/core';
import { Contato, Tipo } from './contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  contatos: Contato[];
  favoritos: Contato[];
  tipos: Tipo[];
  imagemSelecionada: string;

    constructor() {
      let ana = new Contato('Ana Maria', '(84) 91234-5678', 'ana.maria@gmail.com', new Date(9, 8, 2001), Tipo.trab, 'avatar/mulher1.png', true);
      let jorge = new Contato('Jorge', '(84) 91234-5678', 'jorge.silva@gmail.com', new Date(9, 8, 2001), Tipo.fam, 'avatar/homem1.png', false);
      let marcos = new Contato('Marcos Campos', '(84) 91234-5678', 'marcos.campos@gmail.com', new Date(1, 10, 2004), Tipo.amg, 'avatar/homem.png', true);  


      this.contatos = [ana, jorge, marcos];
      this.tipos = [Tipo.amg, Tipo.fam, Tipo.trab, Tipo.des];
      this.imagemSelecionada = '';
      this.favoritos = [];

      this.contatosFav();
    }

    contatosFav() {
        for(let x = 0; x < this.contatos.length; x++) {
            if(this.contatos[x].obterFav()) {
                this.favoritos.push(this.contatos[x]);
            }
        }
    }

    cadastrarListaDeContatos(lista: Contato[]) {
        if(this.contatos.length == 0) {
            this.contatos = lista;
        } else {
            for(let x = 0; x < lista.length; x++) {
                this.contatos.push(lista[x]);
            }
        }
    }
    cadastrarContato(contato: Contato) {
        this.contatos.push(contato);
    }
    cadastrarContatoPorItens(nome: string, tel: string, email: string, data: string, tipo: string, img: string, fav: boolean) {
      let t = Tipo.des;
      for(let x = 0; x < this.tipos.length; x++) {
        if(this.tipos[x] == tipo) {
          t = this.tipos[x];
        }
      }
      this.contatos.push(new Contato(nome, tel, email, new Date(data), t, img, fav));
    }
    obterListaDeContatos() {
        return this.contatos;
    }
    obterContatoPorEmail(email: string): any {
        for(let x = 0; x < this.contatos.length; x++) {
            if(this.contatos[x].obterEmail() == email) {
                return this.contatos[x]
            } else {
                return 'Contato não encontrado'
            }
        }
    }
    obterContatoPorTelefone(tel: string): any {
        for(let x = 0; x < this.contatos.length; x++) {
            if(this.contatos[x].obterTelefone() == tel) {
                return this.contatos[x]
            } else {
                return 'Contato não encontrado'
            }
        }
    }
    obterContatoPorNome(nome: string) {
        let contatosLista = [];
        for(let x = 0; x < this.contatos.length; x++) {
            let contato = this.contatos[x].obterNome().trim().toLowerCase().split(' ');
            
            for(let y = 0; y < contato.length; y++) {
                if(contato[y] == nome.trim().toLowerCase()) {
                    contatosLista.push(this.contatos[x]);
                } 
            }
        }  if(contatosLista.length != 0) {
            return contatosLista
        } else {
            return 'Nenhum contato encontrado!'
        }
    }
}
