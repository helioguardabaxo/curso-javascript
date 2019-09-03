var numero = document.querySelector('input#txtNumero')
var lista = document.getElementById('listaNumero')
var resultado = document.querySelector('div#resultado')
var listaDeNumeros = []


function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(numero.value) && !inList(numero.value, listaDeNumeros)) {
        listaDeNumeros.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `${numero.value}`
        lista.appendChild(item) 
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
        
}

function finalizar() {
    if (listaDeNumeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = listaDeNumeros.length
        let maior = listaDeNumeros[0]
        let menor = listaDeNumeros[0]
        let soma = 0
        let media = 0
        for (let posicao in listaDeNumeros) {
            soma += listaDeNumeros[posicao]
            if (listaDeNumeros[posicao] > maior) {
                maior = listaDeNumeros[posicao]
            }
            if (listaDeNumeros[posicao] < menor) {
                menor = listaDeNumeros[posicao]
            }
        }

        media = soma / listaDeNumeros.length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Total de números cadastrados: ${total}</p>`
        resultado.innerHTML += `<p>Maior número: ${maior}</p>`
        resultado.innerHTML += `<p>Menor número: ${menor}</p>`
        resultado.innerHTML += `<p>Soma: ${soma}</p>`
        resultado.innerHTML += `<p>Média: ${media}</p>`
    }
}