class Point2 {}

class Point1 {
    x: number = 0;
    y: number = 0;
  } 
   
  const pt = new Point1();
  pt.x = 4;
  pt.y = 6;
 
  console.log(`the point is consist of x value= ${pt.x}, and y value= ${pt.y}`);

  pt.y = 10

  class BadGreeter {
    name: string = '';
 //  Property 'name' has no initializer and is not definitely assigned in the constructor.
  }

  class GoodGreeter {
    name: string;
    // age: number;
   
    constructor() {
      this.name = "hello";
    //   this.age = 0;
    }
  }

  class OKGreeter {
    // Not initialized, but no error
    name!: string;
  }

  class Greeter {
    readonly name1: string = "world";
   
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name1 = otherName;
      }
    }
   
    err() {
    //   this.name1 = "not ok";
//   Cannot assign to 'name' because it is a read-only property.
    }
  }
  const g = new Greeter();
//   g.name1 = "also not ok"; //
//   Cannot assign to 'name' because it is a read-only property.


class Point {
    a: number;
    b: string;
   
    // Normal signature with defaults
    constructor(a = 0, b = "0") {
      this.a = a;
      this.b = b;
    }
  }

  class Point3 {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
  }

  class Base {
    k = 4;
  }
   
  class Derived extends Base {}
  
   
  // person class
  class Person {
     name: string = '' // default
     age: number = 0 // default 
  
     greetings(){
       return this.name + ' ' + this.age
     }
  }
  
  // to create a new instance of a class
  const person1: any = new Person()
  person1.name = 'Kevin Odongo'
  person1.age = 36 
  console.log(person1.greetings()) // This should render Kevin Odongo 36

//   example2

// motor vehicle object
class Motor {
  make: string = ''
  model: string = ''
  color: string = ''
}

// create a new instance of each
const person2 = new Person()
const motor1 = new Motor()

// warning Property 'age' does not exist on type 'Motor'
console.log(person2.age)
person2.greetings()
