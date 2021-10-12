export {};
/* ARRAY AND OBJECTS */
let names = ['mai', 'name', 'hùng'];
/**
 * Khi chúng ta khai báo như thế này thì array này sẽ chỉ chứa những phần tử thuộc dạng string, nên chúng ta không thể push những
 * thứ linh tinh vào đây được 
*/
names.push('sơn');
// names.push(1);
// names.push(false);

let numbers = [1,3,2];
// numbers.push("Quân");
// numbers[3] = "Quân"
numbers[3] = 10;

let mixed = [1,'Quân',false];
mixed.push(5);
mixed.push("Quân");
mixed[3] = true;
// mixed.push({a: "2",b:"3"})

let person = {
    name: "Quân",
    age: 25,
    isStudent: true
}
// person.name = 5
person.name = "Nam";
// person.age = "Quân"
person.age = 21;

// person.hobbies = ['book']

/**
 * hobbies không tồn tại trong cái object person nên không thể thêm được thuộc tính này 
*/

// Tuy nhiên chúng ta có thể gán cả cái cụm person bằng cái mới nhưng phải đủ các property, tên property và kiểu dữ liệu phải đúng 
// với những gì khai báo ở trên và không thể thêm 1 property or method nào ở trong ngoài những property cũ
person = {
    name: "Nam",
    age: 56,
    isStudent: false,
    // skills: ["js"]
}
