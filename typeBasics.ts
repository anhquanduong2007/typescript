/* TYPE BASICS */
let myName = "Quan";
let age = 21;
let isStudent = true;

// myName = 40;
myName = "Nam";
/**
 * Nếu mà gán myName = 1 string nào đó nó sẽ không có lỗi nhưng
 * ! gán myName là 1 số hay kiểu gì liệu gì ngoài string thì ví dụ myName = 40 nó sẽ báo lỗi
 * nguyên nhân là khi chúng ta viết trong typescript ví dụ như let myName = "Quan" khi chúng ta khai báo nó vào dạng typestring
 * thì nó sẽ lập tức gán cho cái biến đó thuộc dạng string thế nên là là chúng ta không thể gán cho nó 1 dạng khác được
 * * --> Thế nên cái này typescript này nó rất là tiện, nó giúp cho cái dạng của chúng ta nó được thống nhất giũa những cái biên
 * * và nó giúp cho chúng ta tránh được rất nhà là nhiều lỗi ở trong javascript.
 */

// age = "abc";
age = 22;

// isStuden = "Quan";
isStudent = false;
