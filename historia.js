// funcionalidad del video 
let titulo=document.querySelector(".titular");
let video=document.querySelector(".video");
let boton=document.querySelector(".botn");
let boton2=document.querySelector(".botnn");


boton.addEventListener("click",()=>{
    video.play();
    titulo.style.color="green";
    titulo.textContent="El video esta en reproducción"
    
    
});


boton2.addEventListener("click",()=>{
    video.pause();
    titulo.style.color="red";
    titulo.textContent="El video se detuvo"
      
});
