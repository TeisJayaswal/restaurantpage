import Semla from './images/bolle.jpeg';
import Heart from './images/heart_bolle.jpeg';

function renderPastryImages() {
    const picturecontainer = document.createElement('div')
    picturecontainer.classList.add('pictureContainer')
    const semlaPicture = new Image();
    semlaPicture.src = Semla;
    semlaPicture.classList.add('menuImage')
    const heartPicture = new Image();
    heartPicture.src = Heart;
    heartPicture.classList.add('menuImage')
    picturecontainer.appendChild(semlaPicture)
    picturecontainer.appendChild(heartPicture)

    return picturecontainer
}

export { renderPastryImages }