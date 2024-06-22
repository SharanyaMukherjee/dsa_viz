let normalQueue = [];
let normalQueueSize = 0;
let deque = [];
let dequeSize = 0;
let priorityQueue = [];
let priorityQueueSize = 0;

function initializeNormalQueue() {
    normalQueueSize = document.getElementById('normal-queue-size').value;
    normalQueue = Array(parseInt(normalQueueSize)).fill(null);
    renderQueue(normalQueue, 'normal-queue-display');
}



function renderQueue(queue, elementId) {
    const display = document.getElementById(elementId);
    display.innerHTML = '';
    queue.forEach(item => {
        const div = document.createElement('div');
        div.className = item === null ? 'blank' : 'filled';
        div.textContent = item === null ? '' : item.data;
        display.appendChild(div);
    });
}

function enqueueNormal() {
    const input = document.getElementById('normal-queue-input').value;
    if (normalQueue.includes(null)) {
        normalQueue[normalQueue.indexOf(null)] = { data: input };
        renderQueue(normalQueue, 'normal-queue-display');
    } else {
        alert('Queue size exceeded!');
    }
    document.getElementById('normal-queue-input').value = '';
}

function dequeueNormal() {
    if (normalQueue.some(item => item !== null)) {
        normalQueue[normalQueue.findIndex(item => item !== null)] = null;
        renderQueue(normalQueue, 'normal-queue-display');
    }
}




initializeNormalQueue();

