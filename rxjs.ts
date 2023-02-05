import {
  of,
  map,
  interval,
  filter,
  Observable,
  delay,
  concat,
  from,
} from "rxjs";

//სავარჯიშო 1

const a$ = of(1, "aa", 3);
const b$ = of(4, 5, "bb");
const c$ = concat(a$, b$).pipe(
  map((x) => (typeof x === "number" ? 10 * x : x + x))
);
c$.subscribe((x) => console.log(x));

//სავარჯიშო 2

const d$ = interval(1000).pipe(
  filter((x: number) => x % 2 === 0),
  map((x: number) => x * 2)
);

d$.subscribe((x) => console.log(x));

//სავარჯიშო 3

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const users: User[] = [
  {
    firstName: "giorgi",
    lastName: "bazerashvili",
    age: 25,
  },
  {
    firstName: "meore",
    lastName: "giorgi",
    age: 17,
  },
  {
    firstName: "mesame",
    lastName: "giorgi3",
    age: 28,
  },
];

function getUsers(users: User[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].age > 18) {
        subscriber.next(
          `${users[i].firstName} ${users[i].lastName}, ${users[i].age} years old`
        );
      }
    }
  }).pipe(delay(5000));
}

// მეორე ვარიანტი

// function getUsers(users: User[]): Observable<string> {
//   return from(users).pipe(
//     filter((x) => x.age > 18),
//     map((x) => `${x.firstName} ${x.lastName}, ${x.age} years old`),
//     delay(5000)
//   );
// }

getUsers(users).subscribe((x) => console.log(x));
