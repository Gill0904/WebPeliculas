api="https://api.themoviedb.org/3/";
key="YourKey";
img='https://image.tmdb.org/t/p/w220_and_h330_face/';
$(document).ready(function() {
  mostrarValoresCookie();
});

$(document).ready(()=>{
    $("#container-peliculas-popular").html("");
    contenido='';
    $.getJSON(api+'trending/movie/day?api_key='+key)
    .done((r)=>{
        console.log(r.results);
      r.results.forEach(function(evento) {
        contenido +=
            '<div class="item">'+
            '<a href="html/pelicula.html?'+evento.id+'">'+
              '<img class="img-thumbnail" src="'+img+''+evento.poster_path+'" title="'+evento.title+'" alt="'+evento.title+'/">'+
              '<h2>Vote averange:</h4><h6>'+evento.vote_average+'</h6>'+
              '<h6>'+evento.release_date+'</h6>'+
              '</a>'+
            '</div>';
          });
          $("#container-peliculas-popular").html(contenido);
    });
});


function trendingMovie(){
    var m = document.getElementById("t-pelicula");
    var t = document.getElementById("t-tv");
    var p = document.getElementById("t-people");

    m.classList.add("selected");
    t.classList.remove("selected");
    p.classList.remove("selected");

    $("#container-peliculas-popular").html("");
    contenido='';
    $.getJSON(api+'trending/movie/day?api_key='+key)
    .done((r)=>{
        console.log(r.results);
      r.results.forEach(function(evento) {
        contenido +=
            '<div class="item">'+
                '<a href="html/pelicula.html?'+evento.id+'">'+
              '<img class="img-thumbnail" src="'+img+''+evento.poster_path+'" title="'+evento.title+'" alt="'+evento.title+'/">'+
              '<h4>Vote averange:</h4><h6>'+evento.vote_average+'</h6>'+
              '<h6>'+evento.release_date+'</h6>'+
              '</a>'+
            '</div>';
          });
          $("#container-peliculas-popular").html(contenido);
    });
}
function trendingTV(){    
    var m = document.getElementById("t-pelicula");
    var t = document.getElementById("t-tv");
    var p = document.getElementById("t-people");

    m.classList.remove("selected");
    t.classList.add("selected");
    p.classList.remove("selected");
    $("#container-peliculas-popular").html("");
    contenido='';
    $.getJSON(api+'trending/tv/day?api_key='+key)
    .done((r)=>{
        console.log(r.results);
      r.results.forEach(function(evento) {
        contenido +=
            '<div class="item">'+
            '<a href="html/tv.html?'+evento.id+'">'+
              '<img class="img-thumbnail" src="'+img+''+evento.backdrop_path+'" title="'+evento.name+'" alt="'+evento.name+'/">'+
              '<h4>Popularidad: </h4><h5>'+evento.popularity+'</h5>'+
              '<h6>'+evento.first_air_date+'</h6>'+
              '</a>'+
            '</div>';
          });
          $("#container-peliculas-popular").html(contenido);
    });
}
function trendingPeople(){
    var m = document.getElementById("t-pelicula");
    var t = document.getElementById("t-tv");
    var p = document.getElementById("t-people");

    m.classList.remove("selected");
    t.classList.remove("selected");
    p.classList.add("selected");
    $("#container-peliculas-popular").html("");
    contenido='';
    $.getJSON(api+'trending/person/day?api_key='+key)
    .done((r)=>{
        console.log(r.results);
      r.results.forEach(function(evento) {
        contenido +=
            '<div class="item" id="non">'+
              '<img class="img-thumbnail" src="'+img+''+evento.profile_path+'" title="'+evento.name+'" alt="'+evento.name+'/">'+
              '<h4>Popularidad:</h4><h5>'+evento.popularity+'</h5>'+
            '</div>';
          });
          $("#container-peliculas-popular").html(contenido);
    });
}


function mostrarValoresCookie() {
  let historicoCookie = $.cookie("historial_año");
  if(historicoCookie) {
    historicoCookie = historicoCookie.split(",");

    historicoCookie.forEach((cookie_año) => {
      let $li = $("<li/>").text(cookie_año);
      $("#historial_año").append($li);
    });
  }
}

function insertarCookie() {
      var busqueda = $("#inner_search_v4").val();
      let $li = $("<li/>").text(busqueda);
      $("#historial_año").append($li);

      let historialCookies = $.cookie("historial_año");
      if (historialCookies) {
        historialCookies += "," + busqueda; 
      } else {
        historialCookies = busqueda; 
      }
      
      $.cookie("historial_año", historialCookies, {expires: 5});
}



function Home() {
  var x = document.getElementById("main1");
  var y = document.getElementById("main2");
  if (x.style.display === "none") {
      x.style.display = "flex";
  }
  y.style.display = "none";
}

function Buscador(){
  var x = document.getElementById("main1");
  var y = document.getElementById("main2");
  if (y.style.display === "none") {
      y.style.display = "flex";
  }
  x.style.display = "none";
}