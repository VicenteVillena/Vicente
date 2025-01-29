$(document).ready(function(){

    generarProyectos();

});

let listaDeProyecytos = [
    {
        ipProyecto: 1,
        titulo:"K-on el videojuego",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagen: "../img/carousel/K-ON.png"
    },
    {
        ipProyecto: 2,
        titulo:"Segundo Proyecto",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagen: "../img/carousel/K-ON.png"
    },
    {
        ipProyecto: 3,
        titulo:"Tercer Proyecto",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagen: "../img/carousel/K-ON.png"
    },
    {
        ipProyecto: 4,
        titulo:"Cuarto Proyecto",
        discripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagen: "../img/carousel/K-ON.png"
    },
]

function generarProyectos(){
    debugger
    $(".alingItem").empty();

    for(let i = 0; i < listaDeProyecytos.length; i++) {
        const proyecto = listaDeProyecytos[i];

        let item = ' <div class="card mb-3" style="max-width: 440px;">'+
        '<div class="row g-0">'+
          '<div class="col-md-4">'+
            '<img src="."'+proyecto.imagen+'" class="img-fluid rounded-start" alt="'+proyecto.titulo+'">'+
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
    

console.log(item);

    $(".alingItem").append(item)

    }

}