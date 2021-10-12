export {};
/* OPTIONAL AND NON NULL */
const add = (a: number, b?: number) => (b ? a + b : a);

console.log(add(1, 2));
console.log(add(3));

/**
 * * Cái dấu ? kia chính là optional tham số không bắt buộc tuy nhiên nếu chỉ truyền vào 1 cái như kia thì vẫn hiện lỗi
 * * là tại vì có 2 param mà cta chỉ truyền 1 cái nên ở đây b sẽ là undefined và khi a là 1 number + undefined nó sẽ ra
 * * NaN nên hãy để ý nó
 */

const addNonNull = (a: number, b?: number) => a + b!;
/**
 * * Dấu ! nghĩa là non null có nghĩa là khi mình phang dấu ! này vào tức là mình bảo với typescript là khi t gọi cái
 * * hàm addNonNull này lên thì nhất định t sẽ truyền vào 1 cái b. Thường thì khi không có cái ! thì b nó sẽ hiện ra một
 * * warning là cái b này vẫn có thể là undefined được nếu chúng ta không truyền cái gì vào cả thế nên là cái ! sẽ giúp minh
 * * làm cái việc như vừa nói là nó sẽ nói với ts là t nhất định sẽ truyền vào b nếu mình không truyền thì nó lỗi mình tự chịu
 * *
 */
console.log(addNonNull(3, 4));
console.log(addNonNull(3));
