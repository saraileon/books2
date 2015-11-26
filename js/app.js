/*--global console:true*/
/*jshint unused: false, undef:false */

var pressed = function (e) {
  // Has the enter key been pressed?
  if ( (window.event ? event.keyCode : e.which) == 13) { 
    // If it has been so, manually submit the <form>
    // document.forms[0].submit();
    $('#search-box').fadeOut(1000);
    document.getElementById("searchBForm").reset();
    e.preventDefault();
  }
};

var loader = function(){
 var h = $(window).height();
 var w = $(window).width();
 $('#loader').height(h+'px').width(w+'px');
};


var alignBooks = function () {
	$('.ebook-list > .col-sm-3 > a > img').each( function () {
		var p =		$(this).parents('.ebook-list');
		var rh =	$(this).height();
		var w =	$(this).width();

		var h = 	( $(p).height() - rh ) ;
		// $(this).css({'margin-top' : h+'px'});
		$(this).parent('a').height( rh ).css({'margin-top':h+'px','width':w+'px'});
		$(this).siblings('.cover-overlay').css({'bottom': '-'+ rh +'px'});
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
				$(that).parent('a').attr({'title':t, 'href': 'magazine.html'});
				// .addClass('swipebox');
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



var searchBar = function () {
	$('#searchButton').click(function (){
		$('#search-box').fadeIn(1000);

		var h = $(window).height();
		$('#search-box').height(h);
		$('#searchbar').focus();
		$('.search-field').css('margin-top', (h/2)-51 + 'px' );

		return false;
	});
	
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
	searchBar();
	$(window).resize(alignBooks, alignNav, searchBar);

	imgLoad.on( 'always', function( instance ) {
		$('#loader').fadeOut(1900);
	});
});

