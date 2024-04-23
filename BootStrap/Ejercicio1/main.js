const addElemento = () => {
    screenArray.insertAt(randomElement());
    arrayHtml.innerText = screenArray;
};

insertAt.addEventListener("click", addElemento);  



    
    
const randomElement = () =>
    characters[Math.floor(Math.random() * characters.length)];