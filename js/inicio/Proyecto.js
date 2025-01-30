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

debugger

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

        for (let i = 0; 1 < proyecto.imagenes.length; i++){
          if (i == 0){
            itemsCarusel += '<div class="carousel-item active">'+
                            '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                          '</div>';
          }else{
            itemsCarusel += '<div class="carousel-item active">'+
                              ' <img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                            '</div>';
          }
        }

      }else{
        itemsCarusel = '<div class="carousel-item active">'+
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
              '<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

    $(".alingItem").append(item)

    }

};

function obtenerParam(){

  if(window.location.search !=''){

    let param = window.location.search
    param = param.split("=")[1];
    $("#idValor").val(param);
    buscarProyectos(param);

  }

}