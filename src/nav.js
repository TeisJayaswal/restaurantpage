import './style.css';

// function createNavigation(currentSelection, onSelectNewTab) {
function createNavigation(currentSelection, onSelectNewTab) {
    console.log(`createNavigation onSelectNewTab: ${onSelectNewTab}`)
    const navItems = ['Home', 'Menu', 'Contact'];
    console.log(`Current selection in nav: ${currentSelection}`)
    const nav = document.createElement('ul');
    nav.classList.add('navigation');
    
    const getNavSelection = () => {
        console.log("Inside getNavSelection, returning the _current_ value of navSelection")
        return navSelection
    }

    navItems.forEach((navItem) => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = navItem;

        if (navItem.toLowerCase() === currentSelection) {
            li.classList.add('highlight')
        } else {
            li.classList.remove('highlight')
        }
        
        li.addEventListener('click', () => {
            console.log(`${navItem} clicked`);
            const navSelection = `${navItem}`.toLowerCase();
            // createFooter();
            onSelectNewTab(navSelection);
        })
        nav.appendChild(li)
    });

    return { nav, getNavSelection } 
}

export { createNavigation }