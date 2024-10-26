export enum Tipo {
    amg = 'Amigo(a)',
    fam = 'Familia',
    trab = 'Trabalho',
    des = 'Desconhecido(a)'
}

export class Contato {
    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: Date;
    private tipo: Tipo;
    private img: string;
    private favorito: boolean;

    constructor(nom: string, tel: string, email: string, aniv: Date
                ,tipo: Tipo, img: string) {
                    this.nome = nom;
                    this.telefone = tel;
                    this.email = email;
                    this.aniversario = aniv;
                    this.tipo = tipo;
                    this.img = img;
                    this.favorito = false;
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
    alterarImg(img: string) {
        this.img = img;
    }
    alterarFav(cod: boolean) {
        this.favorito = cod;
    }

    favoritarContato() {
        this.favorito = true;
    }
    desfavoritarContato() {
        this.favorito = false;
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
    obterImg() {
        return this.img;
    }
    obterFav() {
        return this.favorito;
    }
}