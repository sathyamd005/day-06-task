// 03.Write a “person” class to hold all the details.

// we creating an parent 
class Person{
    constructor(firstname,lastname,age,){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    getDetails(){
        return(`The name of the person is ${this.firstname} ${this.lastname} and his age is ${this.age}`)
}

}
// we creating an instances 
let person1=new Person("sathya","dev","22");
console.log(person1.getDetails());
console.log(person1.age);