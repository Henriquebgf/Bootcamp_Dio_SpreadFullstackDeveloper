function filtersPares(array){
    return array.filter((item) =>{
        return item % 2 == 0;
    })
}

const nums = [1,2,3,4,5,6,7,8];

console.log('numéros pares do array: ',filtersPares(nums));

console.log(nums);