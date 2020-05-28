// when page loads 
//////////////////////////////////////////////////////////////////////
$(document).ready(function(){

    // Loader (after loading)
    //////////////////////////////////////////////////////////////////////
    $(".loading").fadeOut(1000, function(){
        // show whole document
        $("body").css("overflow", "auto");
        
        // Nice Scroll Settings
        $("body").niceScroll({
            cursorwidth:10,
            cursorcolor:'#6e8cb6',
            cursorborder:'none',
            cursorborderradius:4
        });

        // remove loader after loading
        $(this).remove();
    });
    //////////////////////////////////////////////////////////////////////




    // smooth scroll settings
    //////////////////////////////////////////////////////////////////////
    var scroll = new SmoothScroll();
    var smoothScrollWithoutHash = function (selector, settings) {
        /**
         * If smooth scroll element clicked, animate scroll
         */
        var clickHandler = function (event) {
            var toggle = event.target.closest( selector );
            console.log(toggle);
            if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
            console.log(toggle.hash);
            var anchor = document.querySelector( toggle.hash );
            if ( !anchor ) return;
    
            event.preventDefault(); // Prevent default click event
            scroll.animateScroll( anchor, toggle, settings || {} ); // Animate scroll
        };
        window.addEventListener('click', clickHandler, false );
    };
    // Run our function
    smoothScrollWithoutHash( 'a[href*="#"]', {
        speed: 1000
    } );
    //////////////////////////////////////////////////////////////////////


    
    // scrolltop icon
    //////////////////////////////////////////////////////////////////////
    var scrollUp = $(".scrollup");
    $(window).scroll(function(){
        $(this).scrollTop() >= 500 ? scrollUp.fadeIn("slow") : scrollUp.fadeOut("slow");
    });
    scrollUp.click(function(){
        $("html, body").animate({scrollTop:0},1000);
    });
    //////////////////////////////////////////////////////////////////////




    // Functions
    //////////////////////////////////////////////////////////////////////

        // Make Animation function Animate.css
        //////////////////////////////////////////////////////////////////////
        function makeAnimation (element, type) {
            element.mouseenter(function(){
                $(this).addClass(type);
            });
            element.mouseleave(function(){
                $(this).removeClass(type);
            });
        };
        //////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////




    // updates social media Animation
    //////////////////////////////////////////////////////////////////////
    var upSocial = $(".updates-con .social li");
    makeAnimation(upSocial, "animated zoomIn");
    //////////////////////////////////////////////////////////////////////



    // Services Content Animation
    //////////////////////////////////////////////////////////////////////
    var serArticle = $(".services-con article");
    makeAnimation(serArticle, "animated shake");
    //////////////////////////////////////////////////////////////////////


});
//////////////////////////////////////////////////////////////////////