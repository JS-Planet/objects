class Cliente {
    constructor(nome,email,cpf,saldo){
     this.nome = nome
     this.email = email
     this.cpf = cpf
     this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const Hosana = new Cliente("Hosana","hosana@email.com","112233665544",100)

Hosana.exibirSaldo()

console.log(Hosana)