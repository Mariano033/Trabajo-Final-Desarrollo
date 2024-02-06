let rompeCabeza=document.querySelector(".rompe");
let destino=document.querySelector(".tarjeta1");

let rompeCabeza2=document.querySelector(".rompe2");
let destino2=document.querySelector(".tarjeta2");

let rompeCabeza3=document.querySelector(".rompe3");
let destino3=document.querySelector(".tarjeta3");

let parrafo=document.querySelector(".info");
let parrafo2=document.querySelector(".info2");
let parrafo3=document.querySelector(".info3");



rompeCabeza.addEventListener("dargstart",()=>{
    
});

destino.addEventListener("dragover",(event)=>{
    event.preventDefault();

});

destino.addEventListener("drop",()=>{

destino.appendChild(rompeCabeza2);
parrafo.style.display="none";

});


rompeCabeza2.addEventListener("dragstart",()=>{

});

destino2.addEventListener("dragover",(event)=>{
   event.preventDefault();

});

destino2.addEventListener("drop",()=>{

    destino2.appendChild(rompeCabeza);
    parrafo2.style.display="none";

});


      

    rompeCabeza3.addEventListener("dragstart",()=>{

    });

    
    destino3.addEventListener("dragover",(event)=>{
        event.preventDefault();
    
    }); 
    
    destino3.addEventListener("drop",()=>{

        destino3.appendChild(rompeCabeza3);
        parrafo3.style.display="none";

    });
         

let boton=document.querySelector(".reinicio");
let titulo=document.querySelector(".titulo7");

boton.addEventListener("click",()=>{
     titulo.style.color="yellow"
    titulo.textContent="Lo lograste! Eres un Ganador"
    
     rompeCabeza.style.display="none"
     rompeCabeza2.style.display="none"
     rompeCabeza3.style.display="none"
     
    
});

// profe , el rompecabeza me costo , pero logre mover las imagenes pero no en el lugar en el cual yo quiero(lo cual estoy abierto a consejos para mejorar)
// lo segundo tiene que ver con el boton , una vez que hago click no me deja volver a comenzar con el juego ,pero si logre que 
// aparezca un titulo con un mensaje de color amarillo  y que desaparezcan las imagenes del rompecabezas una vez que se toca el boton.

      