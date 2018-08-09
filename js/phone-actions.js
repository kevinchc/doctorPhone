$(document).ready(function () {
    function changeColor() {
        if ($('#repair').hasClass('white')){
            $('#repair').css('background','white');
            $('#repair').removeClass('white');
            $('#repair').addClass('MEDIUMAQUAMARINE');

        }else {
            $('#repair').css('background','MEDIUMAQUAMARINE');
            $('#repair').removeClass('MEDIUMAQUAMARINE');
            $('#repair').addClass('white');
        }
    }
    setInterval(changeColor, 1000)
});
/*
$(function () {
    setInterval(image, 5000);
    $("#repair").css("background-color","yellow")
    setInterval(repair, 1000);
});

function repair() {
    $("#repair").css("background-color","red")
}
*/

$(function () {
    setInterval(image, 3000)
});
/** Image Signal **/

function image() {
    var number = Math.round(Math.random() * 100);
    if (number > 75) {
        $('#signal').attr('src', "images/signal-4.png");
    } else if (number > 50) {
        $('#signal').attr('src', "images/signal-3.png");
    } else if (number > 25) {
        $('#signal').attr('src', "images/signal-2.png");
    } else {
        $('#signal').attr('src', "images/signal-1.png");
    }
}

/** End **/

/** Clock  and Battery**/
Reloj();

function Reloj() {
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();
    document.getElementById('hora').innerHTML = hora;
    document.getElementById('minuto').innerHTML = minuto;
    document.getElementById('segundo').innerHTML = segundo;
    setTimeout('Reloj()', 1000);
    str_hora = new String(hora);
    if (str_hora.length == 1) {
        document.getElementById('hora').innerHTML = '0' + hora;
    }
    str_minuto = new String(minuto);
    if (str_minuto.length == 1) {
        document.getElementById('minuto').innerHTML = ':0' + minuto;
    } else {
        document.getElementById('minuto').innerHTML = ':' + minuto;
    }
    str_segundo = new String(segundo);
    if (str_segundo.length == 1) {
        document.getElementById('segundo').innerHTML = ':0' + segundo;
    } else {
        document.getElementById('segundo').innerHTML = ':' + segundo;
    }

    if (hora >= 8 && hora < 10) {
        $("#power_battery").text("100%");
        $('#battery').attr('src', "images/battery1.png");
    } else if (hora < 12 && hora >= 10) {
        $("#power_battery").text("80%");
        $('#battery').attr('src', "images/battery1.png");
    } else if (hora < 14 && hora >= 12) {
        $("#power_battery").text("60%");
        $('#battery').attr('src', "images/battery1.png");
    } else if (hora < 16 && hora >= 14) {
        $("#power_battery").text("40%");
        $('#battery').attr('src', "images/battery2.png");
    } else if (hora < 18 && hora >= 16) {
        $("#power_battery").text("20%");
        $('#battery').attr('src', "images/battery2.png");
    } else if (hora < 20 && hora >= 18) {
        $("#power_battery").text("0%");
        $('#battery').attr('src', "images/battery3.png");
    } else {
        $("#power_battery").text("0%");
        $('#battery').attr('src', "images/battery3.png");
    }
}


$(window).scroll(function () {
    if ($(document).scrollTop()>0){
        $("#main-bottom").show(500)
    }else {
        $("#main-bottom").hide(500)
    }
})

/** End */

/** Less and More **/

$(".show-more-button").on('click', function () {
    if ($(this).attr('data-more') == 0){
        $(this).attr('data-more',1);
        $(this).css('display','block');
        $(this).text('Leer Menos');

        $(this).prev().css('display','none');
        $(this).prev().prev().css('display','inline');

    }else if($(this).attr('data-more') == 1){
        $(this).attr('data-more',0);
        $(this).attr('display','inline');
        $(this).text('Leer Más');

        $(this).prev().css('display', 'inline');
        $(this).prev().prev().css('display','none');
    }
});



