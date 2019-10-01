window.addEventListener("load", function () {
    $(".carousel").addClass("loadSlider");
});


jQuery(function () {
    /*home*/
    let primaryScreenCarousel = document.querySelector('.primary-screen-carousel') !== null;
    var mainCarousel;
    if (primaryScreenCarousel) {
        mainCarousel = front.newSlider('.primary-screen-carousel', {
            cellAlign: 'center',
            contain: true,
            pageDots: true,
            verticalCells: true,
            prevNextButtons: false
        });
    }

    let homeCatalogCarousel = document.querySelector('.equipment-carousel') !== null;

    if (homeCatalogCarousel) {
        front.newSlider('.equipment-carousel', {
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true
        });
    }

    let homeGalleryCarousel = document.querySelector('.gallery-carousel') !== null;

    if (homeGalleryCarousel) {
        front.newSlider('.gallery-carousel', {
            cellAlign: 'center',
            contain: true,
            prevNextButtons: true
        });
    }

    let teamCarousel = document.querySelector('.team-carousel') !== null;

    if (teamCarousel) {
        front.newSlider('.team-carousel', {
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true
        });
    }
    let reviewsCarousel = document.querySelector('.reviews-carousel') !== null;

    if (reviewsCarousel) {
        front.newSlider('.reviews-carousel', {
            cellAlign: 'center',
            contain: true,
            prevNextButtons: true
        });
    }

    let videoCarousel = document.querySelector('.video-carousel') !== null;

    if (videoCarousel) {
        front.newSlider('.video-carousel', {
            cellAlign: 'center',
            contain: true,
            prevNextButtons: true
        });
    }


    /*product list*/

    let categoryCarousel = document.querySelector('.category-carousel') !== null;
    if (categoryCarousel) {
        front.newSlider('.category-carousel', {
            cellAlign: 'left',
            contain: true,

            prevNextButtons: true
        });
    }


});
