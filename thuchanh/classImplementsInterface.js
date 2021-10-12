"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    /**
     * ! Chúng ta có 1 cái class nó sẽ implements cái interface tức là nó sẽ thực thi cái interface tức là class này
     * ! bắt buộc phải những thuộc tính và method giống như trong interface
     */
    function Invoice(client, work, amout) {
        this.client = client;
        this.work = work;
        this.amout = amout;
    }
    Invoice.prototype.print = function () {
        return this.client + " owes " + this.amout + " dollar(s) for this work: " + this.work;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipient, job, amt) {
        this.recipient = recipient;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "I owe " + this.recipient + " " + this.amt + " dollar(s) for this job";
    };
    return Payment;
}());
exports.Payment = Payment;
