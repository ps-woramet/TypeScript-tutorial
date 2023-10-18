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

    type หลักๆ มี string, number, boolean, array, tuple, object
    type พิเศษ มี any(ไม่มีการตรวจสอบ), unknown(มีการตรวจสอบ), never, undefined, null

        Example string, number, boolean
            
            let firstName: string = "woramet"
            let age: number = 25;
            let married: boolean = false;

        Example array ไม่จำกัด

                const names: string[] = [];
                names.push('game');
                names.push('peter');
                console.log(names);

        Example tuple จำกัดตามรูปแบบ

            let Tuple: [number, boolean, string];
            Tuple = [10, true, "typescript is the best"]
            console.log(Tuple);

        Example object

            const car: {type: string, model: string, year: number} = {type: 'honda', model: 'civic', year: 2023}
            console.log(car)

    1.กำหนด type หรือ interface(กำหนดได้แค่ object)
        หากต้องการสร้าง type เอง (type alias) โปรดตรวจสอบว่าค่าใน type ที่สร้าง ต้องการค่า type ที่เราส่งมาหรือไม่ เรียกวิธีการว่า generic

        // type alias ไม่ generic

            type Profile={
                name: string;
                lastname: string;
            }
            const valueProfile : Profile = {name="woramet", lastname="tompudsa"}

        // type alias ทำการ generic

            type Email<t>={
                username: string;
                password: t;
            }
            const valueEmail : Email<string> = {username: "admin", password:"123"};

    2.การใช้งานต้องดูก่อนว่าเป็น ตัวแปร, function หรือ class

        -ตัวแปร (ใส่ type ได้เลย)

            let name: string | number = "woramet"
            let array: string[] = ["game", "jame"]
            let Tuple: [number, boolean, string] = [10, true, "typescript is the best"]
            let object: {name: string, model: string, year?: number} = {name: 'honda', model: 'civic', year: 2023}

        -function // เลือกใส่ค่าที่ parameter, ค่าที่ return (ต้องดูว่าต้องการค่า type ที่เราส่งมาหรือไม่)

            // ไม่ Generic function
    
                function myString(name:string, ...arr: number[]):string{
                    return name
                }
                console.log(myString("woramet"))

            // Generic function

                function identity2<T>(value: T): T{
                    return value
                }
                const resIdentity2 = identity2<number>(123)

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

