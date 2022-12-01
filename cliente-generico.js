function Cliente(nome,cpf,email,saldo){
    this.nome =nome
    this.cpf=cpf
    this.email =email
    this.saldo=saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const Hosana = new Cliente("Hosana","1254359542","hosana@email.com",100)

console.log(Hosana)