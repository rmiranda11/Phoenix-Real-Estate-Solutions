$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

$( ".blue" ).hover(
      function() {
        $( this ).css("box-shadow",".5rem .5rem blue");
      }, function() {
        $( this ).css( "box-shadow","none" );
      }
    );

    $( ".red" ).hover(
      function() {
        $( this ).css("box-shadow",".5rem .5rem red");
      }, function() {
        $( this ).css( "box-shadow","none" );
      }
    );

    $( ".green" ).hover(
      function() {
        $( this ).css("box-shadow",".5rem .5rem green");
      }, function() {
        $( this ).css( "box-shadow","none" );
      }
    );
     
    $( ".blue2" ).hover(
      function() {
        $( this ).css("box-shadow",".5rem .5rem lightblue");
      }, function() {
        $( this ).css( "box-shadow","none" );
      }
    );

    $( ".yellow" ).hover(
      function() {
        $( this ).css("box-shadow",".5rem .5rem yellow");
      }, function() {
        $( this ).css( "box-shadow","none" );
      }
    );

    $( ".gray" ).hover(
      function() {
        $( this ).css("box-shadow",".5rem .5rem gray");
      }, function() {
        $( this ).css( "box-shadow","none" );
      }
    );

    $( ".black" ).hover(
      function() {
        $( this ).css("box-shadow",".5rem .5rem black");
      }, function() {
        $( this ).css( "box-shadow","none" );
      }
    );

    $(document).ready(function(){
      $("#learn").click(function(){
        $(".wrapper").attr("href","./../../services.html")
        console.log("Clicked")
    });
});


