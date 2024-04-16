//parte1

$().ready(() =>
{
    $('#pulsame').click(function() {
        $('p').toggleClass('red');
    });
});

//parte2
let dale= document.querySelector("#dale");
let p= document.querySelector ("p")
dale.onclick=function(){
    p.classList.toggle("blue");
};
