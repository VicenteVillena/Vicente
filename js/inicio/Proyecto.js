$(document).ready(function(){
  proyectosTemporales = listaDeProyecytos
    generarProyectos();

    obtenerParam();

    $("#idValor").on("search", function(){
      
      proyectosTemporales = listaDeProyecytos;
      generarProyectos();
    });

});

let proyectosTemporales = [];

let listaDeProyecytos = [
    {
        ipProyecto: 1,
        titulo:"K-on el videojuego",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/10/2024",
        tecnologia: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Juegos", "Online"],
        imagenes: ["../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png"
        ]
    },
    {
        ipProyecto: 2,
        titulo:"Segundo Proyecto",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/10/2024",
        tecnologia: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Juegos", "Online"],
        imagenes: ["../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png"
        ]
    },
    {
        ipProyecto: 3,
        titulo:"Tercer Proyecto",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/10/2024",
        tecnologia: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Juegos", "Online"],
        imagenes: ["../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png"
        ]
    },
    {
        ipProyecto: 4,
        titulo:"Cuarto Proyecto",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/10/2024",
        tecnologia: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Juegos", "Online"],
        imagenes: ["../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png",
          "../img/carousel/K-ON.png"
        ]
    },
];

$("#idBuscar").on("click", function(){

  buscarProyectos ($("#idValor").val());
});

function buscarProyectos(val){
  proyectosTemporales = listaDeProyecytos;
  proyectosTemporales = proyectosTemporales.filter(x=> x.titulo.includes(val));

  generarProyectos();
};


function generarProyectos(){
    $(".alingItem").empty();

    for(let i = 0; i < proyectosTemporales.length; i++) {
        const proyecto = proyectosTemporales[i];

      let itemsCarusel = "";

      if (proyecto.imagenes.length >0){

        for (let i = 0; i < proyecto.imagenes.length; i++){
          if (i == 0){
            itemsCarusel += '<div class="carousel-item active">'+
                            '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                          '</div>';
          }else{
            itemsCarusel += '<div class="carousel-item">'+
                              '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                            '</div>';
          }
        }

      }else{
        itemsCarusel = '<div class="carousel-item">'+
                         ' <img src="..." class="d-block w-100" alt="...">'+
                        '</div>';
      }

        let item = ' <div class="card mb-3" style="max-width: 440px;">'+
        '<div class="row g-0">'+
          '<div class="col-md-4">'+
          '<div id="carouselExample" class="carousel slide">'+
          '<div class="carousel-inner">'+itemsCarusel+'</div>'+
          '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">'+
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
            '<span class="visually-hidden">Previous</span>'+
          '</button>'+
          '<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">'+
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
            '<span class="visually-hidden">Next</span>'+
          '</button>'+
        '</div>'+
          '</div>'+
          '<div class="col-md-8">'+
            '<div class="card-body">'+
              '<h5 class="card-title">'+proyecto.titulo+'</h5>'+
              '<p class="card-text">'+proyecto.discripcion+'</p>'+
              '<p class="card-text"><small class="text-body-secondary">'+proyecto.fecha+'</small></p>'+
              '<button onclick="vistaprevia('+proyecto.ipProyecto+')" id="preview" class="btn btn-sm btn-success" type="button">Ver Mas</button>'+
              '<small class="btn btn-sm btn-primary" onclick="editarProyecto('+proyecto.ipProyecto+')" >Editar</small>'+
            '</div>'+
            '<span class="badge text-bg-info">'+proyecto.tecnologia[0]+'</span>'+
            '<span class="badge text-bg-info">'+proyecto.tecnologia[1]+'</span>'+
            '<span class="badge text-bg-info">'+proyecto.tecnologia[2]+'</span>'+
            '<span class="badge text-bg-info">'+proyecto.tecnologia[3]+'</span>'+
          '</div>'+
        '</div>'+
      '</div>';

    $(".alingItem").append(item)

    }

};

