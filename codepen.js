$(document).ready( function() {

  var isMobile = window.matchMedia("only screen and (max-width: 600px)");

      if (isMobile.matches) {
        var viewportHeight = $('.main-wrap').css({ height: window.innerHeight });
        $('.banner').css({ height: viewportHeight });
          //Conditional script here
      }



        var textArray = [
            'adequate.',	'bombastic.',	'a calamity.',	'creaky.',	'a crime scene.',	'disagreeable.',	'damned.',	'furious.',	'hazardous.',	'turning friends against each other', 'immoral.',	'laced.',	'odious.',	'offensive.',	'objectionable.',	'problematic.',	'ramshackle.',	'turbulent.',	'ungovernable.',	'vehement.',	'a wallop.',	'woeful.',	'widening the inequality gap.',	'yucky.',	'destructive', 'zany.',	'on a zoom.'  /**/
        ];
        $('#text-box').randomText( textArray, 5000, "El Randomizah!" ); // ( array, interval, ["reload text or html"] )
    });
    // custom jquery plugin loadText()
    $.fn.randomText = function( textArray, interval, randomEle, prevText ) {
        var obj = $(this);
        if( $('#text-content').length == 0 ){ obj.append('<div id="text-content">'); }
        var textCont = $('#text-content');
        if( typeof randomEle != 'undefined' ){ if( $('#randomizer').length == 0 ){ obj.append('<a href="javascript:;" id="randomizer"><em>' + randomEle ); } }
        textCont.fadeOut( 'slow', function() {
            var chosenText = random_array( textArray );
            while( chosenText == prevText ) { chosenText = random_array( textArray ); }
            textCont.empty().html( chosenText );
            textCont.fadeIn( 'slow' );
            sendText = chosenText;
        });
        timeOut = setTimeout( function(){ obj.randomText( textArray, interval, randomEle, sendText ); }, interval );
        $("#randy").click( function(){
            if( !textCont.is(':animated') ) { clearTimeout( timeOut ); obj.randomText( textArray, interval, randomEle, sendText );} // animation check prevents "too much recursion" error in jQuery
        });
    }
    //public function
    function random_array( aArray ) {
        var rand = Math.floor( Math.random() * aArray.length + aArray.length );
        var randArray = aArray[ rand - aArray.length ];
        return randArray;
    }
