var pressed=function(t){13==(window.event?event.keyCode:t.which)&&($("#search-box").fadeOut(1e3),document.getElementById("searchBForm").reset(),t.preventDefault())},loader=function(){var t=$(window).height(),a=$(window).width();$("#loader").height(t+"px").width(a+"px")},alignBooks=function(){$(".ebook-list > .col-sm-3 > a > img").each(function(){var t=$(this).parents(".ebook-list"),a=$(this).height(),e=$(this).width(),i=$(t).height()-a;$(this).parent("a").height(a).css({"margin-top":i+"px",width:e+"px"}),$(this).siblings(".cover-overlay").css({bottom:"-"+a+"px"})})},getBookData=function(){$(".ebook-list > .col-sm-3 > a > img").each(function(){var t=this,a=$(t).attr("data-title"),e=$(t).siblings(".cover-overlay"),i=$(t).attr("data-price"),n=$(t).attr("src"),o=$(t).attr("data-status"),r=$(t).siblings(".triangle-topright"),s=$(r).children("p");"0"===o?$(s).html(i):($(s).html('<i class="fa fa-check-circle"></i>').css({"font-size":"24px",top:"-2px",right:"-12px",transform:"none"}),$(r).addClass("bought-m"),$(e).remove(),$(t).parent("a").attr({title:a,href:"magazine.html"})),$(e).children("p").html(a),$(e).children("button").click(function(){alert("Fecha: "+a)})})},alignNav=function(){var t=$("#bt-nav-ul").width()+1,a=$("#btt-nav").width(),e=(a-t)/2;$("#bt-nav-ul").css({width:t+"px",margin:"0 "+e+"px -3px"})},searchBar=function(){$("#searchButton").click(function(){$("#search-box").fadeIn(1e3);var t=$(window).height();return $("#search-box").height(t),$("#searchbar").focus(),$(".search-field").css("margin-top",t/2-51+"px"),!1})};$(document).ready(function(){loader()}),$(window).load(function(){var t=document.getElementById("ebooks-container"),a=imagesLoaded(t);alignBooks(),alignNav(),getBookData(),searchBar(),$(window).resize(alignBooks,alignNav,searchBar),a.on("always",function(t){$("#loader").fadeOut(1900)})});