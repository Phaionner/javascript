var idade = 32
console.log(`Você tem ${idade} anos de idade`)
if (idade < 18) {
    console.log('Você não pode servir no exercito')
} else if (idade >= 18 && idade <= 31) {
    console.log('Você pode servir o exercito')
} else {
    console.log('Você não está apto a servir o exercito')
}