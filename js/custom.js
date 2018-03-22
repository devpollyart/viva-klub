(function($){
    $(function(){
        var popup = $('.list__item'),
            overlayDiv = $('.popup'),
            picture;

        popup.on('click','img', function(){
            overlayDiv.css('block','none')
            overlayDiv.fadeIn(600);
            picture = $(this).attr('src')
            picture = picture.slice(0,8) + 'B' + picture.slice(8, picture.length);
            overlayDiv.find('img').attr('src', picture);
            
        });


        overlayDiv.click(function(){
            overlayDiv.fadeOut(600);
        })

    });
})(jQuery);