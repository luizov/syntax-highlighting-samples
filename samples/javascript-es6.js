/* =======================
=
=  Modules
=
========================*/

// From component folder
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';

// From layout folder
import { Header } from '../layouts/header.js';
import { Sidebar } from '../layouts/sidebar.js';

import * as math from "./lib/math";
import { sum, pi } from "./lib/math";
import exp, { pi, e } from './lib/mathplusplus';

{
    console.log(`
      ************** Modules **************
           === Value Export/Import ===
                      `);

    console.log("2π = ", math.sum(math.pi, math.pi));
    console.log("2π = ", sum(pi, pi));

}

/* =======================
=
=  Classes
=
========================*/

class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    getPos() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

export { Shape }

let shape = new Shape(1, 10, 20);
console.log(`Shape pos:`, JSON.stringify(shape.getPos()));
shape.move(15, 35);
console.log(`Shape pos:`, JSON.stringify(shape.getPos()));


class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return {
            width: this.width,
            height: this.height
        };
    }
}

let rectangle = new Rectangle(2, 11, 21, 100, 200);

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
    static defaultRectangle() {
        return new Rectangle('default', 2, 2, 100, 100);
    }
}

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
    static defaultCircle() {
        return new Circle('default', 4, 4, 100);
    }
}

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    set width(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    get area() {
        return this._width * this._height;
    }
};



/* =======================
=
=  Arrow functions
=
========================*/

let evens = new Array(1, 2, 3);

let odds = evens.map(v => v + 1);
let pairs = evens.map(v => ({
    even: v,
    odd: v + 1
}));
let nums = evens.map((v, i) => v + i);

console.log(`Array odds:`, JSON.stringify(odds));
console.log(`Array pairs:`, JSON.stringify(pairs));
console.log(`Array nums:`, JSON.stringify(nums));


let example = {
    nums: [2, 5, 3, 6, 8, 4, 5, 1, 5],
    fives: [],
    getFives: function () {
        this.nums.forEach((v) => {
            if (v % 5 === 0)
                this.fives.push(v);
        });
    }
}

example.getFives();

/* =======================
=
=  Destructuring
=
========================*/


var list = [1, 2, 3];
var [a, , b] = list;

var obj = {
    a: 1
};

var {
    a,
    b = 2
} = obj;

console.log(`Value a:`, a);
console.log(`Value b:`, b);

/* =======================
=
=  Template literals
=
========================*/

let customer = {
    name: "Foo"
};

let card = {
    amount: 7,
    product: "Bar",
    unitprice: 42
};

let message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

/* =======================
=
=  Promises
=
========================*/

let fetchPromised = (name, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Hi ${name}`), timeout);
    });
}


Promise.all([
    fetchPromised('Foo', 1000),
    fetchPromised('Bar', 500),
    fetchPromised('Baz', 200)
]).then((data) => {
    let [foo, bar, baz] = data;
    console.log(`Response all promises: foo=${foo} bar=${bar} baz=${baz}`);
}, (err) => {
    console.log(`Error: ${err}`);
});