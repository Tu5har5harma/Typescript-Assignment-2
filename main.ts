let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
let alternateWay = (message as string).endsWith('c');

let log = function(message){
    console.log(message);
}

// Defining Functions in a clean way

let doLog = () => console.log();

/**Interface Method */

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person : Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p= {
    firstName: 'Steve',
    lastName: 'Rogers'
};  

fullName(p);

class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1= new Employee('Tushar');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager Delegating tasks`);
    }
}

let m1 = new Manager('Michael');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

enum myConstants{
    pi = 3.14,
    e = 2.75,
    log2= 0.3,
    log5= 0.7,
}

console.log('Dinding Circumference of Circle');

let radius: number =10;

console.log(2 * myConstants.pi * radius);

/** Aliases */

type stringOrNum = string | number;

/** Dynamic Any Types */

let ages: any = 25;

ages = true;
console.log(ages);
ages = 'hello';
console.log(ages);
ages = {name: 'luigi'};
console.log(ages);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: {name: any, age: any};

ninja = {name: 'Yoshi', age: 25};

console.log(ninja);

// Arrays

let names = ['Luigi', 'Mario', 'Yoshi'];
names.push('toad');

let mixed1= ['mario', 8, 9];
mixed1.push('Luigi');

// Objects

let ninjas = {
    name: 'mario',
    belt: 'black',
    age: 30
}

/** Classes */

class Point{
    x: number;
    y:number;

    constructor(x?: number, y?:number){
        this.x=x;
        this.y=y;
    }

    draw(){
        console.log('X: ' + this.x +  'Y: '+ this.y );
    }
}

/** Object */
let point = new Point();
point.draw();