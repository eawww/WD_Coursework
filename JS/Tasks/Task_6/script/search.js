 $(document).ready(function () { 
     $("#search_button").on('click',search);
     $(".sub_suggestions").on('click',disappear());
     $("html").on("click",function(){
         $("#suggestions_box").hide();
     });
 });




function search() {
    var names = ["Sab", "Sam", "Samir", "Samorai", "Sap"];
    var html = "";
    var value = $("#field").val(); //get the value of the text field
    var show=false; //don't show suggestions

    $.each(names, function (i, val) {
        var start = names[i].toLowerCase().search(value.toLowerCase().trim());
        if (start != -1) { //if there is a search match
            html += "<div class='sub_suggestions' data-item='" + names[i] + "' >";
            html += names[i];
            html += "</div>";
            show=true; //show suggestions
        }
    });
    if(show){
        $("#suggestions_box").html(html);
        
        $("#suggestions_box").show();
        $(".sub_suggestions").on('click',function(){
            $("#suggestions_box").hide();
        });
    }
    else
       $("#suggestions_box").hide();
}
function disappear(){
    alert("DISAPPEAR");
}

