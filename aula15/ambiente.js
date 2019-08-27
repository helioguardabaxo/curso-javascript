// criação do array
let num = [5, 8, 2, 9, 1]
console.log(`Números: ${num}`)

// adicionando um item com a posição definida
num[5] = 10
console.log(`Números: ${num}`)

// adicionando na última posição do array
num.push(4)
console.log(`Números: ${num}`)

// tamanho do array
console.log(`Tamanho do array: ${num.length}`)

console.log('')

// imprimindo todos os valores e suas chaves
for (let i = 0; i < num.length; i++) {
    console.log(`O número da posição ${i} é o ${num[i]}`)
}

console.log('')

// usando for com "in"
for (let i in num) {
    console.log(`O número da posição ${i} é o ${num[i]}`)
}

console.log('')

// ordenando os valores do array
num.sort()
console.log(`Números: ${num}`)

console.log('')

// descobrindo a posição de um valor dentro do array
let posicao = num.indexOf(10)
console.log(`O número 10 está na posição ${posicao} `)

console.log('')

// quando um valor não é encontrado no array o JS retorna como -1
posicao = num.indexOf(111)
if (posicao == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O número está na posição ${posicao} `)
}