import Picture from "./images/pipandal.png";

function homepage() {
    const homePageContent = document.createElement('div');
    homePageContent.classList.add('page')
    const title = document.createElement('h1');
    title.textContent = `Welcome to Pip & Al's Cake Cafe`; 
    title.classList.add('title')
    const myPicture = new Image();
    myPicture.src = Picture;
    myPicture.classList.add('homePicture')
    homePageContent.appendChild(title)
    homePageContent.appendChild(myPicture);
    return homePageContent
}

export { homepage }