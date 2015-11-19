/*--global console:true*/

$(document).ready( function () {

	$('.ebook-list > .col-sm-2 > img').each( function () {
		var p =		$(this).parents('.ebook-list');
		var rh =	$(p).height();
		var h = 	( rh - $(this).height() ) ;
		// var n =		$(this).attr('src');

		$(this).css({'margin-top' : h+'px'});
		
		// console.log(' -- '+ h +' -- ' + rh);
	});
});