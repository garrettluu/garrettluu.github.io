// stupid = function() {
//     let imageZoom1 = document.getElementById('entry1');
//     let imageZoom2 = document.getElementById('entry2');
//     let imageZoom3 = document.getElementById('entry3');
//
//     let img1 = document.getElementById('img1');
//     let zoomContent1 = document.getElementById('img01');
//
//     let img2 = document.getElementById('img2');
//     let zoomContent2 = document.getElementById('img02');
//
//     let img3 = document.getElementById('img3');
//     let zoomContent3 = document.getElementById('img03');
//
//
//     img1.onclick = function () {
//         imageZoom1.style.display = "block";
//         zoomContent1.src = this.src;
//     };
//
//     imageZoom1.onclick = function () {
//         imageZoom1.classList.add('fadeaway');
//         imageZoom1.addEventListener("animationend", listener, false);
//
//     };
//
//     img2.onclick = function () {
//         imageZoom2.style.display = "block";
//         zoomContent2.src = this.src;
//     };
//
//     imageZoom2.onclick = function () {
//         imageZoom2.classList.add('fadeaway');
//         imageZoom2.addEventListener("animationend", listener, false);
//
//     };
//
//     img3.onclick = function () {
//         imageZoom3.style.display = "block";
//         zoomContent3.src = this.src;
//     };
//
//     imageZoom3.onclick = function () {
//         imageZoom3.classList.add('fadeaway');
//         imageZoom3.addEventListener("animationend", listener, false);
//
//     };
//
//     function listener(event) {
//         if (event.type === "animationend") {
//             imageZoom1.style.display = "none";
//             imageZoom1.classList.remove('fadeaway');
//             imageZoom1.removeEventListener("animationend", listener, false);
//             imageZoom2.style.display = "none";
//             imageZoom2.classList.remove('fadeaway');
//             imageZoom2.removeEventListener("animationend", listener, false);
//             imageZoom3.style.display = "none";
//             imageZoom3.classList.remove('fadeaway');
//             imageZoom3.removeEventListener("animationend", listener, false);
//         }
//     }
// }
$(function () {
    'use strict';
    var $body = $('html, body');
    var $page = $('#main'),
        options = {
            debug: true,
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 250, // Duration of our animation
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
                    stupid();
                }
            }
        },
        smoothState = $page.smoothState(options).data('smoothState');

    function stupid() {
        var img = $('.img');
        var imgZoom = $('.img-zoom');
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
    stupid();
});