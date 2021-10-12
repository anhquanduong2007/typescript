import {hasPrint} from "./interfaceForClass";
export class Invoice implements hasPrint {
    /**
     * ! Chúng ta có 1 cái class nó sẽ implements cái interface tức là nó sẽ thực thi cái interface tức là class này
     * ! bắt buộc phải những thuộc tính và method giống như trong interface 
     */
    constructor(
        readonly client: string,
        private work: string,
        public amout: number
    ){}

    print() {
        return `${this.client} owes ${this.amout} dollar(s) for this work: ${this.work}`;
    }
}
export class Payment implements hasPrint {
    constructor(
        readonly recipient: string,
        private job: string,
        public amt: number
    ){}

    print() {
        return `I owe ${this.recipient} ${this.amt} dollar(s) for this job`;
    }
}