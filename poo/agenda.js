"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contato_1 = require("./contato");
const contato_2 = require("./contato");
class Agenda {
    constructor(contatos) {
        this.contatos = contatos;
    }
    cadastrarListaDeContatos(lista) {
        if (this.contatos.length == 0) {
            this.contatos = lista;
        }
        else {
            for (let x = 0; x < lista.length; x++) {
                this.contatos.push(lista[x]);
            }
        }
    }
    cadastrarContato(contato) {
        this.contatos.push(contato);
    }
    obterListaDeContatos() {
        return this.contatos;
    }
    obterContatoPorEmail(email) {
        for (let x = 0; x < this.contatos.length; x++) {
            if (this.contatos[x].obterEmail() == email) {
                return this.contatos[x];
            }
            else {
                return 'Contato não encontrado';
            }
        }
    }
    obterContatoPorTelefone(tel) {
        for (let x = 0; x < this.contatos.length; x++) {
            if (this.contatos[x].obterTelefone() == tel) {
                return this.contatos[x];
            }
            else {
                return 'Contato não encontrado';
            }
        }
    }
    obterContatoPorNome(nome) {
        let contatosLista = [];
        for (let x = 0; x < this.contatos.length; x++) {
            let contato = this.contatos[x].obterNome().trim().toLowerCase().split(' ');
            for (let y = 0; y < contato.length; y++) {
                if (contato[y] == nome.trim().toLowerCase()) {
                    contatosLista.push(this.contatos[x]);
                }
            }
        }
        if (contatosLista.length != 0) {
            return contatosLista;
        }
        else {
            return 'Nenhum contato encontrado!';
        }
    }
}
let ana = new contato_1.Contato('Ana Maria', '(84) 91234-5678', 'ana.maria@gmail.com', new Date(9, 8, 2001), contato_2.Tipo.trab);
let jorge = new contato_1.Contato('Jorge', '(84) 91234-5678', 'jorge.silva@gmail.com', new Date(9, 8, 2001), contato_2.Tipo.trab);
let ana2 = new contato_1.Contato('Ana Clara', '(84) 91234-5678', 'ana.clara@gmail.com', new Date(9, 8, 2001), contato_2.Tipo.amg);
let meus_contatos = new Agenda([]);
meus_contatos.cadastrarContato(ana);
meus_contatos.cadastrarListaDeContatos([ana2, jorge]);
console.log(meus_contatos.obterContatoPorNome('ANA'));
