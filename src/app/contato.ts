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

    constructor(nom: string, tel: string, email: string, aniv: Date
                ,tipo: Tipo, img: string) {
                    this.nome = nom;
                    this.telefone = tel;
                    this.email = email;
                    this.aniversario = aniv;
                    this.tipo = tipo;
                    this.img = img;
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
        let data = this.aniversario;
        let dia = this.aniversario.getDate() + 1;
        let mes = this.aniversario.getMonth() + 1;
        let mesNome = "";
        switch(mes) {
            case 1:
                mesNome = 'Janeiro';
                break
            case 2:
                mesNome = 'Feveiro';
                break
            case 3:
                mesNome = 'Março';
                break
            case 4:
                mesNome = 'Abril';
                break
            case 5:
                mesNome = 'Maio';
                break
            case 6:
                mesNome = 'Junho';
                break
            case 7:
                mesNome = 'Julho';
                break
            case 8:
                mesNome = 'Agosto';
                break
            case 9:
                mesNome = 'Setembro';
                break
            case 10:
                mesNome = 'Novembro';
                break
            case 11:
                mesNome = 'Outubro';
                break;
            case 12:
                mesNome = 'Dezembro';

        }
        return `${dia} de ${mesNome}`;
    }
    obterTipo() {
        return this.tipo;
    }
    obterImg() {
        return this.img;
    }
}