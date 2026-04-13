let username: string = "hello world";
let size: number = 11
console.log(size)

let city: string = "Ahmedabad";

let marks: number = 85;
let passed: boolean = true;


let subjects: string[] = ["English", "Math", "Science"];
let scores: number[] = [70, 80, 90];

let student: { name: string; age: number } = {
    name: "Ravi",
    age: 22
};

let emptyValue: null = null;
let data: undefined = undefined;


interface User {
    id: number;
    name: string;
    email: string;
}

const user: User = {
    id: 1,
    name: "Rinku",
    email: "rinku@example.com"
};


interface User {
    id: number;
    name: string;
    phone?: string;
}


const user1: User = {
    id: 1,
    name: "Amit",
    email: ""
};

const user2: User = {
    id: 2,
    name: "Priya",
    phone: "9999999999",
    email: ""
};

type Users = {
    id: number;
    name: string;
    email: string;
};


const userdata: Users = {
    id: 1,
    name: "Rinku",
    email: "rinku@example.com"
};

interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    phone?: string;
}

const userr: User = {
    id: 2,
    name: "Rinku",
    email: "rinku@example.com"
};





interface Userrs {
    id: number;
    name: string;
    email: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: User[];
}

const response: ApiResponse = {
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

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["a", "b", "c"]);


console.log(firstNumber);
console.log(firstString);

class Box<T> {
    content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("hello");


interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;


interface Userrrr {
    id?: number;
    name?: string;
}

type FullUser = Required<Userrrr>;

interface User1 {
    id: number;
    name: string;
}

const datas: Readonly<User1> = {
    id: 1,
    name: "Ravi"
};
interface User4 {
    id: number;
    name: string;
    email: string;
    age: number;
}

type UserBasic = Pick<User4, "id" | "name">;

const userBasic: UserBasic = {
    id: 1,
    name: "Ravi"
};

console.log(userBasic);


type UserWithoutEmail = Omit<User, "email">;

type UserRole = "admin" | "user" | "guest";

const rolePermissions: Record<UserRole, boolean> = {
    admin: true,
    user: true,
    guest: false
};

let unionValue: string | number;

unionValue = "hello";
unionValue = 100;
// Type Narrowing
function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}


enum Roles {
    Admin,
    User,
    Guest
}

let currentRole: Roles = Roles.Admin;


enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Loading = "LOADING"
}


let user4: [number, string];

user4 = [1, "Rinku"];


interface User5 {
    id: number;
    name: string;
    email: string;
}

type UserKeys = keyof User5;


const user6 = {
    id: 1,
    name: "Rinku"
};

type UserType = typeof user6;


type MyMappedType<T> = {
    [K in keyof T]: T[K];
};


type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false




let anyValue: unknown = "hello";
anyValue = 123;
if (typeof anyValue === "string") {
    console.log(anyValue.toUpperCase());
} else {
    console.log(anyValue);
}


function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}






class User_data {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user9 = new User_data("Rinku", 36);
user9.greet();


class Product {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

class User11 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, ${this.name}`);
    }
}

const user12 = new User11("Rinku");
user12.greet();

class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());






class Employee {
  constructor(public name: string, public email: string) {}

  login(): void {
    console.log(`${this.name} logged in`);
  }
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`${this.name} is managing the team`);
  }
}



abstract class Shape {
  abstract getArea(): number;

  printName(): void {
    console.log("This is a shape");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
circle.printName();
console.log(circle.getArea());


function returnValue<T>(value: T): T {
  return value;
}

function getValue<T>(value: T): T {
  return value;
}






console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");













