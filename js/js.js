var countjson = 0;
var fileNames = ["1.json", "2.json"];

$(document).ready(function () {

    $("#loadMore").click(function () {
        cargarNoticias();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            cargarNoticias();
        }
    });
});

function crearNoticias(json) {
    var img;
    var titular;
    var date;
    var desc;
    $.each(json, function (i, news) {
        img = news.img;
        titular = news.titular;
        date = news.date;
        desc = news.desc;
        $("#newsid").append('<div class="col-sm-9">'+
                                '<div class="well">'+
                                    '<div class="row">'+
                                        '<a class="redirect" href="#"><h1 class="titular col-sm-9">' + titular + '</h1></a>'+
                                        '<h4 class="date col-sm-2">'+ date +'</h4>'+
                                        '</div><div class="row">'+
                                        '<img src="' + img + '" class="img-thumbnail col-sm-3" alt="thumbnail" width="280">'+
                                        '<p class="new-desc col-sm-8">'+ desc +'</p>'+
                                    '</div>'+
                                '</div>');
    });
}

function cargarNoticias() {
    if (countjson < fileNames.length) {
        var name = fileNames[countjson];
        countjson++;
        $.getJSON("https://rawgit.com/ZharkenD/Pagina-Noticias/master/data/" + name, function (jsonObject) {
            crearNoticias(jsonObject);
        });
    } else {
        alert("No hay más noticias :(");
    }
}