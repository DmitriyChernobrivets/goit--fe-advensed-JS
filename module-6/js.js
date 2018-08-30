'use strict';

class Humburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
    }

    addTopping(topping) {
        if (!this._toppings.includes(topping)) {
            return this._toppings.push(topping)
        } else
            return console.log('Извините такая приправа уже есть');
    }

    removeTopping(topping) {
        if (this._toppings.includes(topping))
            return this._toppings.splice(this._toppings.indexOf(topping), 1);
        else
            return console.log('Извините такой приправы нету')
    }

    get getToppings() {
        return console.log('Приправа: ', this._toppings);
    }

    get getSize() {
        return console.log('Размер: ', this._size);
    }

    get getStuffing() {
        return console.log('Начинка: ', this._stuffing);
    }

    get calculatePrice() {
        let sum = 0;
        sum = Humburger.SIZES[this._size].price
            + Humburger.STUFFINGS[this._stuffing].price
            + this._toppings.reduce((acc, el) => {
                return acc += Humburger.TOPPINGS[el].price;
            }, 0);
        return console.log('Общая сумма: ', sum);
    }

    get calculateCalories() {
        let sum = 0;
        sum = Humburger.SIZES[this._size].calories
            + Humburger.STUFFINGS[this._stuffing].calories
            + this._toppings.reduce((acc, el) => {
                return acc += Humburger.TOPPINGS[el].calories;
            }, 0);
        return console.log('Всего калорий: ', sum);
    }
}
const hamburger = new Humburger('SIZE_LARGE', 'STUFFING_CHEESE');
Humburger.SIZE_SMALL = 'SIZE_SMALL';
Humburger.SIZE_LARGE = 'SIZE_LARGE';

Humburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Humburger.STUFFING_SALAD = 'STUFFING_SALAD';
Humburger.STUFFING_MEAT = 'STUFFING_MEAT';

Humburger.TOPPING_SPICE = 'TOPPING_SPICE';
Humburger.TOPPING_SAUCE = 'TOPPING_SAUCE';


Humburger.SIZES = {
    [Humburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Humburger.SIZE_LARGE]: {
        price: 50,
        calories: 70,
    },
};

Humburger.STUFFINGS = {
    [Humburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Humburger.STUFFING_SALAD]: {
        price: 25,
        calories: 30,
    },
    [Humburger.STUFFING_MEAT]: {
        price: 35,
        calories: 40,
    },
};

Humburger.TOPPINGS = {
    [Humburger.TOPPING_SPICE]: {
        price: 10,
        calories: 15,
    },
    [Humburger.TOPPING_SAUCE]: {
        price: 20,
        calories: 10,
    },
};
hamburger.addTopping(Humburger.TOPPING_SPICE);
hamburger.addTopping(Humburger.TOPPING_SAUCE);
hamburger.removeTopping(Humburger.TOPPING_SAUCE);
hamburger.getToppings;
hamburger.getSize;
hamburger.getStuffing;
hamburger.calculatePrice;
hamburger.calculateCalories;
console.log(hamburger);
console.log("Is hamburger large: ", hamburger.getSize === Humburger.SIZE_LARGE);