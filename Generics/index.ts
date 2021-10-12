// GENERICS
/**
 * GENERICS nó giống như là 1 tham số nhưng mà nó cho chúng ta biết trước được là cái tham số đó thuộc loại gì
 */
type stringArr = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1];