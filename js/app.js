/*--global console:true*/
/*jshint unused: false, undef:false */

var loader = function(){
 var h = $(window).height();
 var w = $(window).width();
 $('#loader').height(h+'px').width(w+'px');
};

var alignBooks = function () {
	$('.ebook-list > .col-sm-3 > a > img').each( function () {
		var p =		$(this).parents('.ebook-list');
		var rh =	$(this).height();

		var h = 	( $(p).height() - rh ) ;
		// $(this).css({'margin-top' : h+'px'});
		$(this).parent('a').height( rh ).css('margin-top',h+'px');
		$(this).siblings('.cover-overlay').css('bottom', '-'+ rh +'px');
	});
};

var getBookData = function () {
	$('.ebook-list > .col-sm-3 > a > img').each( function () {
		var that = this;
		var t = $(that).attr('data-title');
		var s = $(that).siblings('.cover-overlay');
		var p = $(that).attr('data-price');
		var h = $(that).attr('src');
		var status = $(that).attr('data-status');
		var triangle = $(that).siblings('.triangle-topright');
		var ps = $(triangle).children('p');

			if( status === '0' ){
				$(ps).html(p);
			}else{
				$(ps).html('<i class="fa fa-check-circle"></i>')
					.css({
						'font-size':'24px',
						'top':'-2px',
						'right':'-12px',
						'transform':'none'
					});
				$(triangle).addClass('bought-m');
				$(s).remove();
				$(that).parent('a').attr({'title':t, 'href':h}).addClass('swipebox');
			}

		$(s).children('p').html(t);

		$(s).children('button').click(function (){
			alert('Fecha: ' +t);
		});
		

	});
};

var alignNav = function () {
	var w = $('#bt-nav-ul').width() + 1;
	var t = $('#btt-nav').width();
	var r = (t-w)/2;
	// console.log(r);

	$('#bt-nav-ul').css({'width':w+'px','margin':'0 '+r+'px -3px'});
};


$(document).ready(function() {
	loader();
});


$(window).load(function() {

	var elem =  document.getElementById("ebooks-container");
	var imgLoad = imagesLoaded( elem );

	alignBooks();
	alignNav();
	getBookData();
	$(window).resize(alignBooks, alignNav);

	imgLoad.on( 'always', function( instance ) {
		$('#loader').fadeOut("slow");
	});
});

