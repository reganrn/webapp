$( ".dateofbirth" ).datepicker();

$(function(){
    $('select').on('click', function(){
        if($(this).val() == "0"){
            $(this).removeClass('changeval')
        }else{
            $(this).addClass('changeval')
        }
    })
})