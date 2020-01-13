
$(".light-on").click( function() {
    console.log("light on");
$("body").css({"background": "#fff"});
$(".pic").css({"background-image" : "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('assets/images/Pinar.JPG')",
"height" : "100%", "background-position":"center", "background-repeat":"no-repeat","background-size":"cover","position":"relative"});
$(".nav").css({"background": "rgb(255,195,0)"});
$("body").css({"color": "#272c35"});
$(".pic-text").css({"color": "#272c35"});
$("li").css({"color": "#272c35"});
$("h1").css({"color": "#272c35"});
$("h4").css({"color": "#30718f"});
$("h5").css({"color": "#30718f"});
$("a").css({"color": "#272c35"});
$(".overlay").css({"background-color":"rgba(255, 255, 255, 0.9)"});
// $(".nav-link").attr("onmouseover", "mouseover()")
// $(".nav-link").attr("onmouseout", "mouseout()")
$(".card").css({"background": "#fff"});
$(".btn-outline-light").css({"color": "#fff", "border-color":"#272c35","background":"#272c35"});
$("hr").css({"border-color":"#272c35"});
$(".nav-link").css({"color":"#272c35"});
$(".light-off").show();
$(".light-on").hide();

})

// function mouseover() {
//     $(".nav-link").css({"color":"red"})
// }
// function mouseout() {
//     $(".nav-link").css({"color":"#30718f"})
// }
$(".light-off").click(function() {
$("body").css({"background": "#343b47"});
$(".pic").css({"background-image" : "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/images/Pinar.JPG')"});
$(".nav").css({"background": "#272c35"});
$("body").css({"color": "#FFC300 "});
$(".pic-text").css({"color": "#FFC300"});
$("li").css({"color": "#FFC300"});
$("h1").css({"color": "#FFC300"});
$("h4").css({"color": "#FE7300"});
$("h5").css({"color": "#FE7300"});
$("a").css({"color": "#FFC300"});
$(".overlay").css({"background-color":"rgba(52,59,71, 0.9)"});
$(".card").css({"background": "#343b47"});
$(".btn-outline-light").css({"color": "#f8f9fa", "border-color":"#f8f9fa","background":"transparent"});
$("hr").css({"border-color":"#FBFF00", "border-style": "dotted"});
$(".nav-link").css({"color":"#FFC300"});
$(".light-off").hide();
$(".light-on").show();
})
// $('.certi_searchinputnh').focus(function(){
//     $('.certi_searchinputnh').css({'background-color':'white'});

