console.log("Hello world!");

let x = 1;
var y = 3;
console.log(x + y);

let c = 5;
const k = 10;
console.log(k - c);

let w = 9;
w = 10;
console.log(w);

const s = 10;
//s = 78; Impossible de réassigner une variable constante, lorsqu'il y a une erreur dans le js la suite du code n'est pas interpété
console.log(s);

x = y;
console.log(x);
console.log(w / 2.5);
console.log(w / y);
console.log(w * y);
console.log(w % y);

//Structures conditionnelles,

//if = si w est égal à k alors j'écris bonjour (PSEUDO-CODE)

if (w == k) {
  console.log("Bonjour");
}
//if ::: condition()::: {} ::: expression ::: bloc de condition

// == condition d'égalité ::: === condition de stricte égalité :::

console.log(55 + "55");

let bonjour = "Salut";
let bonjour02 = "les gars";

console.log(bonjour + " " + bonjour02);

// condition non !=

if (c != x) {
  console.log(c + " n'est pas égale à " + x);
}

let bool = true;

console.log(bool);

console.log(!bool);

bool = false;

if (!bool) {
  console.log("bool est égal à false");
}

//else if = sinon si

// else sinon

bool = true;

if (!bool) {
  console.log("bool est égal à false");
} else {
  console.log("bool est égale à true");
}

// > < >= <=

if (w < c) {
  // w = 10 , c = 5
  console.log("w est strictement inférieur à c");
} else {
  console.log("w est supérieur ou égal à c");
}

if (k <= w) {
  //k = 10, w = 10
  console.log("k est inférieur ou égal à w");
} else {
  console.log("k est strictement supérieur à w");
}

//switch

//condition ternaire

//Les query selector

// document.querySelector("")
// document.querySelectorAll("");
// document.getElementsByClassName("");
// document.getElementById("");

var titre = document.getElementsByClassName("titre");
console.log(titre);

var secondTitle = document.getElementById("h2-modifier");
console.log(secondTitle);
console.log(secondTitle.textContent);
secondTitle.innerHTML = "Bonjour";

var paragraphe = document.querySelector(".paragraphe");
console.log(paragraphe);

let parentImage = document.querySelector(".parent-img");

let img = document.createElement("img");

//img.src = "images/chaton.jpg"
img.setAttribute("src", "images/chaton.jpg");
//img.alt = "Un chaton noir";
img.setAttribute("alt", "Un chaton noir");
parentImage.appendChild(img);

//Les fonctions

function add(numA, numB) {
  let result = numA + numB;
  console.log(result);
}

add(1000, 2000);
add(42, 666);

// const add = (numA, numB) => { console.log(numA + numB) };

function substract(numA, numB) {
  let result = numA - numB;
  return result;
}

// const substract = (numA, numB) => numA - numB;

let trueResult = substract(50, 27);
console.log(trueResult);

function amITall(height) {
  //si la taille est supérieur ou égale à 169cm vous êtes grand
  // si elle est inférieur vous êtes petit

  if (height >= 169) {
    console.log("Je suis grand");
  } else {
    console.log("Je suis petit");
  }

  console.log(height >= 169 ? "Je suis grand" : "Je suis petit"); //ternaire
}

amITall(165);
amITall(180);
amITall(155);

function doIHaveARemainder(numA, numB) {
  let remainder = numA % numB;

  if (remainder === 0) {
    console.log("J'ai une division sans reste");
  } else {
    console.log("J'ai un reste de " + remainder);
  }

  console.log(
    remainder == 0
      ? "J'ai une division sans reste"
      : "J'ai un reste de " + remainder
  );
}

doIHaveARemainder(3, 1);
doIHaveARemainder(5, 2);
doIHaveARemainder(10, 4);

//var et let

let maVariable = 10;
// maVariable = true;
// console.log(maVariable)

// let maVariable = 10;
// console.log(maVariable)

var maNouvelleVariable = 12;
console.log(maNouvelleVariable);

var maNouvelleVariable = 15;

console.log(maNouvelleVariable);

var maVariableVar = "Georges";

function jeTesteMonLet() {
  let test = "joconde";
  var maVariableVar = "Jean-Pierre";
  if (true) {
    console.log(test);
    console.log(maVariableVar); //affiche Jean-Pierre
  }
}

jeTesteMonLet();

