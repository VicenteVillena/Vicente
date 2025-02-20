$(document).ready(function () {
  getItems();

  proyectosTemporales = listaDeProyecytos
  generarProyectos();

  obtenerParam();

  $("#idValor").on("search", function () {

    proyectosTemporales = listaDeProyecytos;
    generarProyectos();
  });

});

let proyectosTemporales = [];

let listaDeProyecytos = [];

$("#idBuscar").on("click", function () {

  buscarProyectos($("#idValor").val());
});

function buscarProyectos(val) {
  proyectosTemporales = listaDeProyecytos;
  proyectosTemporales = proyectosTemporales.filter(x => x.titulo.includes(val));

  generarProyectos();
}

function generarTags(arr) {
  let resultado = "";

  if (arr != undefined && arr != null && arr.length > 0) {
    arr.forEach(e => {
      resultado += '<span class="badge text-bg-success">' + e + '</span>';
    });
  }
  return resultado;
}

function generarProyectos() {
  debugger
  $(".alingItem").empty();

  for (let i = 0; i < proyectosTemporales.length; i++) {
    const proyecto = proyectosTemporales[i];

    let itemsCarusel = "";

    if (proyecto.imagenes.length > 0) {

      for (let i = 0; i < proyecto.imagenes.length; i++) {
        if (i == 0) {
          itemsCarusel += '<div class="carousel-item active">' +
            '<img src="' + proyecto.imagenes[i] + '" class="d-block w-100" alt="...">' +
            '</div>';
        } else {
          itemsCarusel += '<div class="carousel-item">' +
            '<img src="' + proyecto.imagenes[i] + '" class="d-block w-100" alt="...">' +
            '</div>';
        }
      }

    } else {
      itemsCarusel = '<div class="carousel-item">' +
        ' <img src="..." class="d-block w-100" alt="...">' +
        '</div>';
    }

    let item = ' <div class="card mb-3" style="max-width: 440px;">' +
      '<div class="row g-0">' +
      '<div class="col-md-4">' +
      '<div id="carouselExample" class="carousel slide">' +
      '<div class="carousel-inner">' + itemsCarusel + '</div>' +
      '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">' +
      '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
      '<span class="visually-hidden">Previous</span>' +
      '</button>' +
      '<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">' +
      '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
      '<span class="visually-hidden">Next</span>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '<div class="col-md-8">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' + proyecto.titulo + '</h5>' +
      '<p class="card-text">' + proyecto.descripcion + '</p>' +
      '<p class="card-text"><small class="text-body-secondary">' + proyecto.fecha + '</small></p>' +
      '<button onclick="vistaprevia(' + proyecto._id + ')" id="preview" class="btn btn-sm btn-success" type="button">Ver Mas</button>' +
      '<button class="btn btn-sm btn-primary" onclick="editarProyectoV2(' + proyecto._id + ')" >Editar</button>' +
      '<div>' + generarTags(proyecto.etiquetas) + '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

    $(".alingItem").append(item)

  }

}

function ValidadCampo() {

  let valido = false;

  let vUno = $("#idTituloProyF").val();
  let vDos = $("#idDescProyF").text();
  let vTres = $("#idFecProyF").val();

  if (vUno != undefined && vUno != null && vUno.trim() != "" &&
    vDos != undefined && vDos != null && vDos.trim() != "" &&
    vTres != undefined && vTres != null && vTres.trim() != "") {
    valido = true
  }

  return valido;
}

function actualizarProy(idItem) {



  if (ValidadCampo()) {

    let item = {
      "titulo": $("#idTituloProyF").val(),
      "descripcion": $("#idDescProyF").text(),
      "fecha": $("#idFecProyF").val(),
      "tecnologias": $("#idTecProyF").val().split(";"),
      "etiquetas": $("#idEtiqProyF").val().split(";"),
      "imagenes": $("#idImgProyF").val().split(";")
    };


    var settings = {
      "url": "http://localhost:9000/api/todos/" + idItem,
      "method": "PUT",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify(item),
    };

    $.ajax(settings).done(function (response) {
      generarProyectos();
      $("#idModalForm").modal('hide');
    });


  } else {
    $("#IdModalAdvert").modal('show');
  }
}

function editarProyectoV2(val) {

  debugger
  $("#idModalForm").modal('show');



}

function obtenerParam() {

  if (window.location.search != '') {

    let param = window.location.search
    param = param.split("=")[1];
    $("#idValor").val(param);
    buscarProyectos(param);

  }
}

function vistaprevia(val) {
  let proyecto = listaDeProyecytos.find(x => x.ipProyecto == val);
  debugger
  $("#TituloCambio").text(proyecto.titulo);
  $("#Desc").text(proyecto.descripcion);




  let itemsCarusel = "";

  if (proyecto.imagenes.length > 0) {

    for (let i = 0; i < proyecto.imagenes.length; i++) {
      if (i == 0) {
        itemsCarusel += '<div class="carousel-item active">' +
          '<img src="' + proyecto.imagenes[i] + '" class="d-block w-100" alt="...">' +
          '</div>';
      } else {
        itemsCarusel += '<div class="carousel-item">' +
          '<img src="' + proyecto.imagenes[i] + '" class="d-block w-100" alt="...">' +
          '</div>';
      }
    }

  } else {
    itemsCarusel = '<div class="carousel-item">' +
      ' <img src="..." class="d-block w-100" alt="...">' +
      '</div>';
  }

  let item = ' <div class="card mb-3" style="max-width: 440px;">' +
    '<div class="row g-0">' +
    '<div class="col">' +
    '<span class="badge text-bg-danger">' + proyecto.etiquetas[0] + '</span>' +
    '<span class="badge text-bg-danger">' + proyecto.etiquetas[1] + '</span>' +
    '<div id="carouselExample2' + proyecto.ipProyecto + '" class="carousel slide">' +
    '<div class="carousel-inner">' + itemsCarusel + '</div>' +
    '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2' + proyecto.ipProyecto + '" data-bs-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="visually-hidden">Previous</span>' +
    '</button>' +
    '<button class="carousel-control-next" type="button" data-bs-target="#carouselExample2' + proyecto.ipProyecto + '" data-bs-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="visually-hidden">Next</span>' +
    '</button>' +
    '</div>';
  $("#idSlider").empty();
  $("#idSlider").append(item);
  $("#vistamodal").modal('show');
}

function getItems() {
  let result = null;
  $.ajax({
    url: "http://localhost:9000/api/todos",
    type: "GET",
    async: false,
    cache: false,
    success: function (d) {
      listaDeProyecytos = d;
    }
  });
  return result;
}

