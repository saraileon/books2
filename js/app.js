/*--global console:true*/

var loader = function(){
 var h = $(window).height();
 var w = $(window).width();
 $('#loader').height(h+'px').width(w+'px');
};

var alignBooks = function () {
	$('.ebook-list > .col-sm-2 > a > img').each( function () {
		var p =		$(this).parents('.ebook-list');
		var rh =	$(p).height();
		// $(this).siblings('.cover-overlay').css({'bottom' : '-'+rh+'px'});
		var h = 	( rh - $(this).height() ) ;

		$(this).css({'margin-top' : h+'px'});
	});
};

var getTitles = function () {
	$('.ebook-list > .col-sm-2 > a > img').each( function () {
		var t = $(this).attr('data-title');
		var s = $(this).siblings('.cover-overlay');
		var h = $(this).attr('src');
		$(this).parent('a').attr({'title':t, 'href':h});
		$(s).children('p').html(t);
	});
};
// loader();

$(document).ready(function() {
	loader();
});

$(window).load( function () {
	$('#loader').fadeOut(2800);

	alignBooks();
	getTitles();
	$(window).resize(alignBooks);
	
});