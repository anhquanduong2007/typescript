// GENERICS
/**
 * GENERICS nó giống như là tham số nhưng mà nó cho chúng ta biết trước được là cái tham số đó thuộc loại gì
 */
type stringArr = Array<string>;
/**
 * Cú pháp này nó gọi là GENERICS tức là khai báo trước cái dạng của cái biến của chúng ta
 */
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];
const l1 = last([1, 2, 3]);
console.log(l1);
// const l2 = last(['a','b']);
/**
 * Nếu chúng ta để number thì cái last này sẽ trả về giá trị thuộc dạng number nếu đổi thành any thì dạng cuối là any
 * nó mất đi cái dạng của việc trả về nó như kiểu rằng là mình tự hỏi mình là nếu bh mình truyền cái array bất kỳ vào
 * mình chưa biết cái dạng trước của nó rằng là, mình không biết hôm này sẽ truyền cho nó dạng number or string nhưng
 * mà mình muốn rằng là khi mà cái kết quả mình gọi cái đó lên thì giá trị trả về của nó vẫn phải biết được cái dạng đó
 */
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
/**
 * ở đây lastT của chúng ta nó sẽ nhận vào 1 array thuộc dạng những cái T gì đó, nó trả về đúng cái T đấy, ở đây là nó
 * chụp ảnh được những cái gì nó truyền vào nó tạo ra được cái giá trị cuối cùng của nó thuộc đúng cái dạng đấy coi như là
 * nó chụp ảnh được cái gì chúng ta pass vào mặc dù chúng ta chưa biết rằng là chúng ta truyền tham số vào thuộc array
 * của string hay number
 */
const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b"]);
const l5 = lastT<string>(["d", "e"]);

const makeArr = (x: number) => [x];
const m = makeArr(5);
// const m2 = makeArr('a');

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT("a");
const m4 = makeArrT(1);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m5 = makeArrXY(5, 6);
const m6 = makeArrXY("a", "b");
const m7 = makeArrXY("a", 3);
console.log(m7);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const m8 = makeTuple("x", 5);
const m9 = makeTuple("a", "b");
const m10 = makeTuple<string, number>("g", 21);
const m11 = makeTuple<string | null, number>(null, 3);
const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const m12 = makeTupleWithDefault<string | null>("a", 3);
/**
 * Đến đây cảm giác thằng GENERICS này nó giống như là tham số trong 1 hàm nhưng nó lại thuộc vè dạng tức là data type,
 * dạng của tham số đó là cái gì nó sẽ chụp ảnh trước dạng của tham số đấy
 */

// GENERICS EXTENDS
const makeFullName = (obj) => ({
  ...obj,
  fullName: `${obj.firstname} ${obj.lastName}`,
});
const makeFullNameConstraint = (obj: {
  firstname: string;
  lastName: string;
}) => {
  return {
    ...obj,
    fullName: `${obj.firstname} ${obj.lastName}`,
  };
};
const n1 = makeFullNameConstraint({ firstname: "Quân", lastName: "Dương" });
// const n2 = makeFullNameConstraint({firstname: "Quân", lastName: "Dương",age: 30});

const makeFullNameConstraintWithGenerics = <
  T extends { firstname: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstname} ${obj.lastName}`,
});
const n2 = makeFullNameConstraintWithGenerics({
  firstname: "Quân",
  lastName: "Dương",
  age: 30,
  gender: "male",
});

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empOne = addNewEmployee({ name: "Quân", age: 30 });
/**
 * Nếu bh chúng ta để chuột vào cái addNewEmployee này thì nó sẽ trả về object trong đó có mỗi cái uid thôi, và cái
 * empOne thì nó cũng chả về 1 object trong đo chỉ có uid thôi, chúng ta không thấy có gì liên quan tới ...employee ở
 * trong return cả tại vì nó đã nhìn thấy cái gì trong cái thằng employee đó đâu nhưng khi log ra chúng ta lại thấy. Bây
 * giờ thử console.log(empOne.name) thì nó sẽ ý kiến ngay tại vì name này hoàn toàn không tồn tại ở trong uid number, nó
 * có nghĩa rằng là khi mà chúng ta gọi cái hàm addNewEmployee này lên thì nó hoàn toàn chưa biết được là cái employee mình
 * chỉ khai báo là object, nó không biết trong đó gồm có những cái gì thế nên ở đây là 1 ví dụ về việc cần sử dụng
 * Generics khi mà chúng ta chưa biết chúng ta sẽ truyền vào cái gì nhưng chúng ta phải móc 1 property trong đó chẳng hạn
 */
console.log(empOne);
// console.log(empOne.name)

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empTwo = addNewEmployeeT({ name: "nam", age: 25, male: true });
console.log(empTwo);
console.log(empTwo.name);

const addNewEmployeeTWithConstraint = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empThree = addNewEmployeeTWithConstraint({name: 'nam',age: 30})


// GENERICS in INTERFACE
interface Rescoure<T> {
    uid: number, 
    name: string,
    data: T
}
type NumberRescoure = Rescoure<number[]>

const numbers: NumberRescoure = {
    uid: 1,
    name: "Person",
    data: [1,2,3]
} 

const rescoureOne: Rescoure<string> = {
    uid: 1,
    name: "Person",
    data: 'hello'
}

const rescoureTwo: Rescoure<object> = {
    uid: 1,
    name: "Person",
    data: {name: 'Avenger'}
}

const rescoureThree: Rescoure<string[]> = {
    uid: 1,
    name: "Person",
    data: ["CSS","HTML"]
}