function setRed() {
    document.getElementById('light1').style.backgroundColor = 'red';
    document.getElementById('light2').style.backgroundColor = 'grey';
    document.getElementById('light3').style.backgroundColor = 'grey';
    document.getElementById('display-image').src = "stop.jpg";
}

function setGreen() {
    document.getElementById('light1').style.backgroundColor = 'grey';
    document.getElementById('light2').style.backgroundColor = 'grey';
    document.getElementById('light3').style.backgroundColor = 'green';
    document.getElementById('display-image').src = "go.jpg";
}

function setYellow() {
    document.getElementById('light1').style.backgroundColor = 'grey';
    document.getElementById('light2').style.backgroundColor = 'yellow';
    document.getElementById('light3').style.backgroundColor = 'grey';
    document.getElementById('display-image').src = "wait.jpg";
}
