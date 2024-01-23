//js-variable-dynamically types

// var name = "vikas"
// var age = "22"
// var height = "5.8"
// var weight = "54.300"


// console.log("my name is", name)
// console.log(`my name is ${name} and my age is ${age}`)
// console.log(`my height is ${height} and my weight is ${weight}`)

//conditionals
// if else else if switch 

// var age = 25
// if(age>26){
//      console.log("you can vote")
// }
// else{
//     console.log("you can't vote")
// }

// var age = 45;

// if(age<18){
//     console.log("go to scool")
// }
// else if(age>18 && age<22){
//     console.log("go to college")
// }
// else if(age>22 && age <25){
//     console.log("focus on career")
// }
// else if(age>25 && age<50){
//     console.log("go to office")
// }
// else{
//     console.log("go to home")
// }

// var age = 28;

// if(age<18){
//     console.log("go to school")
// }
// else if(age>18 && age<23){
//     console.log("go to college")
// }
// else if(age>23 && age<30){
//     console.log("go to office")
// }
// else{
//     console.log("go to party")
// }

// var myintrostring = `my name is aspyraza 
// my age is 22 
// my college name is vocational studies`
// console.log(myintrostring)
// document.write(myintrostring)

// var age = 32;

// if(age<18){
//     console.log("go to school")
// }
// else if(age>18 && age<35){
//     console.log("go to office")
// }
// else{
//     console.log("go to mandir")
// }

// let age = 15;
// if(age<18){
//     console.log("go to school")
// }
// else if(age>18 && age<40){
//     console.log("go to office")
// }
// else{
//     console.log("go to mandir")
// }

// let myintrostring = `my name is aspyraza 
// i am 21 years old`
// console.log("myintrostring")
// document.write("myintrostring")
 

// let ll=10;
// let ul=100;

// for(let num=ll ;num<ul ;num++)
// {
//     let count=0;
//     for(let div=2;div<= num-1;div++)
//     {
//         if(num%div == 0){
//             count++
//         }
//     }
    
//     if(count>0){
//         console.log("not prime number",num);
//     }
//     else{
//         console.log("prime number", num)
//     }
// }

// let ll=100;
// let ul=5000;

// for(let num=ll;num<ul;num++)
// {
//     let count=0;
//     for(let div=2; div <= num-1;div++)
//     {
//         if(num%div == 0)
//         {
//             count++
//         }
//     }

//     if(count>0){
//         console.log("not prime",num);
//     }
//     else{
//         console.log("prime num"), num;
//     }
// }

// let num= 7;
// let count=0

// for(let div=2; div <= num ; div++)
// {
//     if(num%div == 0)
//     {
//         count++
//     }
//     if(count>2){
//         console.log("not prime",num);
//     }
//     else{
//         console.log("prime", num);
//     }
// }

// for(let i=1; i<=10;i=i+1){
//     for(let j=1; j<=20;j=j+1){
//         console.log(1,j);
//         break;
//     }
// }

let i=1;
while(1<=10){
    for(let j=1; j<=5; j++){
        for(let k=1; k<=15;k++){
            console.log("i,j,k");
            break
        }
    }
    i=i+1
}
console.log("loop se bahar")