function actualizarProy(val){
  let indiceProy = listaDeProyecytos.findIndex(x=> x.ipProyecto == val);
  listaDeProyecytos[indiceProy].titulo = $("#idTituloProyF").val();
  listaDeProyecytos[indiceProy].discripcion = $("#idDescProyF").text();
  listaDeProyecytos[indiceProy].fecha = $("#idFecProyF").val();

  listaDeProyecytos[indiceProy].tecnologia = [];
  let tec = $("#idTecProyF").val().split(";");
  tec.forEach(e => {
    listaDeProyecytos[indiceProy].tecnologia.push(e.trim());
  });

  generarProyectos();
  $("#idModalForm").modal('hide');
}

function editarProyecto(val){

 
  let proyecto = listaDeProyecytos.find(x=> x.ipProyecto == val);

  $("#idTituloForm").text("Editando "+proyecto.titulo);

  $("#idTituloProyF").val(proyecto.titulo);
  $("#idDescProyF").text(proyecto.discripcion);
  $("#idFecProyF").val(proyecto.fecha);


  let tecnologia = proyecto.tecnologia.join(";");
  let etiquetas = proyecto.etiquetas.join(";");
  let imagenes = proyecto.imagenes.join(";");

  $("#idTecProyF").val(tecnologia);
  $("#idEtiqProyF").val(etiquetas);
  $("#idImgProyF").val(imagenes);
  $("#idBtnGuardar").empty();
  $("#idBtnGuardar").append('<a class="btn btn-primary" onclick="actualizarProy('+proyecto.ipProyecto+')">Guardar</a>');

  $("#idModalForm").modal('show');

  }



function obtenerParam(){

  if(window.location.search !=''){

    let param = window.location.search
    param = param.split("=")[1];
    $("#idValor").val(param);
    buscarProyectos(param);

  }
}

function vistaprevia(val){
  let proyecto = listaDeProyecytos.find(x=> x.ipProyecto == val);
debugger
  $("#TituloCambio").text(proyecto.titulo);
  $("#Desc").text(proyecto.discripcion);

  


  let itemsCarusel = "";

  if (proyecto.imagenes.length >0){

    for (let i = 0; i < proyecto.imagenes.length; i++){
      if (i == 0){
        itemsCarusel += '<div class="carousel-item active">'+
                        '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                      '</div>';
      }else{
        itemsCarusel += '<div class="carousel-item">'+
                          '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                        '</div>';
      }
    }

  }else{
    itemsCarusel = '<div class="carousel-item">'+
                     ' <img src="..." class="d-block w-100" alt="...">'+
                    '</div>';
  }

    let item = ' <div class="card mb-3" style="max-width: 440px;">'+
    '<div class="row g-0">'+
      '<div class="col">'+
      '<span class="badge text-bg-danger">'+proyecto.etiquetas[0]+'</span>'+
      '<span class="badge text-bg-danger">'+proyecto.etiquetas[1]+'</span>'+
      '<div id="carouselExample2'+proyecto.ipProyecto+'" class="carousel slide">'+
      '<div class="carousel-inner">'+itemsCarusel+'</div>'+
      '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2'+proyecto.ipProyecto+'" data-bs-slide="prev">'+
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
        '<span class="visually-hidden">Previous</span>'+
      '</button>'+
      '<button class="carousel-control-next" type="button" data-bs-target="#carouselExample2'+proyecto.ipProyecto+'" data-bs-slide="next">'+
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
        '<span class="visually-hidden">Next</span>'+
      '</button>'+
      '<span class="badge text-bg-info">'+proyecto.tecnologia[0]+'</span>'+
      '<span class="badge text-bg-info">'+proyecto.tecnologia[1]+'</span>'+
      '<span class="badge text-bg-info">'+proyecto.tecnologia[2]+'</span>'+
      '<span class="badge text-bg-info">'+proyecto.tecnologia[3]+'</span>'+
    '</div>';
    $("#idSlider").empty();
    $("#idSlider").append(item);
    $("#vistamodal").modal('show');
}
