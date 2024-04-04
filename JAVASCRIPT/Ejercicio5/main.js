function tirarmoneda(){
    let randomnumber= Math.random();
    return randomnumber < 0.5 ? "cara" : "cruz";
}
console.log("resultado del lanzamiento", tirarmoneda());
