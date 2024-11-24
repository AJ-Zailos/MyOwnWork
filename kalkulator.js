const isi = document.getElementById('isi');

function add(value) {
    if (value === '.') {
        const lastSegment = isi.textContent.split(/[\+\-\*\/]/).pop();
        if (lastSegment.includes('.')) return;
    }
    
    isi.textContent += value;
}

function clearDisplay() {
    isi.textContent = '';
}

function calc() {
    try {
        isi.textContent = eval(isi.textContent);
    } catch (error) {
        isi.textContent = 'Error';
    }
}

function deleteone() {
    isi.textContent = isi.textContent.slice(0, -1)
}

document.addEventListener('keydown', function(event) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'c', '.', 'Enter', 'Backspace'];
    
    if (!validKeys.includes(event.key)) return;

    if (event.key === 'Enter') {
        calc();
    } else if (event.key === 'Backspace') {
        isi.textContent = isi.textContent.slice(0, -1);
    } else if (event.key === 'c') {
        isi.textContent = '';
    } else {
        if (event.key === '.' && isi.textContent.split(/[\+\-\*\/]/).pop().includes('.')) return;
        isi.textContent += event.key;
    }
});