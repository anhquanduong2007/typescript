export {};
/* FUNCTION */
/**
 * Chúng ta sẽ phải khai báo hàm theo cái dạng của typescript đấy là nó phải có những cái khai báo dạng của biến ở trong đó
 * ! Nếu không có thì vẫn không sao nhưng mà thường thì phải có type cho cái biến đó không thì nó sẽ hiện ra một cái nhắc nhở
 * ! cho chúng ta. Hầu hết các dự án thực tế thì bắt buộc phải có 1 cái dạng gì đó chứ nó không cho phép để dạng any như này
 * ! const square = (side) => side * side;
 */
const square = (side: number) => side * side;
console.log(square(3));

let greet: Function;
/**
 * Muốn khai báo kiểu dữ liệu cho 1 biến thì theo cú pháp let/var/const + tên biến: Kiểu dữ liệu
 */
greet = () => {
  console.log("Hello");
};
greet();

const add = (a: number, b: number, c: number | string) => {
  console.log(a + b);
  console.log(c);
};
// console.log(5,7,"a");
// console.log(add(5,6,7));
add(1, 2, 3);
add(1, 2, "Quân");

const add_2 = (a: number, b: number, c?: string | number) => {
  console.log(a + b);
  console.log(c);
};
/**
 * Dấu hỏi chấm này có nghĩa là tham số này không bắt buộc phải truyền vào, còn nếu truyền vào nó phải thuộc kiểu dữ liệu đã
 * được định nghĩa
 */
add_2(1, 3);

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log("sum: ",a + b);
    console.log(c);
};
/**
 * Nếu mà c không có gì truyền vào thì giá trị của nó sẽ là giá trị chúng ta gán ban đầu cho biến đó 
*/
addDefault(1,3,"Quân");
addDefault(1,3);

const minus = (a: number, b: number) : number => {
    return a - b;
};
/**
 * Kết quả trả về của hàm này phải là kiểu được chỉ định ví dụ như ở đây là number 
*/

