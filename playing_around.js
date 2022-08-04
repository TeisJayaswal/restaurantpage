function logHello(input) {
    console.log(`hello ${input}`)
}

function callWhateverCallbackYouGiveMe(callback) {
    callback(2)
}

function callWhateverCallBackYouGiveMeWithLogHello(callback) {
    callback(logHello)
}

// callWhateverCallbackYouGiveMe(logHello)
// => prints 'hello 2'

// callWhateverCallBackYouGiveMeWithLogHello(callWhateverCallbackYouGiveMe)
// => prints 'hello 2'

function onSelectNewTabCallback(newSelection) {
    console.log("Here in the callback")
    console.log(`Hello ${newSelection}`)
    // currentNavigationTab = newSelection
    // createBareBones()
}

createHeader('menu', onSelectNewTabCallback)

function createHeader(currentTab, onChangeCurrentTab) {
    createNavigation(currentTab, onChangeCurrentTab)
} 

function createNavigation(currentSelection, onSelectNewTab) {
    onSelectNewTab(2);
}
