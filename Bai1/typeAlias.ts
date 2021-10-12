export {};
/* TYPE ALIAS; tạo ra 1 type mới từ những type có sẵn */
type StringorNumber = string | number;
/**
 * ! type này nên viết hoa
 */
type Student = {
  name: string;
  id: StringorNumber;
};
/**
 * ! Khi khai báo cái type này ví dụ nhưu Student thì nó không phải object nên không phải dấu , mà là dấu ;
 */
const studentDetails = (id: StringorNumber, studentName: string): void => {
  console.log(`Student ${studentName} has id ${id}`);
};
/**
 * * void: không trả về cái gì cho function, cho hàm cả.
 */
studentDetails(123, "Quân");
studentDetails("456", "Nam");

const greet = (user: Student) => {
  console.log(`${user.name} with id ${user.id} says hello`);
};
greet({ name: "Quân", id: 123 });
greet({ name: "Sơn", id: 456 });
