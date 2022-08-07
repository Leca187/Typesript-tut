let sales: number = 123_456_789
let course: string = 'TypeScript'
let is_published: boolean = true
// TS moze sam da dodeli tip npr, u slucaju ispod leca je tipa string
let leca = 'name'

// ako ne deklarisemo tip bice tip any
let level
//niz 
let numbers = [1,2,3]

// funkcija ocekuje tip
function render(document: any){
    console.log(document)
}

// tuple je niz odredjene duzine gde svaki element ima svoj tip
let user: [number,string] = [1, 'leca']
// moze da se pusuje ne prijavljuje greski ali nije OK
user.push(1)

// const small = 1
// const medium = 2
// const large = 3

// samo dedeljuje vrednosti od 0, a mozemo i sami da ako prvi stavimo
// da bude 1 samo ce nastaviti dalje da medium bude 2 itd
enum size {small = 1, medium, large}

let mySize: size = size.medium
console.log(mySize);

//functions
//ako u funkciji dodelimo default vrednost unosu i u pozivu funkcije opet dodelimo novu vrednost
// nova vrednost ce se gledati

function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022){
        return income * 1.2
    }
    return income * 1.3
}

calculateTax(10_110, 2023)

// Objects

let employee: {
    readonly id: number,    // readonly modifier - ne mozemo da menjamo id 
    name?: string           // ? optional
    retire: (date: Date) => void  // obajsno!!!
} = {id: 1, 
    name: 'leca',
    retire: (date: Date)=>{
        console.log(date);
    }
    }

//type aliases 

type Employee = {
    readonly id: number,     
    name?: string
    retire: (date: Date) => void
}

let employee1: Employee = 
{   id: 1, 
    name: 'leca',
    retire: (date: Date)=>{
        console.log(date);
    }
}

// union types - variabla moze biti oba tipova
//
function kgToLbs(weight:number | string){
    // Narrowing
    if (typeof weight === 'number'){
        return weight * 2.2
    }else{
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10)
kgToLbs('10kg')

// intersection types - variabla mora biti (je) oba tipa

type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal types - exact, specific

// let quantity: 50 | 100 = 100  - mozemo dodeliti samo 50 ili 100

type Quantity = 50 | 100

let quantity: Quantity = 100

type Metric = "cm" | "inch"

// Nullable types

function greet(name: string | null | undefined){

    if(name){
        console.log(name.toUpperCase())  
    }else{
        console.log('Hola!');  
    }     
}

greet(null)

// Optional Chaining

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
if (customer !== null && customer !== undefined){
    console.log(customer.birthday)
}

// Optional property access operator - isto kao ovo gore 

console.log(customer?.birthday?.getFullYear());

// Optional element access operator

//customers?.[0] - da ako je nulti clan null or undefined da ispise undefined

// Optional call

let log: any = null

log?.('a') // odradice se samo ako funkcija log referencira postojecu funkciju a ako ne vrati ce undefined