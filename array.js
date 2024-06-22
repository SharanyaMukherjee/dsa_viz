let array = [];

function displayArray() {
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';
    array.forEach((element, index) => {
        const arrayElement = document.createElement('div');
        arrayElement.className = 'array-element';
        arrayElement.textContent = element;
        arrayElement.id = `element-${index}`;
        arrayContainer.appendChild(arrayElement);
    });
}

function addElement() {
    const arrayValue = document.getElementById('arrayValue').value;
    if (arrayValue) {
        array.push(arrayValue);
        displayArray();
        document.getElementById('arrayValue').value = '';
    } else {
        alert('Please enter a value');
    }
}

function updateElement() {
    const arrayValue = document.getElementById('arrayValue').value;
    const arrayIndex = document.getElementById('arrayIndex').value;
    if (arrayValue && arrayIndex !== '') {
        if (arrayIndex < array.length && arrayIndex >= 0) {
            array[arrayIndex] = arrayValue;
            displayArray();
            document.getElementById('arrayValue').value = '';
            document.getElementById('arrayIndex').value = '';
        } else {
            alert('Invalid index');
        }
    } else {
        alert('Please enter a value and index');
    }
}

function deleteElement() {
    const arrayIndex = document.getElementById('arrayIndex').value;
    if (arrayIndex !== '') {
        if (arrayIndex < array.length && arrayIndex >= 0) {
            array.splice(arrayIndex, 1);
            displayArray();
            document.getElementById('arrayIndex').value = '';
        } else {
            alert('Invalid index');
        }
    } else {
        alert('Please enter an index');
    }
}

function searchElement() {
    const arrayValue = document.getElementById('arrayValue').value;
    if (arrayValue) {
        const index = array.indexOf(arrayValue);
        if (index !== -1) {
            displayArray();
            document.getElementById(`element-${index}`).classList.add('highlight');
        } else {
            alert('Value not found');
        }
        document.getElementById('arrayValue').value = '';
    } else {
        alert('Please enter a value');
    }
}
