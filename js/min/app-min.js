var loader=function(){var t=$(window).height(),a=$(window).width();$("#loader").height(t+"px").width(a+"px")},alignBooks=function(){$(".ebook-list > .col-sm-3 > a > img").each(function(){var t=$(this).parents(".ebook-list"),a=$(this).height(),i=$(this).width(),o=$(t).height()-a;$(this).parent("a").height(a).css({"margin-top":o+"px",width:i+"px"}),$(this).siblings(".cover-overlay").css({bottom:"-"+a+"px"})})},getBookData=function(){$(".ebook-list > .col-sm-3 > a > img").each(function(){var t=this,a=$(t).attr("data-title"),i=$(t).siblings(".cover-overlay"),o=$(t).attr("data-price"),n=$(t).attr("src"),e=$(t).attr("data-status"),s=$(t).siblings(".triangle-topright"),r=$(s).children("p");"0"===e?$(r).html(o):($(r).html('<i class="fa fa-check-circle"></i>').css({"font-size":"24px",top:"-2px",right:"-12px",transform:"none"}),$(s).addClass("bought-m"),$(i).remove(),$(t).parent("a").attr({title:a,href:"magazine.html"})),$(i).children("p").html(a),$(i).children("button").click(function(){alert("Fecha: "+a)})})},alignNav=function(){var t=$("#bt-nav-ul").width()+1,a=$("#btt-nav").width(),i=(a-t)/2;$("#bt-nav-ul").css({width:t+"px",margin:"0 "+i+"px -3px"})};$(document).ready(function(){loader()}),$(window).load(function(){var t=document.getElementById("ebooks-container"),a=imagesLoaded(t);alignBooks(),alignNav(),getBookData(),$(window).resize(alignBooks,alignNav),a.on("always",function(t){$("#loader").fadeOut(1900)})});