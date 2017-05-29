var countjson = 0;
var fileNames = ["1.json", "2.json"];

$(document).ready(function () {

    $("#loadMore").click(function () {
        loadNews();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            loadNews();
        }
    });
});

function createNews(json) {
    var img;
    var titular;
    var date;
    var desc;
    $.each(json, function (i, news) {
        img = news.img;
        titular = news.titular;
        date = news.date;
        desc = news.desc;
        $("#newsid").append('<div class="well"><div class="row"><h1 class="titular col-sm-2">' + titular + '</h1><h4 class="date col-sm-6">'+ date +'</h4></div><div class="row"><img src="' + img + '" class="img-thumbnail col-sm-3" alt="thumbnail" width="250"><p class="new-desc col-sm-8">'+ desc +'</p></div></div>');
    });
}

function loadNews() {
    if (countjson < fileNames.length) {
        var name = fileNames[countjson];
        countjson++;
        $.getJSON("https://rawgit.com/ZharkenD/Pagina-Noticias/master/data/" + name, function (jsonObject) {
            createNews(jsonObject);
        });
    } else {
        alert("No more news for you :(");
    }
}