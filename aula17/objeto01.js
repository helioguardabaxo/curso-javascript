let amigo = {nome: 'Joselito', 
        sobrenome: 'Sem Noção',
        saudacao: 'E aí, mermão!',
        cumprimentar() {
            return console.log(this.saudacao)
        }}

console.log(amigo.nome)
amigo.cumprimentar()
console.log(amigo)
