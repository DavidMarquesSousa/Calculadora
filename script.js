function addVal(value) {

    // This line finds YOUR input field using its specific ID "resultados"
    let display = document.getElementById('input');

    // This line adds the number (7) to whatever is already in the box
    display.value += value;
}

function deleteAll() {
    let display = document.getElementById('input');
    display.value = '';
}

function calculate() {
    let display = document.getElementById('input');
    try {
        if (display.value != '') {
        display.value = eval(display.value);
        }else{
            alert("Please enter an expression to calculate.");
        }
    } catch (error) {
        alert("Please enter a valid expression to calculate.");
        display.value = '';
    }
}