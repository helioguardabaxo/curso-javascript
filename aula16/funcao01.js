function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let resultado = parimpar(11)

console.log(`O número é ${resultado}`)
console.log(parimpar(30))