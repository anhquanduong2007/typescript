/* EXPLICIT TYPES: Khai báo dạng của nó ngay từ đấu */
let myName: string;
let age: number = 21;
let isAuthenticated: boolean;
myName = "Quân";
// myName = 30;
age = 30;
// isAuthenticated = 50
isAuthenticated = false;

// arrays
let students : string[] = ["name","hùng"];
// students.push(5);
students.push("lan");

// union
let mixed: (string | number | boolean)[];
mixed = ['Quân',5,false];
mixed.push(6);
mixed.push("Name");
mixed.push(false);

let id: string | number;
id = '123';
id = 123;

let hobby: 'book' | 'music';
hobby = 'book';
// hobby = 'cooking';

// objects
let person: object;
person = {name: 'Quân', age: 30};
person = [];
/**
 * Sao person = [] lại không bị lỗi vì array thực ra ở trong javascript thì nó cũng là 1 object
*/
let student: {
    name: string,
    age: number,
    isGood: boolean
}
student = {
    name: "Quân",
    age: 50,
    isGood: false,
}

