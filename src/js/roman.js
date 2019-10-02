// Roman
$(document).ready(function() {
  // FAQ Disabled button
  $('#faq-pib, #faq-phone, #faq-email, #faq-message').on("keyup", action);

  function action() {
    if( $('#faq-pib').val().length > 0 && $('#faq-phone').val().length > 0 && $('#faq-email').val().length > 0 && $('#faq-message').val().length > 0) {
      $('.contact-submit').removeClass('btn-disabled').addClass('btn-primary')
    } else {
      $('.contact-submit').removeClass('btn-primary').addClass('btn-disabled')
    }   
  }

  // Single specialist certificate popup 
  $('.certificates-item, .gallery-item-link ').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    callbacks: {
      buildControls: function() {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      }
    }
  });

  document.querySelector(".partners-carousel") && front.newSlider(".partners-carousel", {
    cellAlign: "center",
    contain: !0,
    prevNextButtons: !0,
    wrapAround: true
  });

  document.querySelector(".achievement-carousel") && front.newSlider(".achievement-carousel", {
    cellAlign: "center",
    contain: !0,
    prevNextButtons: !0,
    wrapAround: true
  });

  $('.single-news-scroll').click(() => {
    $('html, body').animate({
        scrollTop: $('#single-post').offset().top - $('#masthead').height() + 5
    }, 600);
  });

  $('.inner-hamburger').click(function(){

    let innerHamburger = $('.hamburger-lines');
    let innerNav = $('.inner-nav-menu');

    innerHamburger.hasClass("open") ? (innerHamburger.removeClass("open"),
    innerNav.toggleClass("active")) : (innerHamburger.addClass("open"),
    innerNav.toggleClass("active"))
  })

  var sidebar = new StickySidebar('#sidebar', {
    containerSelector: '#main-content',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 160,
    bottomSpacing: 50,
    minWidth: 768
  });

});