var loader=function(){var t=$(window).height(),i=$(window).width();$("#loader").height(t+"px").width(i+"px")},alignBooks=function(){$(".ebook-list > .col-sm-2 > a > img").each(function(){var t=$(this).parents(".ebook-list"),i=$(t).height(),o=i-$(this).height();$(this).css({"margin-top":o+"px"})})},getTitles=function(){$(".ebook-list > .col-sm-2 > a > img").each(function(){var t=$(this).attr("data-title"),i=$(this).siblings(".cover-overlay"),o=$(this).attr("src");$(this).parent("a").attr({title:t,href:o}),$(i).children("p").html(t)})};$(document).ready(function(){loader()}),$(window).load(function(){$("#loader").fadeOut(2800),alignBooks(),getTitles(),$(window).resize(alignBooks)});