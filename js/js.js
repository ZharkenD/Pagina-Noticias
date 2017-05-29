var countjson = 0;
var fileNames = ["1.json", "2.json"];

$(document).ready(function () {

    $("#btnMore").click(function () {
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
        $("#newsid").append('<div class="well"><div class="row">');
    });
}

function loadNews() {
    if (countjson < fileNames.length) {
        var name = fileNames[countjson];
        countjson++;
        $.getJSON("https://rawgit.com/PedroAmat/Steam-News/master/data/" + name, function (jsonObject) {
            createNews(jsonObject);
        });
    } else {
        alert("You've just seen all our news!");
    }
}