let person={
    name:"Ruthika Amarthaluri",
    age:19,

}
console.log(person.name)
console.log(person["age"])
const {name,age}=person;//Destructuring assignment
console.log(name)
console.log(age)
let fruits=["apple","mango","banana"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let square=numbers.map((num)=>{
    return num*num;
});//transforms each number into square
console.log(square)
let even=numbers.filter((num)=>num%2==0)
console.log(even)
let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)

let persons=[{
    name:"Radhika",
    age:19,
    marks:50
},{
    name:"Poojitha",
    age:18,
    marks:60
},{
    name:"Kiran",
    age:19,
    marks:90
}
]
let max=0
for(let person of persons){
    if(person.marks>max){
       Name=person.name
       Marks=person.marks
        max=person.marks;

    }
}
console.log(`${Name} got highest marks ${Marks} so ${Name} is topper`)