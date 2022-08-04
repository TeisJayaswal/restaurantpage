import './style.css';
import { createNavigation } from './nav';
import { homepage } from './homePage';
import { menu } from './menuPage';
import { contact } from './contactPage';


function createHeader(currentTab, onChangeCurrentTab) {
    console.log(`createHeader onChangeCurrentTab: ${onChangeCurrentTab}`)
    let navSelect = createNavigation(currentTab, onChangeCurrentTab)
    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(navSelect.nav);
    return header 
} 

function createContainer(currentTab) {
    const container = document.createElement('div');
    container.classList.add('container');
    if (currentTab === 'home') {
        container.appendChild(homepage())
    } else if (currentTab === 'menu') {
        container.appendChild(menu())
    } else if (currentTab === 'contact') {
        container.appendChild(contact())
    }
    return container
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerText = document.createElement('div');
    footerText.textContent = `Copyright © Pip & Al's Cake Cafe`
    footer.appendChild(footerText)
    return footer 
}

export {
    createHeader,
    createContainer,
    createFooter
};