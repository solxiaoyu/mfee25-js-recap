
// (4, 3)呼叫可以直接寫
// let b = ((a, b) => {
//     return a + b
// })(4, 3);

// console.log(b);



// const sweet = true;
// const salty = false;

// let result = sweet ? "甜" : "不甜";
// console.log(result);



let handleAge = (age) => {
    if(age > 18){
        return("成人");
    }else if(age < 18 && age > 12){
        return("少年");
    }else{
        return("兒童");
    }
}

console.log(handleAge(20));