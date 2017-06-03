/**
 * Created by Antonija on 03-Jun-17.
 */
$(document).ready(function(){

    $("#navClick").click(function (){
        var x = document.getElementById("nav");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    });




$("#tab-2").hide();
$("#tab-3").hide();

$("#tab1").click(function(){
    $("#tab1").addClass("active");
    $("#tab2").removeClass("active");
    $("#tab3").removeClass("active");

    $("#tab-2").hide();
    $("#tab-3").hide();
    $("#tab-1").show();
});

$("#tab2").click(function(){
    $("#tab2").addClass("active");
    $("#tab1").removeClass("active");
    $("#tab3").removeClass("active");

    $("#tab-1").hide();
    $("#tab-3").hide();
    $("#tab-2").show();
});
$("#tab3").click(function(){
    $("#tab3").addClass("active");
    $("#tab2").removeClass("active");
    $("#tab1").removeClass("active");

    $("#tab-2").hide();
    $("#tab-1").hide();
    $("#tab-3").show();
});

    var $test1 = $("#test1");
    var $test2 = $("#test2");

    $("#test2").hide();


    $("#left").click(function() {
        toggleViews($test2, $test1);
    });

    $("#right").click(function() {
        toggleViews($test1, $test2);
    });

    function toggleViews(viewToHide, viewToShow) {
        $(viewToHide).hide("slide", function() {
            $(viewToShow).show("slide");
        });
    }

    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 500
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#btn-First" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );



});