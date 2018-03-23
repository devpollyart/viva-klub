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

        var fooSpo = function () {
            var textReplace = $(this).html();
            var lettersToReplace = ["a", "i", "o", "u", "w", "z", "A", "I", "O", "U", "W", "Z"];
            var arrayLength = lettersToReplace.length;
            for (var i = 0; i < arrayLength; i++) {
                var textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
                var textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
            }
            $(this).empty();
            $(this).html(textReplace);
        }
        var initSpo = function () {
            $('p').each(fooSpo);
            $('h2').each(fooSpo);
            $('h3').each(fooSpo);
            $('h4').each(fooSpo);
        }

        initSpo();
        
        $('#form--one').on('submit', function(e){
            e.preventDefault();
            var data = $(this).serialize();
            $.ajax({
                method: "POST",
                data: data,
                url: "/send.php"
            }).done(function(response){
                if(response === 'Wysłano'){
                   $('input').val("");
                //    $('textarea').val("");
                   $('input:submit').css('background','#F37100').val("Wysłano");
                } else {
                    console.log('');
                }
            })
        })

        $('.formError').html('Pole wymagane');
        
        $('#form--two').on('submit', function(e){
            e.preventDefault();
            var data = $(this).serialize();
            $.ajax({
                method: "POST",
                data: data,
                url: "/send.php"
            }).done(function(response){
                if(response === 'Wysłano'){
                   $('input').val("");
                //    $('textarea').val("");
                   $('input:submit').css('background','#F37100').val("Wysłano");
                } else {
                    console.log('');
                }
            })
        })

    });
})(jQuery);