"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
//სავარჯიშო 1
var a$ = (0, rxjs_1.of)(1, "aa", 3);
var b$ = (0, rxjs_1.of)(4, 5, "bb");
var c$ = (0, rxjs_1.concat)(a$, b$).pipe((0, rxjs_1.map)(function (x) { return (typeof x === "number" ? 10 * x : x + x); }));
c$.subscribe(function (x) { return console.log(x); });
//სავარჯიშო 2
var d$ = (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.filter)(function (x) { return x % 2 === 0; }), (0, rxjs_1.map)(function (x) { return x * 2; }));
d$.subscribe(function (x) { return console.log(x); });
var users = [
    {
        firstName: "giorgi",
        lastName: "bazerashvili",
        age: 25
    },
    {
        firstName: "meore",
        lastName: "giorgi",
        age: 17
    },
    {
        firstName: "mesame",
        lastName: "giorgi3",
        age: 28
    },
];
function getUsers(users) {
    return new rxjs_1.Observable(function (subscriber) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].age > 18) {
                subscriber.next("".concat(users[i].firstName, " ").concat(users[i].lastName, ", ").concat(users[i].age, " years old"));
            }
        }
    }).pipe((0, rxjs_1.delay)(5000));
}
// მეორე ვარიანტი
// function getUsers(users: User[]): Observable<string> {
//   return from(users).pipe(
//     filter((x) => x.age > 18),
//     map((x) => `${x.firstName} ${x.lastName}, ${x.age} years old`),
//     delay(5000)
//   );
// }
getUsers(users).subscribe(function (x) { return console.log(x); });
