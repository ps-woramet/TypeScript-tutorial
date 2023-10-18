// simple types
// main primitives = boolean, number, string
// Less common primitives = bigint, symbol

// Type Assignment -> 1. Explicit 2. Implicit

// 1. Explicit กำหนดแบบชัดเจน
let firstName: string = "woramet"
let age: number = 25;
let married: boolean = false;

// 2. Implicit กำหนดไม่ชัดเจน
let lastName = "Tompudsa"

// Special Types = any, unknown, never, undefined & null
// any เปลี่ยนเป็นชนิดข้อมูลแบบไหนก็ได้
// unknown ยังไม่รู้ว่าจะกำหนด type ประเภทไหนดี แล้วค่อยมาเปลี่ยนทีหลัง แนะนำให้ใช้แทน any
// never ใช้เพื่อระบุว่าฟังก์ชันหรือการทำงานจะไม่สิ้นสุด (never-ending) หรือไม่มีค่าที่สามารถกลับมาได้ (unreachable) โดยปกติ never ถูกใช้ในบริบทของการจัดการข้อผิดพลาด (error handling) หรือเงื่อนไขที่ไม่มีทางเกิดขึ้นเลย (conditions that should never occur) 
// undefined ค่าที่ไม่ระบุ
// null ค่าว่าง
let array: any = []
array: {};

let array2: unknown = []
array2: {};

function throwError(message: string): never {
  throw new Error(message);
}

let udfBValue: undefined = undefined;

let nullValue: null = null;

// ----------------------------------------------------------

// TypeScripte Arrays
// Array ใช้เพื่อเก็บค่าหลายค่าในลิสต์แบบมีลำดับและมีความยืดหยุ่นในการเพิ่มหรือลบค่า
const names: string[] = [];
names.push('game');
names.push('peter');
console.log(names);
// สามารถใช้ readonly เพื่อป้องกันการแก้ไข
const numbers: readonly number[] = [2, 4, 6];
console.log(numbers);

// TypeScript Tuples
// Tuple ใช้เพื่อเก็บค่าหลายค่าในลำดับแบบมีลำดับและมีจำกัดในจำนวนและชนิดข้อมูลที่เก็บได้ในแต่ละตำแหน่ง และไม่สามารถเปลี่ยนแปลงได้หลังจากกำหนด
let Tuple: [number, boolean, string];
Tuple = [10, true, "typescript is the best"]
console.log(Tuple);
// สามารถกำหนดชือได้
let Tuple2: [myNum: number, myBool: boolean, myStr: string]
Tuple2 = [1, false, 'python is the best']
console.log(Tuple2);
// การ destructuring tuples
let Tuple3: [number, boolean, string];
Tuple3 = [1, true, "c++ is the best"]
const [myNum3, myBool3, myStr3] = Tuple3;
console.log(myNum3);
console.log(myBool3);
console.log(myStr3);

// ----------------------------------------------------------

// TypeScript Object
const car: {type: string, model: string, year: number} = {type: 'honda', model: 'civic', year: 2023}

// ----------------------------------------------------------

// TypeScript Enums (ช้ในกรณีที่คุณต้องการที่จะจำแนกชุดของค่าที่เป็นค่าคงที่)
// ถ้าไม่กำหนดค่าจะเริ่มจาก 0 ไปเรื่อยๆ ถ้ากำหนดจะเริ่มจากค่าที่กำหนด
enum DaysOfWeek {
  Sunday,    // 0
  Monday,    // 1
  Tuesday,   // 2
  Wednesday, // 3
  Thursday,  // 4
  Friday,    // 5
  Saturday   // 6
}
console.log(DaysOfWeek.Monday);

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCode.NotFound);

enum MonthList {
  firstMonth = "January",
  secondMonth = "February",
}
console.log(MonthList.firstMonth);

// ----------------------------------------------------------

// Type Aliases (กำหนดชื่อ type เอง)
type CarYear2 = number;
type CarType2 = string;
type CarModel2 = string;
const carYear: CarYear2 = 2023;
const carType: CarType2 = "Honda";
const carModel: CarModel2 = "Civic";
type Car2 = {
  year: CarYear2,
  type: CarType2,
  model: CarModel2
}
const car2: Car2 = {year: carYear, type: carType, model: carModel}

// TypeScript Interfaces เหมือน aliases
//(สามารถใช้ได้กับชนิดข้อมูลแบบ object เท่านั้น)
interface Rectangle{
  height: number,
  width: number
}
const rectangle: Rectangle = {height: 20, width: 10}

// สามารถขยายได้
interface Rectangle2{
  h: number,
  w: Number
}
interface ColorRectangle extends Rectangle2{
  color: string
}
const rectangle2: ColorRectangle = {
  h:10,
  w:10,
  color: 'red'
}

// union type สามารถ union ได้ใช้เพื่อรับหลายชนิดได้
function myStausCode(code: string | number){
  console.log(`my status code is ${code}`);
}
myStausCode(404)
myStausCode('404')

// ----------------------------------------------------------

// functions
function gettime(): number{
  return new Date().getTime();
}

// functions no return
function printHello(): void{
  console.log('hello');
}

function multiply(a:number, b:number, c?:number){
  console.log(a,b,c);
}
multiply(2,4)

function divide({divided, divisor} : {divided: number, divisor: number}){
  return divided/divisor
}
const result = divide({ divided: 10, divisor: 2 });
console.log(result); // 5

// ----------------------------------------------------------

// รับ array (rest parameter)
function add(a: number, b: number, ...arr: number[]){
  console.log(a); // 1
  console.log(b); // 2
  console.log(...arr); // 3,4,5
  
}
add(1,2,3,4,5)

// ----------------------------------------------------------

// TypeScript casting
// as, <override>
let someName : unknown = 'hello';
console.log((someName as string).length)
console.log((<string>someName).length)

// ----------------------------------------------------------

// TypeScript Classes
class Person{
  private name: string;
  public constructor(name: string){
    this.name = name;
  }
  public getName(): string{
    return this.name;
  }
}
const person = new Person('game')
console.log(person.getName());

// ----------------------------------------------------------

// Typescript Generics
// Generics แปลว่า ทั่วไป

//Generics Type alias
//รับค่า type มาใช้ใน type alias
type Email<t>={
  username: string;
  password: t;
}
const valueEmail : Email<string> = {username: "admin", password:"123"};
console.log(valueEmail); // {username="admin", password:"123"}
console.log(typeof(valueEmail.password)); // string

const valueEmail2 : Email<number> = {username: "admin", password: 123};
console.log(valueEmail2);// {username="admin", password:123}
console.log(typeof(valueEmail2.password)); // number

// function แบบไม่รับ type
function identity(value: string){
  return value
}

// Generics function
// รับค่า type มาใช้ใน function กำหนด type ของ parameter กำหนด type ของการ return
function identity2<T>(value: T): T{
  return value
}
const resIdentity2 = identity2<number>(123)
const resIdentity2Str = identity2("i love typescript")
console.log(resIdentity2);
console.log(resIdentity2Str);

// ----------------------------------------------------------

// check type
let value: any = "Hello, TypeScript";
console.log(typeof(value));
