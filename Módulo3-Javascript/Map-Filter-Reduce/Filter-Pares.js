let month = 1;

let months = {
  "1": "January",
  "2": "February",
};

function filter(months, month){
    return months.filter((item)=>{
      return Object.keys(item) = month;
    })
}

console.log(  filter(months, month)   );