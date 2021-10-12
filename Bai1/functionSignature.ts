export {};
/* FUNCTION SIGNATURE */
let greet: Function;
greet = () => console.log("Hello world");

let greet_1: (a: string, b: string) => void;
greet_1 = (name: string, greetting: string) =>
  console.log(`${name} says ${greetting}`);
greet_1("Quân", "hello");

let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo: number, action: string) => {
  return action === "add" ? numOne + numTwo : numOne - numTwo;
};
console.log(calculate(4, 2, "add"));
console.log(calculate(4, 2, "minus"));

type Student = { name: string; age: number };
let printStudent: (student: Student) => void;
printStudent = (myStudent: Student) => {
  console.log(`${myStudent.name} is ${myStudent.age} years old`);
};
/* Cũng có thể viết như này
printStudent = ({name, age}: Student) => {
     console.log(`${name} is ${age} years old`);
}
*/ 
printStudent({ name: "Quân", age: 21 });

const nam = {
    name: "nam",
    age: 25,
}
printStudent(nam);
