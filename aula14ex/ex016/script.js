function contar() {
    
    var inicio = document.querySelector('input#txtInicio')
    var fim = document.querySelector('input#txtFim')
    var passo = document.querySelector('input#txtPasso')
    var resultadoTela = document.querySelector('div#resultado')
    //resultadoTela.innerHTML = `${Number(inicio.value)} - ${Number(fim.value)} - ${Number(passo.value)} `

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultadoTela.innerHTML = 'Impossível contar'
    } else {
        resultadoTela.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (p < f) {
            //Contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                resultadoTela.innerHTML += `${cont}\u{1F449}`    
            }
        } else {
            //Contagem regressiva
            for (let cont = i; cont >= f; cont -= p) {
                resultadoTela.innerHTML += `${cont}\u{1F449}`    
            }
        }
        resultadoTela.innerHTML += '\u{1F3C1}'
    }

    
    
    
}