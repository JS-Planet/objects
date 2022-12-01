const cliente = {
  nome:"Hosana",
  idade: 23,
  cpf:"12543652266",
  email:"hosana@email.com"
}

                //0     //1
const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])