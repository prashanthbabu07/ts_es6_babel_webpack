export default class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let p = new Person("Prash", "36");
console.log(p.name, p.age)