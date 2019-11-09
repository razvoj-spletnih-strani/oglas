function pokazi(){
  $("#ozadje").fadeIn();
  $("#oglas").fadeIn();
}

function poravnava(){
  var visinaOkna = $(window).height();
  var sirinaOkna = $(window).width();
  var visinaOglasa = $("#oglas").height();
  var sirinaOglasa = $("#oglas").width();

  console.log("Višina oglasa: " + visinaOglasa);

  $("#oglas").css({
    "top": visinaOkna/2-visinaOglasa/2,
    "left": sirinaOkna/2-sirinaOglasa/2
  })
}

function zapriOglas(){
  $("#ozadje").fadeOut("slow");
  $("#oglas").fadeOut("slow");
}

$(document).ready(function(){
  pokazi()
  poravnava();

  $( window ).resize(function() {
    poravnava();
  });

  $("#zapri").click(function(){
    zapriOglas();
  });

  $(document).keyup(function(e) {
     if (e.key === "Escape") {
       zapriOglas();
    }
  });
});
