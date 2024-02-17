$(document).ready(function(){

    $('.desktop h2').click(function(){
        var el = $('.desktop ul');
        if(el.is(':visible') == false){
             el.fadeIn()
        }else{
            el.fadeOut()
        }
    })
})