/*
	---------------------------------------------------------------------

    Template Name: Digibiz
    Template Description: Digibiz - HTML Template
    Version: 1.0
    Template Author: Rahul Kaklotar

    ---------------------------------------------------------------------

    JS INDEX
    ================
	1. Scroll Navbar
	2. Menu On Hover
	3. Preloader
    4. Text Animation
    5. Back To Top
    6. counter up
    7. Pricing Table
    8. Best Skills (About page)
 */

(function($) {
    "use strict";

    // 1.Scroll Navbar

    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    // 2. Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
        if ($(window).width() > 991) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function() {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    // 3. Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(500).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });
    // 8. Best Skills (About page)
    var skillsDiv = jQuery('#skills');

    jQuery(window).on('scroll', function() {
        var winT = jQuery(window).scrollTop(),
            winH = jQuery(window).height(),
            skillsT = skillsDiv.offset().top;
        if (winT + winH > skillsT) {
            jQuery('.skill-bar').each(function() {
                jQuery(this).find('.skill-per').animate({
                    width: jQuery(this).attr('data-percent')
                }, 6000);
            });
        }
    });
    // 4. Text Animation
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function() {
            cw[i].className = 'letter out';
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function() {
            nw[i].className = 'letter in';
        }, 340 + (i * 80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);



    // 5. Back To Top
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
    // 6. Counter Up
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // 7. Pricing Table
    $(document).ready(function() {
        $(function() {
            $('.pricing-plan').click(function(e) {
                e.preventDefault();
                $('.pricing-plan').removeClass('active-pricing');
                $(this).addClass('active-pricing');
            });
        });
    });

})(jQuery);