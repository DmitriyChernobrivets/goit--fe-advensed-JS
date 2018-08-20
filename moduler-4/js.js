const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};
const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

function Cashier(name, productDatabase, customerMoney = 0) {

    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = customerMoney;

    this.getCustomerMoney = function (custom) {
        this.customerMoney = custom;
        return custom;
    };
    this.countTotalPrice = function (order) {
        let sum = 0;
        const prdValue = Object.values(productDatabase);
        const ordValue = Object.values(order);
        const prdKeys = Object.keys(productDatabase);
        const ordKeys = Object.keys(order);
        for (const val in prdKeys) {
            for (const el in ordKeys) {
                if (prdKeys[val] === ordKeys[el]) {
                    sum += prdValue[val] * ordValue[el];
                }
            }
        }
        return sum;
    };
    this.countChange = function () {
        const change = takenMoney - total;
        if (total > takenMoney) {
            return this.onError();
        } else {
            return this.onSuccess(change);
        }
    }
    this.onSuccess = function (change) {
        return console.log(`Спасибо за покупку, ваша сдача ${change}`)
    }
    this.onError = function () {
        return console.log('Очень жаль, вам не хватает денег на покупки')
    }
    this.reset = function () {
        return this.customerMoney = 0;
    }
}
const mango = new Cashier('Mango', products);

console.log(mango.name);
console.log(mango.productDatabase);
console.log(mango.customerMoney);

let takenMoney = mango.getCustomerMoney(300);
console.log(takenMoney);

const total = mango.countTotalPrice(order);
console.log(total);

const rest = mango.countChange();
const moneyReset = mango.reset();
console.log(moneyReset);

console.log(mango.customerMoney);