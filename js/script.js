$().ready(function(){
    $(".content").fadeIn(4000);

    $("#title").typed({
        strings: ["UNIX enthusiast", "Some guy with a keyboard", "Full Stack Web Developer"],
        typeSpeed: 0,
        showCursor: false
    });
});