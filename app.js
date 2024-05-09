$(document).ready(function(){
    console.log('Selimcan Gürsu - Full Stack Web Developer')
    $('#reset').click(function(){
        if($('#navigation-1').hasClass('active')){
            $('#navigation-1').addClass('navigation-1-after').removeClass('active').removeAttr('id');
            $('#navigation-3').addClass('navigation-3-after').removeAttr('id');
        } else {
            $('.navigation-1-after').removeClass('navigation-1-after').addClass('active').attr('id', 'navigation-1');
            $('.navigation-3-after').removeClass('navigation-3-after').addClass('active').attr('id', 'navigation-3');
        }
    });
});
