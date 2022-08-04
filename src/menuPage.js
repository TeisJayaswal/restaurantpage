import { cakeNavigation } from './cakeNavigation'
import { renderPageContent } from './renderPageContent';
import { renderCakesImages } from './renderCakeImages';
import { renderPastryImages } from './renderPastryImages'

let currentCakeNavigationTab = 'cakes';

function onSelectNewCakeTabCallback(newCakeSelection) {
    console.log('Here in the Menu Callback');
    currentCakeNavigationTab = newCakeSelection
    console.log(currentCakeNavigationTab)
    menu()
    renderPageContent()
}

function menu() {
    const menuContent = document.createElement('div');
    const menuHeading = document.createElement('h1');
    menuContent.classList.add('page')
    menuHeading.textContent = 'Look at this yummy ass stuff';
    menuHeading.classList.add('title');
    let cakeSelect = cakeNavigation(currentCakeNavigationTab, onSelectNewCakeTabCallback)
    menuContent.appendChild(menuHeading);
    menuContent.appendChild(cakeSelect.cakeNav)
    if (currentCakeNavigationTab === 'cakes') {
        menuContent.appendChild(renderCakesImages())
    } else if (currentCakeNavigationTab === 'pastries') {
        menuContent.appendChild(renderPastryImages())
    }

    return menuContent
}

export { menu }