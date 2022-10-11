// ET et OU & et |

let x = 10;
let y = 9;

// OU

if (x == 10 || y == 5) {
  console.log("x est égal à 10 ou y est égal à 5");
} else {
  console.log("x n'est pas égal à 10 et y n'est pas égal à 5");
}

// ET

if (x == 10 && y == 5) {
  console.log("x est égal à 10 et y est égal à 9");
} else {
  console.log(
    "Une de ces deux conditions ou les deux conditions ne sont pas remplies: x = 10 et y = 5"
  );
}

// XOR ^ ( ou exclusif)

if ((x == 5) ^ (y == 9)) {
  console.log("Une de ces deux valeurs est juste: x = 5, y = 9");
} else {
  console.log(
    "Aucune de ces deux valeurs ou les deux valeurs sont justes: x = 5, y = 9"
  );
}

if ((x == 10) ^ (y == 9)) {
  console.log("Une de ces deux valeurs est juste: x = 10, y = 9");
} else {
  console.log(
    "Aucune de ces deux valeurs ou les deux valeurs sont justes: x = 10, y = 9"
  );
}

//NAND

if (x != 10 && y != 9) {
  console.log(true);
} else {
  console.log(false);
}

// Bonnes pratiques
// à chaque changement de bloc {} il est nécessaire de faire un tab pour indenter
// Si une fonction retourne quelquechose elle doit commencer par: si elle retourne une bool par is ou has
// Le nom d'une fonction doit toujours refléter ce qu'elle fait
// Une fonction doit faire une seule chose à la fois

// NULL et Undefined

// NULL
let nl = null;

console.log(nl);

let element = document.getElementById("paul");
console.log(element);

let elementB = document.getElementById("paulette");
console.log(elementB);

// Undefined

let k;
console.log(k);

if (k === undefined) {
  k = 12;
}

console.log(k);

let button = document.querySelector(".exempleA");

// function myClick(event){
//     console.log("J'ai cliqué sur le bouton");
// }

// button.addEventListener("click", myClick);

// function anonyme
button.addEventListener("click", function(event){
    console.log("J'ai cliqué sur le bouton");
})


button.addEventListener("click", function(event){
    console.log(event);
    event.preventDefault();
})

let textInput = document.getElementById("exempleB");

textInput.addEventListener("input", function(event) {
    console.log(event.target.value);
})

document.querySelector("#test").addEventListener("change", function(event){
    console.log("checkbox changed state");
})


//////////////AJAX

var buttonImage = document.getElementById("send");
var image = document.querySelector("img");


buttonImage.addEventListener("click", function(event){

    // var ajax = new XMLHttpRequest();

    // ajax.open("GET", "https://api.thecatapi.com/v1/images/search", true);


    // ajax.responseType = "json";
    // ajax.send();

    // ajax.onload = function(){
        
    //     let json = this.response[0];
    //     image.src = json.url;
        
    // }
    

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => {
        console.log(response)
        
    }
       
    )

})