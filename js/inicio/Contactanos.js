
$("#idEnviar").on('click', function(){

    //Validar que lo campos esten completos
    $("#idModal").modal('show');
});

function enviardatos(){
    console.log("Cerrando modal");
    //Validar que lo campos esten completos
    $("#idModal").modal('hide');
    window.location.href = "../index.html";
}