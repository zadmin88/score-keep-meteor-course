import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

  // let house = {
  //   bathroom:2,
  //   bedroom: 1.5
  // };
  //
  // let yearBuilt = 1995;
  //
  // let object = {
  //   ...house,
  //   bathroom:3,
  //   yearBuilt,
  //   flooring:'Carpet'
  // };
  //
  // console.log(object);
  // class Person {
  //   constructor(name = 'anonimo', age=0){
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting(){
  //     // return 'Hi I am ' + this.name + '.';
  //     return `Hi! I am ${this.name}.`
  //   }
  //   getPersonDescription(){
  //     return `${this.name} is ${this.age} year(s) old.`
  //   }
  // };
  //
  // class Programmer extends Person{
  //   constructor(name, age, preferredLanguage='assembly'){
  //     super(name,age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting(){
  //     return `Hi! I am ${this.name} I am a ${this.preferredLanguage} programmer.`
  //   }
  //
  // }
  //
  //
  // class Employee extends Person{
  //   constructor(name, age, tittle) {
  //     super(name, age);
  //     this.tittle = tittle;
  //   }
  //
  //   getGreeting(){
  //     if (this.tittle) {
  //       return `Hi! I am ${this.name} as work as ${this.tittle}.`
  //     } else{
  //       return super.getGreeting();
  //     }
  //
  //   }
  //   hasJob(){
  //     return !!this.tittle;
  //   }
  // };
  //
  //
  // let me = new Employee('Zai',30,'abapa');
  // console.log(me.hasJob());
  // console.log(me.getGreeting());
  //
  //
  // let person = new Employee('cris', 25);
  // console.log(person.hasJob());
  // console.log(person.getGreeting());
  //
  // let programmer = new Programmer('zai',30,'abap');
  // console.log(programmer.getGreeting());
  //
  // let programmers = new Programmer('zai',30);
  // console.log(programmers.getGreeting());
//  Players.insert({
//    name: 'criss',
//    score: 4

//  });
//  console.log(Players.find().fetch());

// let square = function (x){
//   return x * x;
// };
//
// let square = (x) => {
//   return x * x;
// };
//
// let square = (x) => x * x;
//
//   console.log(square(10));

// let numbers = [9,99,4,56];
// // let newNumbers = numbers.map(function (number) {
// //   return number;
// // });
//
// // let newNumbers = numbers.map((number) => {
// // return number + 1;
// //
// // });
//
// let newNumbers = numbers.map((number) => number + 1);
//
// console.log(newNumbers);
});
