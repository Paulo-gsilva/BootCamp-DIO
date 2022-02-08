const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

function changeClass(){
    body.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    if(body.classList.contains('dark-mode')){
        h1.innerHTML = 'Dark Mode On';
    }
    else{
        h1.innerHTML = 'Light Mode ON';
    }
}

function changeMode(){
    changeClass();
    changeText();
}

button.addEventListener('click', changeMode);
