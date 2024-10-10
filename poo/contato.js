"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = exports.Tipo = void 0;
var Tipo;
(function (Tipo) {
    Tipo["amg"] = "Amigo(a)";
    Tipo["fam"] = "Familia";
    Tipo["trab"] = "Trabalho";
})(Tipo || (exports.Tipo = Tipo = {}));
class Contato {
    constructor(nom, tel, email, aniv, tipo) {
        this.nome = nom;
        this.telefone = tel;
        this.email = email;
        this.aniversario = aniv;
        this.tipo = tipo;
    }
    alterarNome(nome) {
        this.nome = nome;
    }
    alterarTelefone(tel) {
        this.telefone = tel;
    }
    alterarEmail(email) {
        this.email = email;
    }
    alterarAniversario(data) {
        this.aniversario = data;
    }
    alterarTipo(tipo) {
        this.tipo = tipo;
    }
    obterNome() {
        return this.nome;
    }
    obterTelefone() {
        return this.telefone;
    }
    obterEmail() {
        return this.email;
    }
    obterAniversario() {
        return this.aniversario;
    }
    obterTipo() {
        return this.tipo;
    }
}
exports.Contato = Contato;
