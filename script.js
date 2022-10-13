// notes:


$(function () {
    $(".typed").typed({
        strings: ["Herramientas", "Reportes", "Información", "Controles", "Operaciones"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () { },
        // starting callback function before each string
        preStringTyped: function () { },
        //callback for every typed string
        onStringTyped: function () { },
        // callback for reset
        resetCallback: function () { }
    });
});

jQuery(document).ready(function () {
    var fondos = new Array();

    /******** INICIO ZONA EDITABLE******/

    fondos[0] = "1.jpg";
    fondos[1] = "2.jpg";
    fondos[2] = "3.jpg";
    fondos[3] = "4.jpg";

    /*******  FIN ZONA EDITABLE *******/

    var numaleatorio = Math.floor(Math.random() * fondos.length);
    console.log(numaleatorio);

    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    document.getElementsByClassName('fondo')[0].style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';

});





  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });