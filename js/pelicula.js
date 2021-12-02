api="https://api.themoviedb.org/3/";
key="";
img='https://image.tmdb.org/t/p/w220_and_h330_face/';
fondo='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
face='https://image.tmdb.org/t/p/w138_and_h175_face/';
logo='https://image.tmdb.org/t/p/h30/';
$(document).ready(function() {
    var id = location.search.substring(1);
    console.log(id);
        $("#tv-desc").html("");
        contenido='';
        $.getJSON(api+'movie/'+id+'?api_key='+key)
        .done((r)=>{
            console.log(r);
            temporadas=r.number_of_seasons;
            $('#tv-desc')
            .html('<div class="col-md-6"><img class="img-thumbnail" src="'+img+''+r.backdrop_path+'" title="'+r.title+'" alt="'+r.title+'/"></div>'+
            '<div class="col-md-6"><h2>'+r.title+' ('+r.release_date+')</h2><h4>'+r.overview+'</h4></div>');
            $('#tv-desc-img').css("background-image", "url("+fondo+r.poster_path+")"); 
            $("#datos-pelicula").html("");
                    contenido =
                    '<div>'+
                        '<div class"row"><h4>Datos</h4></div>'+
                        '<div><h5>Estado:</h5><p>'+r.status+'</p></div>'+
                        '<div><h5>Lema:</h5><p>'+r.tagline+'</p></div>'+
                        '<div><h5>Canal:</h5><a><img class="img-thumbnail" src="'+logo+r.production_companies[0].logo_path+'" title="'+r.production_companies[0].name+'" alt="'+r.production_companies[0].name+'/"></a></div>';
                  contenido +='</div>';
                $("#datos-pelicula").html(contenido);
        });
        $.getJSON(api+'movie/'+id+'/credits?api_key='+key)
        .done((a)=>{
            $("#container-peliculas-popular").html("");
            contenido='';
            console.log(a);
            a.cast.forEach(function(r) {
            contenido +=
            '<div class="celebridad_datos">'+
                '<div><img class="img-thumbnail" src="'+img+''+r.profile_path+'" title="'+r.name+'" alt="'+r.name+'/"></div>'+
                '<div><h5>'+r.name+'</h5><p>'+r.character+'</p></div>'+
            '</div>';
          });
          $("#container-peliculas-popular").html(contenido);
        });
});
