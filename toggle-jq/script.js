var toggled=false;
var circle=$('#circle');

$('#container').click(function(){
    
    $('#heading').toggleClass('color-white');
    $('#mode').toggleClass('color-white');
    $('body').toggleClass('black-bg');

    if(toggled){
        circle.css('margin-left','0px');
        toggled=false;
        $('#mode').html('This is Light Mode');
    }

    else{
        circle.css('margin-left','200px');
        toggled=true;
        $('#mode').html('This is Dark Mode');
    }
});
