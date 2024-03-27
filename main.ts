//  Q no 76

function addingTwoNumbers(num1:number,num2:number):number{
   return num1 + num2
}
console.log(addingTwoNumbers(5,6));

//  Q no 77

function greetUser(name:string ="Anonymous"){
   console.log(`Hello ${name}`);
}
greetUser("Adil");
greetUser();

//  Q no 78

function squareDecleration(num3:number):number{
   return num3 * num3
}

const squareExprationration = function(num4:number):number{
    return num4 * num4
}
console.log(squareDecleration(4));
console.log(squareExprationration(4));
