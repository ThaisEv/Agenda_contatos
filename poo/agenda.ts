import { Contato } from "./contato";
import { Tipo } from "./contato";

class Agenda {
    private contatos: Contato[];

    constructor(contatos: Contato[]) {
        this.contatos = contatos;
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
    obterListaDeContatos() {
        return this.contatos;
    }
    obterContatoPorEmail(email: string) {
        for(let x = 0; x < this.contatos.length; x++) {
            if(this.contatos[x].obterEmail() == email) {
                return this.contatos[x]
            } else {
                return 'Contato não encontrado'
            }
        }
    }
    obterContatoPorTelefone(tel: string) {
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

let ana = new Contato('Ana Maria', '(84) 91234-5678', 'ana.maria@gmail.com', new Date(9, 8, 2001), Tipo.trab);
let jorge = new Contato('Jorge', '(84) 91234-5678', 'jorge.silva@gmail.com', new Date(9, 8, 2001), Tipo.trab);
let ana2 = new Contato('Ana Clara', '(84) 91234-5678', 'ana.clara@gmail.com', new Date(9, 8, 2001), Tipo.amg);



let meus_contatos = new Agenda([]);
meus_contatos.cadastrarContato(ana);
meus_contatos.cadastrarListaDeContatos([ana2, jorge]);

console.log(meus_contatos.obterContatoPorNome('ANA'));


