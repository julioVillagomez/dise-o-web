var contador = 0;

$(document).ready(function () {
    
    setTimeout(function () {

        $('form').animate({
            left: 0
        }, 2000)

        $('.text-animation').animate({
            opacity:1
        },3000)

    }, 1000);

    setTimeout(function () {
        inscritos();
    }, 5000);


});


function inscritos() {
    if(contador < 3){
        let numero = parseInt($('.contador').text());
        numero--;
        $('.contador').text(numero);
        contador++;

        setTimeout(function() {
            inscritos();
        }, 5000);
    }
}