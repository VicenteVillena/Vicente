window.onload = function(){
    //Todo lo que este acá se va a ejecutar cuando la 
    //pagina este cargada

    $("#idEnviar").attr("disabled", true);

    $("#idCheckbox").on("change", function(){   
        let checked = v_confirmacion = $(this).prop("checked");
        if (checked) {
            $("#idEnviar").removeAttr("disabled", true)
        }else{
            $("#idEnviar").attr("disabled", true)
        }
    });

    $("#idEnviar").on("click", function(){
        enviardatos();
    });
}

$("#idEnviar").on("click", function(){

    $("#idModal").modal('show');

});

function enviardatos(){
    v_nombre = $("#idNomnbre").val();
    v_correo = $("#idGmail").val();
    v_numero = $("#idNT").val();
    debugger

    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let resultado = regex.test(v_correo);

    if (v_confirmacion && 
        v_nombre != null && v_nombre.trim().length > 0 &&
        v_correo != null && v_correo.trim().length > 0 && resultado &&
        v_numero != null && v_numero.trim().length > 0
    ) {

        enviardatosM();
        
    }else{
        alert("Ingrese datos válidos");
    }

}

//Variables
let v_confirmacion = false;
let v_nombre = null;
let v_correo = null;
let v_numero = null;


function enviardatosM(){
    console.log("Cerrando modal");
    $("#idModal").modal('hide');
    window.location.href="../index.html";
}