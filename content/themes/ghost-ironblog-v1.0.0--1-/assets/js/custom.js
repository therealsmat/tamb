(function($) {

    "use strict";
    // preloader


	
    // Scroll Top

    function scrolltop() {


           var wind = $(window);
           wind.on("scroll", function() {
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= 500) {

                $(".back-top").fadeIn("slow");

            } else {

                $(".back-top").fadeOut("slow");
            }
        });

        var scrollDiv = $(".back-top");

        scrollDiv.on("click", function() {

            var bodyTop = $("html, body");

            bodyTop.animate({

                scrollTop: 0

            }, 800, "easeInOutCubic");
        });

    }

    scrolltop();

    // slider section

    // if($("#immersive_slider").length >0) {

    //    $("#immersive_slider").immersive_slider({
    //      container: ".main",
    //      item: 2
    // });

$('.carousel-wrapper').owlCarousel({
            //autoplay:true,
            loop:true,
            smartSpeed:450,
            dots:false,
            nav:true,
            margin:0,
            mouseDrag:true,
            autoHeight:true,
            center:true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            stagePadding:30,
            rewind: true,
            responsive:{
                1200:{items:3},
                980:{items:1},
                767:{items:1},
                0:{items:1},

            }
        });

     
 // }


    // share link

    $(".social-toggle").on("click", function() {

        $(this).next().toggleClass("open-menu");

    });

    // smothly scroll

    // jQuery.scrollSpeed(100, 800);

    // fixed sidebar scroll

    // $(".sidebar").stick_in_parent();

    // Basic FitVids

    $(".container").fitVids();

    // syntax heighlighter

     $("div.code").each(function(i, block) {

          hljs.highlightBlock(block);
     });
	
    // Google Map 
    function ourCustomMap() {

        if ($("#myMap").length > 0) {
            var map;
            var mapId = document.getElementById("myMap");
            var mLatLng = new google.maps.LatLng(26.8130862, -80.6685252);
            map = new google.maps.Map(mapId, {
                center: mLatLng,
                zoom: 10,
                zoomControl: true,
                streetViewControl: true,
                scrollwheel: false

            });

            var contentString = '<div id="mapContent">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h3 id="firstHeading" class="firstHeading">iBlog</h3>' +
                '<div id="bodyContent">' +
                '<p>' +
                '1317 Rardin Ave Pahokee, <br />FL 33476  </p>' +
                '</div>' +
                '</div>' + '<div id="mapImage">' + '<img src="images/map-img.jpg" alt="footer icon" />' + '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 500

            });

            var marker = new google.maps.Marker({
                position: mLatLng,
                map: map,
                title: "Our Company Office Location",
                icon: "images/map-icons/clothings.png",
                animation: google.maps.Animation.BOUNCE
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
                $(".gm-style-iw").parent().addClass("mapOuter");
            });

            infowindow.open(map, marker);
        }

    };

    ourCustomMap();

    // Active Ghost Hunter

    function ghost_hunter_search(){

         if($("#search-field").length >0){
                $("#search-field").ghostHunter({
                 results: ".search-result",
                 onKeyUp: true,
                 info_template: "<p class='result-count'>Number of posts found: {{amount}}</p>",
                result_template: "<h5><a href='{{link}}'>{{title}}</a></h5><p>{{pubDate}}</p>"
               });
            }
         }

    ghost_hunter_search();


    // syntax heightlihter

    function syntax_heighlighter(){

        if($("pre code").length >0 ){

                $("pre code").each(function(i, block) {

                 hljs.highlightBlock(block);
              });
        }

    }

   syntax_heighlighter();



})(jQuery);