api="https://api.themoviedb.org/3/";
key="YourKey";
img='https://image.tmdb.org/t/p/w220_and_h330_face/';
fondo='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
face='https://image.tmdb.org/t/p/w138_and_h175_face/';
logo='https://image.tmdb.org/t/p/h30/';
$(document).ready(function() {
    var query = location.search.substring(1);
    var temporadas= 0;
    $.getJSON(api+'search/multi?api_key='+key+'&'+query)
    .done((r)=>{
        $("#contenedorMovie").html("");
        $("#contenedorTv").html("");
        $("#contenedorPeople").html("");
           var contenidoMovie ='';
           var contenidoPeople ='';
           var contenidoTv ='';
           var ct=0;
           var cm=0;
           var cp=0;
           r.results.forEach(respose => {
               if (respose.media_type === 'movie') {
                   cm++;
                contenidoMovie +=
                '<div class="row" id="item" >'+
                    '<div class="col-md-3"><a href="pelicula.html?'+respose.id+'"><img class="img-thumbnail" src="'+img+''+respose.poster_path+'" title="'+respose.title+'" alt="'+respose.title+'/"></a></div>'+
                    '<div class="col-md-9"><h5>'+respose.title+'</h5><h6>'+respose.overview+'</h6></div>'+
                '</a></div>';
                $("#contenedorMovie").html(contenidoMovie);
               }else if (respose.media_type === 'tv') {
                   ct++;
                   contenidoTv +=
                '<div class="row" id="item">'+
                    '<div class="col-md-3"><a href="tv.html?'+respose.id+'"><img class="img-thumbnail" src="'+img+''+respose.poster_path+'" title="'+respose.name+'" alt="'+respose.name+'/"></a></div>'+
                    '<div class="col-md-9"><h5>'+respose.name+'</h5><h6>'+respose.overview+'</h6></div>'+
                '</div>';
                console.log(contenidoTv);
                $("#contenedorTv").html(contenidoTv);
               } else {
                   cp++;
                contenidoPeople +=
                '<div class="row" id="item">'+
                    '<div class="col-md-3"><img class="img-thumbnail" src="'+img+''+respose.profile_path+'" title="'+respose.name+'" alt="'+respose.name+'/"></div>'+
                    '<div class="col-md-9"><h5>'+respose.name+'</h5></div>'+
                '</div>';
                $("#contenedorPeople").html(contenidoPeople);
               }
           });  
           if (ct === 0){
            $("#contenedorTv").html('<h3>Sin programas de TV en la página 1</h3>');
           } 
           if (cm === 0){
            $("#contenedorMovie").html('<h3>Sin peliculas en la página 1</h3>');
           } 
           if (cp === 0){
            $("#contenedorPeople").html('<h3>Sin personas en la página 1</h3>');
           }  
    });
    tv();
});
function tv() {
    var m = document.getElementById("contenedorMovie");
    var t = document.getElementById("contenedorTv");
    var p = document.getElementById("contenedorPeople");
    if (t.style.display === "none") {
        t.style.display = "flex";
    }
    m.style.display = "none";
    p.style.display = "none";
  }
  
  function movie(){
    var m = document.getElementById("contenedorMovie");
    var t = document.getElementById("contenedorTv");
    var p = document.getElementById("contenedorPeople");
    if (m.style.display === "none") {
        m.style.display = "flex";
    }
    t.style.display = "none";
    p.style.display = "none";
  }
  function people() {
    var m = document.getElementById("contenedorMovie");
    var t = document.getElementById("contenedorTv");
    var p = document.getElementById("contenedorPeople");

    if (p.style.display === "none") {
        p.style.display = "flex";
    }
    m.style.display = "none";
    t.style.display = "none";
  }
