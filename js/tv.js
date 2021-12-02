api="https://api.themoviedb.org/3/";
key="6";
img='https://image.tmdb.org/t/p/w220_and_h330_face/';
fondo='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
face='https://image.tmdb.org/t/p/w138_and_h175_face/';
logo='https://image.tmdb.org/t/p/h30/';
$(document).ready(function() {
    var id = location.search.substring(1);
    console.log(id);
    var temporadas= 0;
    $("#tv-desc").html("");
    contenido='';
    $.getJSON(api+'tv/'+id+'?api_key='+key)
    .done((r)=>{
        console.log(r);
        temporadas=r.number_of_seasons;
        $('#tv-desc')
        .html('<div class="col-md-6"><img class="img-thumbnail" src="'+img+''+r.backdrop_path+'" title="'+r.name+'" alt="'+r.name+'/"></div>'+
        '<div class="col-md-6"><h2>'+r.name+' ('+r.first_air_date+')</h2><h4>'+r.overview+'</h4></div>');
        $('#tv-desc-img').css("background-image", "url("+fondo+r.poster_path+")"); 
        $("#datos-serie").html("");
                console.log(r.networks);
                contenido =
                '<div>'+
                    '<div class"row"><h4>Datos</h4></div>'+
                    '<div><h5>Estado:</h5><p>'+r.status+'</p></div>'+
                    '<div><h5>Tipo:</h5><p>'+r.type+'</p></div>';
                r.networks.forEach(function(n) {
                    contenido += 
                    '<div><h5>Canal:</h5><a><img class="img-thumbnail" src="'+logo+n.logo_path+'" title="'+n.name+'" alt="'+n.name+'/"></a></div>';
                });
              contenido +='</div>';
            $("#datos-serie").html(contenido);
    });
    $.getJSON(api+'tv/'+id+'/credits?api_key='+key)
    .done((a)=>{
        $("#container-tv-popular").html("");
        contenido='';
        console.log(a);
        a.cast.forEach(function(r) {
        contenido +=
        '<div class="celebridad_datos">'+
            '<div><img class="img-thumbnail" src="'+img+''+r.profile_path+'" title="'+r.name+'" alt="'+r.name+'/"></div>'+
            '<div><h5>'+r.name+'</h5><p>'+r.character+'</p></div>'+
        '</div>';
      });
      $("#container-tv-popular").html(contenido);
    });

    $.getJSON(api+'tv/'+id+'/season/1?api_key='+key)
            .done((r)=>{
                $("#container-temp-serie").html("");
                console.log(r);
                contenido =
                '<div class="row" id="temporada-desc">'+
                    '<div class="col-md-4"><img class="img-thumbnail" src="'+img+''+r.poster_path+'" title="'+r.name+'" alt="'+r.name+'/"></div>'+
                    '<div class="col-md-8"><h5>'+r.name+'</h5><h6>'+r.overview+'</h6></div>'+
                '</div>';
            $("#container-temp-serie").html(contenido);
            $('#id-temp').html('<a style="text-decoration: none;" href="../html/temporadas.html?'+id+'">Ver todas las temporadas</a>')
    });

  });
