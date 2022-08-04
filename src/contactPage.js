function contact() {
    const contactContent = document.createElement('div');
    const contactHeading = document.createElement('h1');
    contactHeading.textContent = `Here's who to call motherfucker`;
    contactContent.appendChild(contactHeading);
    console.log('inside of contact()')
    return contactContent
}

export { contact }