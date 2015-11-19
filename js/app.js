/*--global alert:true*/

var loader = function(){
 var h = $(window).height();
 var w = $(window).width();
 $('#loader').height(h+'px').width(w+'px');
};

var alignBooks = function () {
	$('.ebook-list > .col-sm-2 > a > img').each( function () {
		var p =		$(this).parents('.ebook-list');
		var rh =	$(p).height();
		var h = 	( rh - $(this).height() ) ;

		$(this).css({'margin-top' : h+'px'});
	});
};

// loader();

$(document).ready(function() {
	loader();
});

$(window).load( function () {
	$('#loader').fadeOut(2800);

	alignBooks();
	$(window).resize(alignBooks);
	
});