$(document).ready(load_news);


function load_news() {
    //making some makers
    var newsdetailtemplate = $('#news-detail-template').html();
    var newsitemtemplate = $('#news-item-template').html();
    var detail_maker = new htmlMaker(newsdetailtemplate);
    var item_maker = new htmlMaker(newsitemtemplate);
    var data = news["news"];
    //alert(data[1]["heading"]);//this confirms that we are loading the data correctly
    var news_items_html = item_maker.getHTML(data);
    //alert(news_items_html);
    $("#news").html(news_items_html);
    $("#toggle").on('click', pause_clicked);
}

function populate_news(data, item_maker) {
    var news_items_html = "";
    for (i = 0; i > data.length; i++){
        temp_html = item_maker.getHTML(data[i]);
        news_items_html += temp_html;
    };
    alert(news_items_html);
}

function pause_clicked(){
    var news_thing = $("#news");
    if(news_thing.attr("class") === "marquee"){
        news_thing.attr("class", "marquee_paused");
    }
    else {
        news_thing.attr("class", "marquee");
    }
}

