import './style.css';

function cakeNavigation(currentCakeSelection, onSelectNewCakeTab) {
    const cakeNavItems = ['Cakes', 'Pastries']

    const cakeNav = document.createElement('ul');
    cakeNav.classList.add('navigation');

    const getCakeNavSelection = () => {
        console.log("Inside getNavSelection, returning the _current_ value of navSelection")
        return cakeNavSelection
    }

    cakeNavItems.forEach((cakeNavItem) => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = cakeNavItem;

        if (cakeNavItem.toLowerCase() === currentCakeSelection) {
            li.classList.add('highlight')
        } else {
            li.classList.remove('highlight')
        }
        
        li.addEventListener('click', () => {
            console.log(`${cakeNavItem} clicked`);
            const cakeNavSelection = `${cakeNavItem}`.toLowerCase();
            // createFooter();
            onSelectNewCakeTab(cakeNavSelection);
        })
        cakeNav.appendChild(li)
    });

    return { cakeNav, getCakeNavSelection } 
}

export { cakeNavigation }