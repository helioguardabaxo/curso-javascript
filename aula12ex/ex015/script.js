function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('[ERRO] Verifique os dados preenchidos e tente novamente!')
    } else {
        var formsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''

        //Cria tag <img>
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'images/bebe-homem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adulto-homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idoso-homem.jpg')
            }
        } else if (formsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'images/bebe-mulher.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adulto-mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idoso-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}