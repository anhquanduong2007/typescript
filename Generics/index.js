var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
console.log(l1);
// const l2 = last(['a','b']);
/**
 * Nếu chúng ta để number thì cái last này sẽ trả về giá trị thuộc dạng number nếu đổi thành any thì dạng cuối là any
 * nó mất đi cái dạng của việc trả về nó như kiểu rằng là mình tự hỏi mình là nếu bh mình truyền cái array bất kỳ vào
 * mình chưa biết cái dạng trước của nó rằng là, mình không biết hôm này sẽ truyền cho nó dạng number or string nhưng
 * mà mình muốn rằng là khi mà cái kết quả mình gọi cái đó lên thì giá trị trả về của nó vẫn phải biết được cái dạng đó
 */
var lastT = function (arr) { return arr[arr.length - 1]; };
/**
 * ở đây lastT của chúng ta nó sẽ nhận vào 1 array thuộc dạng những cái T gì đó, nó trả về đúng cái T đấy, ở đây là nó
 * chụp ảnh được những cái gì nó truyền vào nó tạo ra được cái giá trị cuối cùng của nó thuộc đúng cái dạng đấy coi như là
 * nó chụp ảnh được cái gì chúng ta pass vào mặc dù chúng ta chưa biết rằng là chúng ta truyền tham số vào thuộc array
 * của string hay number
 */
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b"]);
var l5 = lastT(["d", "e"]);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// const m2 = makeArr('a');
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT("a");
var m4 = makeArrT(1);
var makeArrXY = function (x, y) { return [x, y]; };
var m5 = makeArrXY(5, 6);
var m6 = makeArrXY("a", "b");
var m7 = makeArrXY("a", 3);
console.log(m7);
var makeTuple = function (x, y) {
    return [x, y];
};
var m8 = makeTuple("x", 5);
var m9 = makeTuple("a", "b");
var m10 = makeTuple("g", 21);
var m11 = makeTuple(null, 3);
var makeTupleWithDefault = function (x, y) {
    return [x, y];
};
var m12 = makeTupleWithDefault("a", 3);
/**
 * Đến đây cảm giác thằng GENERICS này nó giống như là tham số trong 1 hàm nhưng nó lại thuộc vè dạng tức là data type,
 * dạng của tham số đó là cái gì nó sẽ chụp ảnh trước dạng của tham số đấy
 */
// GENERICS EXTENDS
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstname + " " + obj.lastName })); };
var makeFullNameConstraint = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstname + " " + obj.lastName });
};
var n1 = makeFullNameConstraint({ firstname: "Quân", lastName: "Dương" });
// const n2 = makeFullNameConstraint({firstname: "Quân", lastName: "Dương",age: 30});
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstname + " " + obj.lastName })); };
var n2 = makeFullNameConstraintWithGenerics({
    firstname: "Quân",
    lastName: "Dương",
    age: 30,
    gender: "male"
});
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: "Quân", age: 30 });
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
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: "nam", age: 25, male: true });
console.log(empTwo);
console.log(empTwo.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({ name: 'nam', age: 30 });
var numbers = {
    uid: 1,
    name: "Person",
    data: [1, 2, 3]
};
var rescoureOne = {
    uid: 1,
    name: "Person",
    data: 'hello'
};
var rescoureTwo = {
    uid: 1,
    name: "Person",
    data: { name: 'Avenger' }
};
var rescoureThree = {
    uid: 1,
    name: "Person",
    data: ["CSS", "HTML"]
};
