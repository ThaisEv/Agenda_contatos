export enum Tipo {
    amg = 'Amigo(a)',
    fam = 'Familia',
    trab = 'Trabalho'
}

export class Contato {
    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: Date;
    private tipo: Tipo;

    constructor(nom: string, tel: string, email: string, aniv: Date
                ,tipo: Tipo) {
                    this.nome = nom;
                    this.telefone = tel;
                    this.email = email;
                    this.aniversario = aniv;
                    this.tipo = tipo;
                }
    
    alterarNome(nome: string) {
        this.nome = nome;
    }
    alterarTelefone(tel: string) {
        this.telefone = tel;
    }
    alterarEmail(email: string) {
        this.email = email;
    }
    alterarAniversario(data: Date) {
        this.aniversario = data;
    }
    alterarTipo(tipo: Tipo) {
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