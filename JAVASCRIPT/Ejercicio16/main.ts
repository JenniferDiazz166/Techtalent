function changeImage():void{
   const carta1:HTMLElement |null= document.getElementById("carta1");
   const cambiocarta:HTMLElement |null= document.getElementById("cambiocarta");

   if (carta1 && cambiocarta){
    carta1.style.display="none";
    cambiocarta.style.display="block";
   }
}

function restoreImage():void{
   const carta1:HTMLElement|null= document.getElementById("carta1");
   const cambiocarta:HTMLElement|null= document.getElementById("cambiocarta");
   
   if(carta1 && cambiocarta){
    carta1.style.display="block";
    cambiocarta.style.display="none";
   }

}
    

