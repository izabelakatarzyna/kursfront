console.log("ELO");
const x = 1;
let y = 1;

//x = 2;
y = 3;
console.log("y:", y, ", x =", x);
console.personName = "John";
const person = {
  name: "John",
  age: 38,
  outfit: {
    hat: "Chanel",
    shirt: "Nike",
    boots: "Nike",
  },
};

//console.log(person.outfit.boots);

const people = ["John", "Joanna", "Josh"];

console.log(people);

function przyklad(argument = "default", drugiArgument) {
  console.log("siemka");
  console.log("wykonuje sie z: ", argument);
  console.log("wykonuje sie z: ", drugiArgument);
  console.log("nara");
  return "zwracam wafrtość z " + argument;
}

//przyklad("argumentem");
//przyklad();

//const zwrot = przyklad("arg");

//console.log( zwrot );

console.log(console);

const dog = {
  voice: () => {
    console.log("hau hau");
  },
};

//dog.voice()

//console.log(dokument);

const h1 = document.querySelector("h1");
console.log(h1);

h1.innerHTML = "TEST";

let count = 0;
function counter() {
  count++;
  console.log(count);
}

//prxzypisanie wydarzenia do kliknięcia na h1
h1.onclick = function () {
  counter();
};

//warunek

let a = 2;
const b = 4;

if (a < 2) {
  console.log("a jest mniejsze od 2");
} else {
  console.log("a nie jest mniejsze od 2");
}
