let person={
    pid:100,
    name:"John",
    city:'hyd'
}

//get keys
let k=Object.keys(person)
console.log(k)

//get values
let v=Object.values(person)
console.log(v)

//freeze
Object.freeze(person)

person.pid=200;
person.mobile=999999;
console.log(person)


let obj1={
    a:10
}

let obj2={
    b:20
}

let obj3={
    c:30
}

//join obj1 & obj2
let merged=Object.assign({},obj1,obj2,obj3)
console.log(merged)