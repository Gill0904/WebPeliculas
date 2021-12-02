api="https://api.themoviedb.org/3/";
key="";
img='https://image.tmdb.org/t/p/w220_and_h330_face/';
fondo='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
face='https://image.tmdb.org/t/p/w138_and_h175_face/';
logo='https://image.tmdb.org/t/p/h30/';
var id = location.search.substring(1);
$(document).ready(function() {
    console.log(id);
    var temporadas= 0;
    $.getJSON(api+'tv/'+id+'?api_key='+key)
    .done((r)=>{
        temporadas=r.number_of_seasons;
        $("#container-temporadas").html("");
        for (let index = 1; index <= temporadas; index++) {
           var contenido ='';
          $.getJSON(api+'tv/'+id+'/season/'+index+'?api_key='+key)
                .done((respose)=>{
                    contenido +=
                    '<div class="row" id="item">'+
                        '<div class="col-md-3"><span onclick="capitulos('+index+')">'+
                        '<img class="img-thumbnail" src="'+img+''+respose.poster_path+'" title="'+respose.name+'" alt="'+respose.name+'/"></span></div>'+
                        '<div class="col-md-9"><h5>'+respose.name+'</h5><h6>'+respose.overview+'</h6></div>'+
                    '</div>';
            $("#container-temporadas").html(contenido);
          });
        }
  });
});
function capitulos(index) {
  $('#datos_capitulos').html('');
    $.getJSON(api+'tv/'+id+'/season/'+index+'?api_key='+key)
        .done((respose)=>{
          episodios= respose.episodes.length;
        for (let index2 = 1; index2 <= episodios; index2++) {
          $.getJSON(''+api+'tv/'+id+'/season/'+index+'/episode/'+index2+'?api_key='+key)
          .done((data) => {
            $("#titulo").text(respose.name);
            let $h1 = $("<h1/>").text(index2+'.- '+data.name);
            let $info = $('<p/>').text(data.overview);
            let $date = $('<h4/>').text(data.air_date);
            $("#datos_capitulos").append($h1,$info,$date);
            $("#modal_capitulo").modal("show");
          });
        }
      });
}
