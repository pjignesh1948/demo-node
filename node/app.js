"use strict";
let username = "hello world";
let size = 11;
console.log(size);
let city = "Ahmedabad";
let marks = 85;
let passed = true;
let subjects = ["English", "Math", "Science"];
let scores = [70, 80, 90];
let student = {
    name: "Ravi",
    age: 22
};
let emptyValue = null;
let data = undefined;
const user = {
    id: 1,
    name: "Rinku",
    email: "rinku@example.com"
};
const user1 = {
    id: 1,
    name: "Amit",
    email: ""
};
const user2 = {
    id: 2,
    name: "Priya",
    phone: "9999999999",
    email: ""
};
const userdata = {
    id: 1,
    name: "Rinku",
    email: "rinku@example.com"
};
const userr = {
    id: 2,
    name: "Rinku",
    email: "rinku@example.com"
};
const response = {
    success: true,
    message: "Data fetched successfully",
    data: [
        { id: 1, name: "Amit", email: "amit@example.com" },
        { id: 2, name: "Priya", email: "priya@example.com" }
    ]
};
response.data.forEach((user) => {
    console.log(user.name);
});
function getFirstElement(arr) {
    return arr[0];
}
const firstNumber = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["a", "b", "c"]);
console.log(firstNumber);
console.log(firstString);
class Box {
    content;
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("hello");
const datas = {
    id: 1,
    name: "Ravi"
};
const userBasic = {
    id: 1,
    name: "Ravi"
};
console.log(userBasic);
const rolePermissions = {
    admin: true,
    user: true,
    guest: false
};
let unionValue;
unionValue = "hello";
unionValue = 100;
// Type Narrowing
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Guest"] = 2] = "Guest";
})(Roles || (Roles = {}));
let currentRole = Roles.Admin;
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Loading"] = "LOADING";
})(Status || (Status = {}));
let user4;
user4 = [1, "Rinku"];
const user6 = {
    id: 1,
    name: "Rinku"
};
let anyValue = "hello";
anyValue = 123;
if (typeof anyValue === "string") {
    console.log(anyValue.toUpperCase());
}
else {
    console.log(anyValue);
}
function combine(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
class User_data {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const user9 = new User_data("Rinku", 36);
user9.greet();
class Product {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class User11 {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
const user12 = new User11("Rinku");
user12.greet();
class BankAccount {
    balance = 0;
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());
class Employee {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(`${this.name} logged in`);
    }
}
class Manager extends Employee {
    manageTeam() {
        console.log(`${this.name} is managing the team`);
    }
}
class Shape {
    printName() {
        console.log("This is a shape");
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(5);
circle.printName();
console.log(circle.getArea());
function returnValue(value) {
    return value;
}
function getValue(value) {
    return value;
}
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
console.log("End");
/Users/projects/node/app.js