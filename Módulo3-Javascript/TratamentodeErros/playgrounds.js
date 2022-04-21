function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetro");

        if(typeof arr !== 'object') 
            throw new TypeError("Array precisa ser do tipo object");

        if (typeof num !== ' number')
            throw new TypeError(' num precisa ser do tipo number');

        if ( arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é o referenceError!")
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Este erro é o TypeError!")
            console.log(e.message)
        }else if(e instanceof RangeError) {
            console.log("Este erro é o RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado!")
        }
    }
}

console.log(validaArray([], 'a'));
