import sportsImage from './images/sports.jpeg';
import princessImage from './images/princess.jpeg';

function renderCakesImages() {
    const picturecontainer = document.createElement('div')
    picturecontainer.classList.add('pictureContainer')
    const sportsPicture = new Image();
    sportsPicture.src = sportsImage;
    sportsPicture.classList.add('menuImage')
    const princessPicture = new Image();
    princessPicture.src = princessImage;
    princessPicture.classList.add('menuImage')
    picturecontainer.appendChild(sportsPicture)
    picturecontainer.appendChild(princessPicture)

    return picturecontainer
}

export { renderCakesImages }