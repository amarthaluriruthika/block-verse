//arithmetic operators
let x=10,y=16
console.log(x*y)
console.log(x-y)
console.log(x/y)
console.log(x+y)
console.log(x**y)
console.log(x%y)

let z=5
z+=2
console.log(z)
z-=1
console.log(z)

z*=3
console.log(z)
z/=1
console.log(z)
z%=2
console.log(z)
z**=2
console.log(z)
//comparision operators
let a=10,b="10"
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
//logical operators
let age=20
console.log(age>=20 && age<=40)
console.log(age<20||age>20)
console.log(!(age<18))
//string operators
let firstName="Ruthika"
let lastName="Amarthaluri"
let fullName=firstName+lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName},welcome to devastra`
console.log(correctName)
//ternary opertaion
let myAge=19;
if(myAge>=18){
    console.log("eligible for voting")
}
else{
    console.log("you cannot vote")
}
let result=myAge>=18 ?"eigible for voting":"you cannot vote"
console.log(result)
let count=5
console.log(count++)
console.log(count)
console.log(++count)
//typeof operations
console.log(typeof count)
console.log(typeof "Ruthika")
console.log(typeof 18)