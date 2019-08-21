function contar() {
    var numero = document.querySelector('input#txtNumero')
    var tab = document.getElementById('resultado')

    if (numero.value.length == 0) {
        window.alert('Digite um número para iniciar!')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
            for (var cont = 0; cont <=10; cont++) {
                let conta = 0
                let item = document.createElement('option')
                conta = cont * n
                item.text = `${n} X ${cont} = ${conta}`
                item.value = `tab${cont}`
                tab.appendChild(item)
            }
    }
    
}