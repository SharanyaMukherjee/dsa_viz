const MAX_STACK_SIZE = 10; // Define a maximum stack size
let stack = [];
let stackContainer = document.getElementById('stack');
let topElementDisplay = document.getElementById('topElement');
let poppedElementDisplay = document.getElementById('poppedElement');

function pushElement() {
    if (stack.length >= MAX_STACK_SIZE) {
        alert("Stack Overflow: Cannot push element, stack is full.");
        return;
    }
    let elementInput = document.getElementById('elementInput');
    let value = elementInput.value;
    if (value === "") {
        alert("Please enter a value to push.");
        return;
    }
    
    let element = document.createElement('div');
    element.innerText = value;
    element.style.backgroundColor = getRandomColor();
    stackContainer.appendChild(element);
    stack.push(value);
    updateTopElement();
    elementInput.value = "";
}

function popElement() {
    if (stack.length === 0) {
        alert("Stack Underflow: Cannot pop element, stack is empty.");
        return;
    }
        let poppedValue = stack.pop();
        stackContainer.removeChild(stackContainer.lastChild);
        poppedElementDisplay.innerText = `Last Popped Element: ${poppedValue}`;
        updateTopElement();
    }

function updateTopElement() {
    if (stack.length === 0) {
        topElementDisplay.innerText = 'Top Element: None';
    } else {
        topElementDisplay.innerText = `Top Element: ${stack[stack.length - 1]}`;
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