function jeTesteEncoreMonLet() {
  let test = "Léonard de Vinci";
  console.log(test);
}

jeTesteEncoreMonLet();

console.log(maVariableVar); // affiche Georges

function letTest() {
  let x = 31;
  if (true) {
    let x = 71; // c'est une variable différente
    console.log(x); // 71
  }
  console.log(x); // 31
}
letTest();

function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // c'est la même variable !
    console.log(x); // 71
  }
  console.log(x); // 71
}
varTest();

//switch
function numberTest(num) {
  switch (num) {
    case 0:
      console.log("Je suis le nombre 0");
      break;

    case 1:
      console.log("Je suis le nombre 1");
      break;

    case 2:
      console.log("Je suis le nombre 2");
      break;

    case 3:
      console.log("Je suis le nombre 3");
      break;

    default:
      console.log("Je suis strictement supérieur à 3");
      break;
  }
}

numberTest(5);
numberTest(2);

//Les tableaux

var myFirstArray = [];
var mySecondArray = [1, 2, 3, 4, "banane", 6, 7, 8, 9];

var un = mySecondArray[0];
console.log(un);
console.log(mySecondArray.length);
console.log(mySecondArray[3] + mySecondArray[0]);
console.log(mySecondArray[476]);

myFirstArray.push("Jeremy");
console.log(myFirstArray);
myFirstArray.push("Kévin.B");
mySecondArray.indexOf("banane");
console.log(myFirstArray);
myFirstArray.pop();
console.log(myFirstArray);

myFirstArray.push("Alain", "delon");
console.log(myFirstArray);
myFirstArray.unshift("yolo");

myFirstArray.shift();
console.log(myFirstArray);

let index = mySecondArray.indexOf(2);
console.log(index);

mySecondArray.splice(1, 1);
console.log(mySecondArray);

let banana = "une banane";
console.log(banana[5]);

// Les objets

var car = {
  brand: "renault",
  year: "2004",
  power: 125,
  show: function () {
    console.log(
      "Cette voiture est une " +
        this.brand +
        " de l'année " +
        this.year +
        " et a une puissance de " +
        this.power +
        "cv."
    );
  },
};

car.show();
console.log(car.brand);

// les boucles
var iteration = 0;
while (iteration < 7) {
  console.log(iteration);

  iteration++;
}

//for loop

for (let i = 0; i < 12; i++) {
  console.log(i);
}

for (let j = 0; j < mySecondArray.length; j++) {
  console.log(mySecondArray[j]);
}

//do while loop

let boucleDo = 5;

do {
  console.log(boucleDo);
  boucleDo++;
} while (boucleDo < 5);

let iterationBreak = 0;

while(iterationBreak < 80){
  iterationBreak++;
  console.log(iterationBreak);
  iterationBreak++;
  if(iterationBreak < 47){
    break;
  }
}

let test = 0;

while ((test < 80) & (test < 47)) {
  console.log(test);
  test++;
}

function factor(number, total) {
  if (number > 1) {
    total *= number;

    return factor(number - 1, total);
  }

  console.log(total);
}

factor(3, 1);
factor(4, 1);
factor(5, 1);
factor(6, 1);

function factorLoop(number) {
  let total = 1;

  while (number > 1) {
    total *= number--;
    //--number
  }

  console.log(total);
}

factorLoop(3);
factorLoop(4);
factorLoop(5);
factorLoop(6);
factorLoop(-5);
factorLoop(0);

function betterFactor(nbr) {
  if (nbr === 0) {
    return 1;
  }
  return nbr * betterFactor(nbr - 1);
}

console.log(betterFactor(6));

var tableauA = ["Jeannette", "Alphonse", "George", "Ludwig"];
var tableauB = ["Paul", "Frédéric", "Jacques", "Roger"];

function concatArray(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log("Les tableaux doivent être de la même taille");
    return 0;
  }

  for (let i = 0; i < tableauA.length; i++) {
    console.log(arr1[i] + " " + arr2[i]);
  }

}

concatArray(tableauA, tableauB);
concatArray(tableauA, ["Jean"]);

let arrayOfArray = [[5,6],[7,8],[9,10,15]]

for(let i = 0; i < arrayOfArray.length; i++){

  for(let j = 0; j < arrayOfArray[i].length; j++){
    console.log(arrayOfArray[i][j]);
  }

}
