$(document).ready(do_stuff);

function do_stuff(){
    $("#form").submit( function(e){
        return validate_all();
    });
}

function validate_all(){
    var username_result = validate_username("#username", "#username_feedback");
    var email_result = validate_email("#email", "#email_feedback");
    var position_result = validate_position("#position", "#position_feedback");
    var type_result = validate_type("#type_feedback");
    
    return username_result && email_result && position_result && type_result;
}

function validate_username(element, feedback){
    var value = $(element).val().trim();
    if(value.length < 6 || value.length > 10){
        $(feedback).text("Username must be between 6 and 10 characters");
        return error_style(element,feedback);
    }
    else if (!/[a-zA-Z_]/.test(value)){
        $(feedback).text("Username can only contain letters and underscore");
        return error_style(element,feedback);
    }
    else {
        return correct_style(element, feedback);
    }
}

function validate_email(element, feedback){
    var value = $(element).val().trim();
    if (!/([a-z0-9]+)@([a-z0-9]+).([a-z0-9]+)/i.test(value)){
        $(feedback).text("Invalid email");
        return error_style(element, feedback);
    }
    else {
        return correct_style(element, feedback);
    }
}

function validate_position(element, feedback){
    if($(element).val()==="none"){
        $(feedback).text("You must select a position");
        return error_style(element, feedback);
    }
    else{
        return correct_style(element, feedback);
    }
}

function validate_type(feedback){
    if($("#type_full").prop('checked') || $("#type_part").prop('checked')){
        return correct_style_radio(feedback);
    }
    else {
        $(feedback).text("You must select a type.");
        return error_style_radio(feedback);
    }
}

function error_style(element, feedback){
    $(element).css("border-color","red");
    $(feedback).css("color","red");
    return false;
}

function correct_style(element, feedback){
    $(element).css("border-color","light-gray");
    $(feedback).css("color","green");
    $(feedback).html("&#10004");
    return true;
}

function correct_style_radio(feedback){
    $(feedback).css("color","green");
    $(feedback).html("&#10004");
    return true;
}

function error_style_radio(feedback){
    $(feedback).css("color","red");
    return false;
}

