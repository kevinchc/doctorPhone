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



