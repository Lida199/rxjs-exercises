"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
//სავარჯიშო 1
const a$ = (0, rxjs_1.of)(1, "aa", 3);
const b$ = (0, rxjs_1.of)(4, 5, "bb");
const c$ = (0, rxjs_1.concat)(a$, b$).pipe((0, rxjs_1.map)((x) => (typeof x === "number" ? 10 * x : x + x)));
c$.subscribe((x) => console.log(x));
//სავარჯიშო 2
const d$ = (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.filter)((x) => x % 2 === 0), (0, rxjs_1.map)((x) => x * 2));
d$.subscribe((x) => console.log(x));
function getUsers(...users) {
    const final = [];
    for (let user of users) {
        final.push(user);
    }
    return (0, rxjs_1.of)(final).pipe((0, rxjs_1.delay)(5000));
}
getUsers({
    firstName: "giorgi",
    lastName: "bazerashvili",
    age: 25,
}, {
    firstName: "meore",
    lastName: "giorgi",
    age: 17,
}, {
    firstName: "mesame",
    lastName: "giorgi3",
    age: 28,
})
    .pipe((0, rxjs_1.map)((x) => x
    .filter((x) => x.age > 18)
    .map((x) => `${x.firstName} ${x.lastName}, ${x.age} years old`)))
    .subscribe((x) => console.log(x));
// მეორე ვარიანტი
// ამ შემთხვევაში მნიშვნელობებს აბრუნებს ცალკე სტრიმებად
// .pipe(
//   concatMap((x) => from(x)),
//   filter((x) => x.age > 18),
//   map((x) => `${x.firstName} ${x.lastName}, ${x.firstName} years old`)
// )
