function somaNumeros(array){
    return array.reduce((valorAnterior,atual) =>{
        return valorAnterior + atual;
    }, 0);
}

const array = [1,2];

console.log(somaNumeros(array));