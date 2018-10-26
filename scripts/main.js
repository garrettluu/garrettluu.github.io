$(function () {
    'use strict';
    var $body = $('html, body');
    var $page = $('#main'),
        options = {
            prefetch: true,
            scroll: true,
            cacheLength: 2,
            onStart: {
                duration: 325, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.addClass('is-exiting');
                    // Restart your animation
                    smoothState.restartCSSAnimations();
                    $body.animate( {'scrollTop': 0});
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-exiting');
                    // Inject the new content
                    $container.html($newContent);

                    //Add jQuery/JS functions that need to run here!
                    imageZoomHandler();
                    navBarShadowHandler();
                }
            }
        },
        smoothState = $page.smoothState(options).data('smoothState');

    function imageZoomHandler(){
        let img = $('.img');
        let imgZoom = $('.img-zoom');
        img.click(function () {
            imgZoom.css('display', 'block');
            $('.zoom-content').attr('src', $(this).attr('src'));
        });

        imgZoom.click(function () {
            $(this).addClass('fadeaway');
            $(this).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                $(this).removeClass('fadeaway');
                $(this).css('display', 'none');
                $(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
        });
    }
    function navBarShadowHandler() {
        let navBar = $('.nav');
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 286) {
                navBar.addClass('shadow');
            }
            else {
                navBar.removeClass('shadow');
            }
        });
    }

    imageZoomHandler();
    navBarShadowHandler();
});
