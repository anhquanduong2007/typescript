export {};
/* INTERFACE */
interface Person {
    name: string;
    age: number;
    speak(lang: string):void;
    spend(amount: number):number;
}
const quan: Person = {
    name: "Quân",
    age: 30,
    speak(text: string):void {
        console.log(text)
    },
    spend(amt: number):number {
        return  amt;
    }
}
console.log(quan);
const helloPerson = (onePerson: Person) => console.log(`hello ${onePerson.name}`);
helloPerson(quan);