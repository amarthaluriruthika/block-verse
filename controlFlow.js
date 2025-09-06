let marks=85;
if(marks>=90){
    console.log("A+ Grade")
}
else if(marks>=80){
    console.log("A Grade")
}
else if(marks>=70){
    console.log("B Grade")
}
else{
    console.log("Fail")
}
let day=2;
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
         console.log("Friday")
        break
    case 6:
         console.log("Saturday")
         break
     case 7:
        console.log("Sunday")
    default:
        console.log("invalid input!")
    break
 }
 let n=5
 let sum=0
//for(let i=1;i<=n;i++){
    // console.log(i)
    // sum+=i
// }
let i=0
//while(i<=n){
   // console.log(i)
  // sum+=i
  //  i++
//}
do{
    console.log(i)
    sum+=i
    i++
}while(i<=n);
console.log("sum=",sum)
let colors=["Red","Blue","Green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}

console.log("_________")
for(let color of colors){
    console.log(color)
}
let person={
    Name:"ruthika",
    age:19,
    college:"JNTU GV"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i==3){
        continue;
    }
    else if(i===2){
        break;
    }
    console.log(i)
}