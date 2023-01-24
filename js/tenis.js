document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener('submit', validarFormulario);

    function validarFormulario(evento) {
        evento.preventDefault();
        var jugador1 = document.getElementById('name1').value;
        var jugador2 = document.getElementById('name2').value;
        var mensaje = document.getElementById('mensaje');
        var mensaje2 = document.getElementById('mensaje2');
        mensaje.classList.add('alert','alert-warning');

    if((jugador1.length == "" )&& (jugador2.length == "")) {
            mensaje.innerHTML ="Ingrese al Juego por Favor";
        return;
    }
    if((jugador1.length == "" )|| (jugador2.length == "")) {
        mensaje.innerHTML ="Ingrese al Juego por Favor";
    return;
    }
    if((jugador1 > jugador2 )&& (jugador1 ==6)&&(jugador1 ==6)&&(jugador2 != 5)||(jugador1 == 7)&& (jugador2 ==6)) {
            mensaje.innerHTML ="Ha Ganado  El Jugador1";
        return;
    }
    else if((jugador1 < jugador2 )&& (jugador2 ==6)&&(jugador1 != 5)||(jugador1 == 6)&&(jugador2 ==7)) {
        mensaje.innerHTML ="Ha Ganado  El Jugador2";
        return;
    }
    else if((jugador1==5 && jugador2==5 )|| (jugador1==6 && jugador2==6 ))  {
        mensaje.innerHTML ="El primero que llegue a 7 gana";
        return;
    }
    else if((jugador1==7 && jugador2==3 )||(jugador1==3 && jugador2==7))  {
        mensaje.innerHTML ="El Resultado es Invalido";
    }
    else if((jugador1==8 && jugador2==6 )||(jugador1==6 && jugador2==8))  {
        mensaje.innerHTML ="El Resultado es Invalido";
    }
    else if(jugador1>=8 || jugador2>=8){
    mensaje.innerHTML ="El Resultado es Invalido";
    }
    else if((jugador1==7 && jugador2==4)||(jugador2==7 && jugador1==4)){
        mensaje.innerHTML ="El Resultado es Invalido";
    }
    else if((jugador1==7 && jugador2==7)){
         mensaje.innerHTML ="El Resultado es Invalido";
     }
    else if((jugador1 ==6 && jugador2 ==5)||(jugador1==5 && jugador2==6)){
        mensaje.innerHTML ="Aún No Hay Ganador";
    }
    else{
        mensaje.innerHTML ="Aún No Hay Ganador";
    }

//this.submit();
}
});

