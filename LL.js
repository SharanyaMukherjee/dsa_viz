class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.address = this.generateAddress();
    }

    generateAddress() {
        return '0x' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.deletedNodes = [];
    }

    append(value, position = null) {
        const newNode = new Node(value);

        if (position === null || position >= this.size()) {
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        } else {
            if (position === 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                let prev = null;
                let curr = this.head;
                let currentIndex = 0;

                while (currentIndex < position && curr) {
                    prev = curr;
                    curr = curr.next;
                    currentIndex++;
                }

                newNode.next = curr;
                prev.next = newNode;

                if (!newNode.next) {
                    this.tail = newNode;
                }
            }
        }
        
        this.display();
    }

    delete(position) {
        if (position < 0 || position >= this.size()) {
            alert('Invalid position');
            return;
        }

        let deletedNode = null;

        if (position === 0) {
            deletedNode = this.head;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
        } else {
            let prev = null;
            let curr = this.head;
            let currentIndex = 0;

            while (currentIndex < position && curr) {
                prev = curr;
                curr = curr.next;
                currentIndex++;
            }

            deletedNode = curr;
            prev.next = curr.next;
            if (!prev.next) {
                this.tail = prev;
            }
        }

        if (deletedNode) {
            this.deletedNodes.push(deletedNode);
        }

        this.display();
        this.displayDeletedNodes();
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    display() {
        const linkedListContainer = document.getElementById('linkedList');
        linkedListContainer.innerHTML = '';
        let current = this.head;
        while (current) {
            const nodeElement = document.createElement('div');
            nodeElement.className = 'node';

            const dataElement = document.createElement('div');
            dataElement.className = 'data';
            dataElement.textContent = current.value;

            const pointerElement = document.createElement('div');
            pointerElement.className = 'pointer';
            pointerElement.textContent = current.next ? `Next: ${current.next.address}` : 'Next: null';

            nodeElement.appendChild(dataElement);
            nodeElement.appendChild(pointerElement);

            linkedListContainer.appendChild(nodeElement);

            if (current.next) {
                const arrowElement = document.createElement('div');
                arrowElement.className = 'arrow';
                arrowElement.textContent = '→';
                linkedListContainer.appendChild(arrowElement);
            }

            current = current.next;
        }
    }

    displayDeletedNodes() {
        const deletedNodesContainer = document.getElementById('deletedNodes');
        deletedNodesContainer.innerHTML = '';
        this.deletedNodes.forEach(node => {
            const nodeElement = document.createElement('div');
            nodeElement.className = 'node1';

            const dataElement = document.createElement('div');
            dataElement.className = 'data';
            dataElement.textContent = node.value;

            nodeElement.appendChild(dataElement);

            deletedNodesContainer.appendChild(nodeElement);
        });
    }
}

const linkedList = new LinkedList();

function addNode() {
    const nodeValue = document.getElementById('nodeValue').value;
    const nodePosition = document.getElementById('nodePosition').value;
    if (nodeValue) {
        linkedList.append(nodeValue, nodePosition !== '' ? parseInt(nodePosition) : null);
        document.getElementById('nodeValue').value = '';
        document.getElementById('nodePosition').value = '';
    } else {
        alert('Please enter a value');
    }
}

function deleteNode() {
    const deletePosition = document.getElementById('deletePosition').value;
    if (deletePosition !== '') {
        linkedList.delete(parseInt(deletePosition));
        document.getElementById('deletePosition').value = '';
    } else {
        alert('Please enter a position');
    }
}
