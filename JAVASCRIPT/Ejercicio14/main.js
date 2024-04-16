const push = document.getElementById('push');
const unshift = document.getElementById('unshift');
const insertAt = document.getElementById('insertAt');
const addPosition = document.getElementById('addPosition');
const arrayHtml = document.getElementById('arrayHtml');

const characters = ["🍄", "🥔", "👾", "🪩", "😶‍🌫️", "🤡", "👽", "🐧"];
const screenArray = [];

const addElement = () => {
	screenArray.push(randomElement());
	arrayHtml.innerText = screenArray;
};

push.addEventListener("click", addElement);

const addElements = () => {
    screenArray.unshift(randomElement());
    arrayHtml.innerText = screenArray;
};

unshift.addEventListener("click", addElements);  

const addElemento = () => {
    screenArray.insertAt(randomElement());
    arrayHtml.innerText = screenArray;
};

insertAt.addEventListener("click", addElemento);  



    
    
const randomElement = () =>
    characters[Math.floor(Math.random() * characters.length)];
