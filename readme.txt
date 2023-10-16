1. install project
    npm create vite@latest
    project name: typescript-tutorial
    select a framework: vanilla
    select a variant: typescript

    cd typescript-tutorial
    npm install
    npm run dev

2. tsconfig.json

    //กำหนดให้คอมไพล์ typescript ออกมาเป็น javascript es2016
    "target": "es2016"

    //ตำแหน่ง folders ที่เก็บกลุ่มไฟล์ (.ts)
    "rootDir":"./"

    //ตำแหน่ง folders ที่เก็บกลุ่มไฟล์ (.ts) ที่คอมไพล์เรียบร้อยแล้ว เช่น folder ที่ชื่อ dist เป็นต้น
    "outDir":"./dist/"
    
    // กำหนดขอบเขตของ file ที่จะคอมไพล์ เช่นไฟล์ที่ถูกจัดเก็บใน folder src เป็นต้น
    "include":["src"]

    example folder > src > app.ts, index.ts
            folder > dist > app.js, index.js

3. สรุป src -> main.ts

    type หลักๆ มี string, number, boolean
    type พิเศษ มี any(ไม่มีการตรวจสอบ), unknown(มีการตรวจสอบ), never, undefined, null

    การใช้งานต้องดูก่อนว่าเป็น ตัวแปร, function หรือ class

    -ตัวแปร

        let name: string | number = "woramet"
        let array: string[] = ["game", "jame"]
        let Tuple: [number, boolean, string] = [10, true, "typescript is the best"]
        let object: {name: string, model: string, year?: number} = {name: 'honda', model: 'civic', year: 2023}
        
        Type alias vs interface 

            //สามารถกำหนด type เดี่ยวๆได้ (type aliases) ยืดหยุ่นกว่า
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

            //interface ใช้กับ object สามารถขยายได้
                interface Person {
                    name: string;
                    age: number;
                }
                const user: Person = { name: "Alice", age: 30 };

    -function // เลือกใส่ค่าที่ parameter, ค่าที่ return

        function myString(name:string, ...arr: number[]):string{
            return name
        }
        console.log(myString("woramet"))
    
    -class

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

