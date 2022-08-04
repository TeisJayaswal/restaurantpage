import { createHeader, createContainer, createFooter } from "./body";

let currentNavigationTab = 'home';

function onSelectNewTabCallback(newSelection) {
    console.log("Here in the callback")
    currentNavigationTab = newSelection
    renderPageContent()
}

function renderPageContent() {
    console.log(`Running renderPageContent with currentNavigationTab=${currentNavigationTab}`)
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ""
    contentDiv.appendChild(createHeader(currentNavigationTab, onSelectNewTabCallback));
    contentDiv.appendChild(createContainer(currentNavigationTab));
    contentDiv.appendChild(createFooter());

    return contentDiv
}

export { renderPageContent }

// function printHello(input) {
//     console.log("Hello!")
//     console.log(input)
// }

// function addTwoNumbers(hullabolo, y) {
//     return hullabolo + y
// }

// addTwoNumbers(10, 20)

// const z = 5
// const w = 1
// addTwoNumbers(z, w)

// import Picture from './pipandal.png'; 
// import './style.css';

// function printStatement() {
//     console.log('printing statement to check')
// }
// function createHeader() {
//     console.log('creating header')
//     const header = document.createElement('h1');
//     header.textContent = `Welcome to Pip and Al's Cake Cafe`
//     header.classList.add('header');
//     return header 
// }

// function getImage() {
//     console.log('getting image')
//     const myImage = new Image();
//     myImage.src = Picture; 
//     return myImage
// }

// function createDescription() {
//     console.log('creating description')
//     const myDescription = document.createElement('div');
//     myDescription.textContent = `Do you like yummy yummy cakes and dogs? Well then you're going to like Pip and Al's Cake Cafe!`
//     return myDescription
// }

// export { 
//     printStatement,
//     createHeader,
//     createDescription,
//     getImage   }; 