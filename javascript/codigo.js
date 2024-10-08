window.onload = function(){
    alert('He cargado completamente la página');
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}


// Obtener el elemento
var miElemento = document.getElementById("mi-elemento");
miElemento.style.display = "none";
setTimeout(function(){
    miElemento.style.display = "block";
}  ,4000); //  5 segundos


