let imagen=document.getElementById("Ingapirca");
imagen.addEventListener("click",function(){
    if(imagen.style.transform=="scale(1.1)rotate(2deg)"){
        imagen.style.transform="scale(1)rotate0(0deg)";
    }
    else{imagen.style.transform="scale(1.1)rotate(2deg)";
        }  
});