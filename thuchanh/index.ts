import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice(`Vinamilk`, 'drink milk', 5000000);
/**
 * * dạng của documentOne sẽ là hasPrint tức là documentOne nó là cái gì nhưng nó bắt buộc phải có cái hàm print
 * * nên chúng ta có thể khai báo nó là 1 new Invoice hay new Payment tại vì đơn giản new Invoice và new Payment nó
 * * implements cái interface hasPrint nên chắc chắn new Invoice và new Payment có hàm print như vậy cái documentOne
 * * này nó cũng có hàm print nên chắc chắn nó cũng thoải mãn cái điều kiện là nó là 1 thuộc dạng interface hasPrint
 */
const documentTwo: hasPrint = new Payment('VietNam Airlines', 'fly',25000000);
const allDocument: hasPrint[] = [];
allDocument.push(documentOne);
allDocument.push(documentTwo);
console.log(allDocument);