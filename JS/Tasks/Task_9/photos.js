$(document).ready(function () {
    var controller = new Controller(images["images"]);
    $("#list_icon").on('click', toList);
    $("#grid_icon").on('click', toGrid);
    //$("#combo_box").on('click',)
});

function init(){
    load_images();
}
function toList(){
    $("#photos").attr('class', 'list');
    $("#list_icon").attr('src', 'list_pressed.jpg');
    $("#grid_icon").attr('src', 'grid.jpg');
}
function toGrid(){
    $("#photos").attr('class','grid');
    $("#list_icon").attr('src', 'list.jpg');
    $("#grid_icon").attr('src', 'grid_pressed.jpg');
}
function Controller(data) {
    this.photos = data;
    
    /*** constants ***/
    this.photos_div="#photos";
    this.grid_icon="#grid_icon";
    this.list_icon="#list_icon";
    this.combo_box="#combo_box";
    this.photo_template="#photo-template";
    
    
    this.load_photos(this);
}

Controller.prototype.load_photos = function(self) {
        //get the template
    var template=$(self.photo_template).html(); //get the template
    var html_maker = new htmlMaker(template); //create an html Maker
    var html = html_maker.getHTML(self.photos); //generate dynamic HTML based on the data
    $(self.photos_div).html(html);
};








