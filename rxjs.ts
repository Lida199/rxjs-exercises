import {
  of,
  map,
  interval,
  filter,
  Observable,
  delay,
  concat,
  from,
  concatMap,
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

function getUsers(...users: User[]): Observable<User[]> {
  const final: User[] = [];
  for (let user of users) {
    final.push(user);
  }
  return of(final).pipe(delay(5000));
}

getUsers(
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
  }
)
  .pipe(
    map((x) =>
      x
        .filter((x) => x.age > 18)
        .map((x) => `${x.firstName} ${x.lastName}, ${x.age} years old`)
    )
  )
  .subscribe((x) => console.log(x));

// მეორე ვარიანტი
// ამ შემთხვევაში მნიშვნელობებს აბრუნებს ცალკე სტრიმებად

// .pipe(
//   concatMap((x) => from(x)),
//   filter((x) => x.age > 18),
//   map((x) => `${x.firstName} ${x.lastName}, ${x.firstName} years old`)
// )
