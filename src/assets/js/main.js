(function($){
"use strict";
	$(function(){
		$('#menu').slicknav(
				{
					label: '',
					// prependTo:'',
				}
			);
		});

    $('.main-menu li').hover(function() {
        $('span', this).stop().css('height', '3px');
        $('span', this).animate({
            left: '-13%',
            width: '130%',
            // right: '-50%'
        }, 200);
    }, function() {
        $('span', this).stop().animate({
            left: '0',
            width: '0'
        }, 200);
    });

})(jQuery)