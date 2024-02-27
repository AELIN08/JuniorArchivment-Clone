//funcion al darle click en el boton
function muestra_oculta(id){
    //declaracion de variables y paso por el parametro el selector de 
    let div = document.getElementById(id);
    if (div.style.display == "none"){
        div.style.display = "flex";
    }
        else{
            div.style.display = "none";
        }
}