document.getElementById("interruptor").addEventListener("click",function(){
    let botonon= document.getElementById("botonon");
    let botonoff= document.getElementById("botonoff");
    if (botonon.style.display ==="block" || botonon.style.display === ""  ){
        botonon.style.display="none";
        botonoff.style.display="block";

        //luz
        document.getElementById("luzon").style.display="block";
        document.getElementById("luzoff").style.display="none";
    } else{
        botonon.style.display="block";
        botonoff.style.display="none";
    //luz
       document.getElementById("luzon").style.display="none";
       document.getElementById("luzoff").style.display="block";

    }

});

$(document).ready(function(){
                         
    //escondemos el div
    $("#luces").hide();
                       
    $("#apagar").click(function(){
                       
          $("#luces").fadeToggle(250);
                 
    });
                       
});


