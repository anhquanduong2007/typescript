export {};
/* CLASS */
export class Employee {
    public name: string;
    /**
     * ! public này có nghĩa là cái thuộc tính name của class Employee này có thể được truy cập từ bên ngoài class tức là
     * ! từ bên ngoài cái ngoặc nhọn của class và đồng thời nó có thể được thay đổi từ bên ngoài ngoặc nhọn
     */
    private age: number;
    /**
     * ! private có nghĩa là sẽ không truy cập được giá trị của cái age này từ bên ngoài class và đương nhiên nếu không thể
     * ! truy cập được giá trị thì cũng không thể thay đổi được giá trị đó
     */
    readonly male: boolean;
    /**
     * ! readonly như kiểu lai giữa public và private hoàn toàn có thể truy cập được giá trị ngoài class nhưng mà không thể
     * ! thay đổi giá trị đó
     */
    constructor(n: string,a: number,m:boolean){
        this.name = n;
        this.age = a;
        this.male = m;
    }

    /* Cách ngắn gọn hơn
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean,
    ){}
    */

    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`;
    }
}
const quan = new Employee("Quân",30,true);
console.log(quan.name);
// console.log(quan.age); không xem được vì đang để private nên không thể truy cập từ ngoài vào
console.log(quan.male);

quan.name = "nam";
console.log(quan);
// quan.male = false; cái này để readonly nó chỉ truy cập ngoài class được thôi, nó không thể thay đổi được

console.log(quan.print());

const bob = new Employee('bob',25,true);

let employees : Employee[] = [];
employees.push(quan);
employees.push(bob);
employees.forEach(employee => console.log(employee.name,employee.male, employee.print()));