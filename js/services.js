

/**
$("#form-client").bind("submit", function (e) {
    e.preventDefault();
    console.log(e);
    return SaveForm();
});
*/
/*
function onSubmit(token ) {

    var name = $("#name").val();
    var lastname = $("#lastname").val();
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
    console.log(name+" "+ model)
    $.post("http://190.233.143.103/api/requestService",
        {
            name: name,
            lastname: lastname,
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

            document.getElementById("form-client").reset();
            console.log(data)
            obj = JSON.parse(data);
            if(obj.success == true){
                $('#myModal').modal()                      // initialized with defaults
                $('#myModal').modal({ keyboard: false })   // initialized with no keyboard
                $('#myModal').modal('show') 
            }
            else{
                alert("intenta denuevo")
            }
        }
    );
}

function redireccionarPage() {
    window.location.href = "http://www.facebook.com/drphonePE/";
}

*/