let body = document.body;
let headTitle = document.createElement("h1");

//////////////// TITLE NAV AND UL CREATION
headTitle.textContent = "Exercice JS CSS";
body.appendChild(headTitle);

let nav = document.createElement("nav");

let ul = document.createElement("ul")

nav.appendChild(ul);
body.appendChild(nav);


///////////////// LINKS CREATIONS

let linkArray = ["Menu", "Produit", "Contact"];
let linkArrayLink = ["menu.html", "produit.html", "contact.html"];

for(let i = 0; i < linkArray.length; i++){

    let li = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = linkArray[i];
    link.href = linkArrayLink[i];

    li.appendChild(link);
    ul.appendChild(li);
}

////////////////////INNER DIVS CREATION

let mainDiv = document.createElement("div");
let innerDiv1 = document.createElement("div");
let innerDiv2 = document.createElement("div");

mainDiv.id = "mainDiv";

innerDiv1.style.border = "3px solid #333";
innerDiv1.classList.add("innerDiv");

innerDiv2.style.border = "3px dashed red";
innerDiv2.classList.add("innerDiv");

mainDiv.appendChild(innerDiv1);
mainDiv.appendChild(innerDiv2);

body.appendChild(mainDiv);

let loremA = {
    text: "Lorem cupidatat officia dolor excepteur occaecat sint excepteur est labore minim",
    indexToHighlight: 3,
    highlightColor: "blue",
}

let loremB = {
    text: "Accusantium necessitatibus nihil est ad pariatur officiis corporis possimus!",
    indexToHighlight: 4,
    highlightColor: "red",
}


/////////////////////// PARAGRAPHES CREATION
for(let i = 0; i < 7; i++){
    let firstLoremP = document.createElement("p");
    firstLoremP.textContent = loremA.text;

    let secondLoremP = document.createElement("p");
    secondLoremP.textContent = loremB.text;

    if(i === loremA.indexToHighlight){
        firstLoremP.style.color = loremA.highlightColor;
    }
    if(i === loremB.indexToHighlight){
        secondLoremP.style.color = loremB.highlightColor;
    }

    innerDiv1.appendChild(firstLoremP);
    innerDiv2.appendChild(secondLoremP);
}

