const cliente = {
  nome:"Hosana",
  idade: 23,
  cpf:"12543652266",
  email:"hosana@email.com",
  fones:["5591235498","5521988743124"]
}

cliente.dependentes = {
    nome:"Pérola",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Pérola Silva"

console.log(cliente)