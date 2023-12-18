function onButtonHover(animalName) {
    var button = document.getElementById('jelentkezesButton' + animalName);
    button.style.fontSize = '20px';
    button.style.color = 'yellow';
}

function onButtonLeave(animalName) {
    var button = document.getElementById('jelentkezesButton' + animalName);
    button.style.fontSize = '16px';
    button.style.color = 'black';
}