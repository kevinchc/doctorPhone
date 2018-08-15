$(document).ready(function() {
    $('#model').hide();
    $('#otherModels').hide();
    $('#problem').hide();
    $('#otherProblem').hide();
    $('.ocultar').hide();
    $('#animacionLoad').hide();
    $('#city').hide();
    $("#eventConfirm").hide();
});

$("#div-1").click (function(){
    $('#div-2').toggle('slow');
    $('#div-4').hide(300);
    $('#div-6').hide(300);
    $('#div-8').hide(300);
});
$("#div-3").click (function(){
    $('#div-4').toggle('slow');
    $('#div-2').hide(300);
    $('#div-6').hide(300);
    $('#div-8').hide(300);
});
$("#div-5").click (function(){
    $('#div-6').toggle('slow');
    $('#div-2').hide(300);
    $('#div-4').hide(300);
    $('#div-8').hide(300);
});
$("#div-7").click (function(){
    $('#div-8').toggle('slow');
    $('#div-2').hide(300);
    $('#div-4').hide(300);
    $('#div-6').hide(300);
});




$(".dropdown-item").click(function(){
    $("dropdown").hide()
});

var marcas = [];
marcas['Iphone'] = ['Modelo*','IPhone 5', 'IPhone 5s','IPhone 5c' , 'IPhone 6', 'IPhone 6s','IPhone 6 plus' , 'IPhone 6s plus' , 'IPhone 7' , 'IPhone 7 plus' , 'IPhone 8' , 'IPhone 8 plus' , 'IPhone X','Otro'];
marcas['Samsung'] = ['Modelo*','Samsung J7' , 'Samsung J2' , 'Samsung J1' , 'Samsung J4' , 'Samsung S9' , 'Samsung S8','Otro'];
marcas['Lg'] = ['Modelo*','LG G3 ', 'LG G6' , 'LG K8', 'LG K4' ,'LG Q6','Stylus','LG V10','LG XCAM','Otro'];
marcas['Huawei'] = ['Modelo*','Huawei PSmart','Huawei P20','Huawei P10','Huawei P9','Huawei P8','Huawei Y7','Huawei Y6','Huawei Y5','Huawei MATE10','Otro'];
marcas['Motorola'] = ['Modelo*','Motorola E5','Motorola E4','Motorola G6','Motorola G5','Motorola G5S','Motorola Z','Motorola Z2','Motorola C','Otro'];
marcas['Sony'] = ['Modelo*','Sony L1','Sony L2','Sony XA1','Sony XA2','Sony XZ2','Sony E5','Otro'];
marcas['Nokia'] = ['Modelo*','Nokia 8','Nokia 3','Nokia 2','Otro'];
marcas['Alcatel'] = ['Modelo*','Alcatel U5','Alcatel PIXI 45','Alcatel PIXI 34','Alcatel PIXI 44','Alcatel A3','Alcatel IDOL 4','Otro'];
marcas['HTC'] = ['Modelo*','HTC V11','HTC Desire','Otro'];
marcas['ZTE'] = ['Modelo*','ZTE V6','ZTE V8','Otro']


var countries = [];
countries['Lima']=['Distrito*','Ancón','Ate','Barranco','Breña','Carabayllo','Chaclacayo','Chorrillos','Cieneguilla','Comas','El Agustino','Independencia',
    'Jesús María','La Molina','La Victoria','Lima','Lince','Los Olivos','Lurigancho-Chosica','Lurin','Magdalena del Mar','Miraflores',
    'Pueblo Libre','Pachacámac','Pucusana','Puente Piedra','Punta Hermosa','Punta Negra','Rímac','San Bartolo','San Borja','San Isidro',
    'San Juan de Lurigancho','San Juan de Miraflores','San Luis','San Martín de Porres','San Miguel','Santa Anita','Santa María del Mar',
    'Santa Rosa','Santiago de Surco','Surquillo','Villa El Salvador','Villa María del Triunfo'];
countries['Callao']=['Distrito*','Callao','Bellavista','Carmen de la</br>legua Reynoso','Perla','La Punta','Ventanilla','Mi Peru'];

$('#country').on('change',function () {
    var valor = this.value;
    if (valor != "Distrito*"){
        $('#city').empty();
        countries[""+ valor+""].forEach(function (element) {
            $('#city').append("<option values='"+element+"'>"+element+"</option>")
        });
        $('#city').show(300);
    }else {
        $("#city").empty();
        $("#city").hide(300);
    }
})



$('#marca').on('change', function() {
  var  valor = this.value;
  if (valor != "Modelo*"){
     $('#model').empty();
     marcas[""+ valor+""].forEach(function (element) {
         $('#model').append("<option values='"+element+"'>"+element+"</option>")
     });
     $('#model').show(300);
     $(".ocultar").show(300);
     $('#problem').show(300);
  }else {
      $("#model").empty();
      $("#model").hide(300);
      $("#problem").hide(300);
      $("#otherProblem").hide();
      $("#otherModels").hide(300);
  }
});

$('#model').on('change',function () {
    var valor= this.value;
    if (valor == "Otro"){
        $('#otherModels').val("");
        $('#otherModels').show(300);
    }else {
        $("#otherModels").hide(300);
        $("#otherModels").val("N/A");
    }
    if (valor == "Modelo*"){
        $("#otherModels").val("");
        $("#otherProblem").hide(300);
    }
});
$("#problem").change(function(){

    var valor = this.value;
    if (valor =="Otro") {
        $("#otherProblem").val("");
        $("#otherProblem").show(300);
    }else{
        $("#otherProblem").hide(300);
        $("#otherProblem").val("N/A");
    }

    if (valor =="Problema*") {
        $("#otherProblem").val("");
    }
});

function flotante2(tipo){
        if (tipo==1){
            $('#contenedor1').show();
            $('#flotante1').animate({
                marginTop: "-152px"
            });
        }
        if (tipo==2){
            $('#flotante1').animate({
                marginTop: "-756px"
            });
            setTimeout(function(){
                $('#contenedor1').hide();

            },1000)
        }
}
$(document).ready(function(){
    $('input[type="button"]').attr('disabled','disabled');
    $('input[type="text"]').keypress(function(){
        if($(this).val() != ''){
            $('input[type="submit"]').removeAttr('disabled');
        }
    });
});
function onSubmit() {
    var names;
    if($("#name").val() != ''){
        names = $("#name").val()+ " " + $("#lastname").val();;
    }else {
        names = $("#names").val();
    }
    var country = $("#country").val();
    var city = $("#city").val();
    var address = $("#address").val();
    var dni = $("#dni").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var brand = $('#marca').val();
    var model = $('#model').val();
    var otherModels = $('#otherModels').val();
    var problem = $('#problem').val();
    var otherProblem = $('#otherProblem').val();
    if (otherModels != "N/A") {
        model = otherModels
    }
    if (otherProblem != "N/A") {
        problem = otherProblem
    }
    console.log(names+" "+ model);
    $.post("http://190.233.143.103/api/requestService",
        {
            names: names,
            province: country,
            district: city,
            address: address,
            dni: dni,
            phone: phone,
            email: email,
            brand: brand,
            model: model,
            problem: problem,
            gRecaptchaResponse: token
        },
        function (data, status) {
            obj = JSON.parse(data);
            if(obj.success == true){
                document.getElementById("form-client").reset();
                flotante2(1);
            }
            else{
               redireccionarPage() 
            }
        }
    );
}

function redireccionarPage() {
    window.location.href = "http://www.doctorphone.pe";
}


