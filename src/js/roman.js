// Roman
$(document).ready(function() {
  // FAQ Disabled button
  // $('#faq-pib, #faq-phone, #faq-email, #faq-message').on("keyup", action);

  // function action() {
  //   if( $('#faq-pib').val().length > 0 && $('#faq-phone').val().length > 0 && $('#faq-email').val().length > 0 && $('#faq-message').val().length > 0) {
  //     $('.contact-submit').removeClass('btn-disabled').addClass('btn-primary')
  //   } else {
  //     $('.contact-submit').removeClass('btn-primary').addClass('btn-disabled')
  //   }   
  // }

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


  let innerHamburger = $('.hamburger-lines');
  let innerNav = $('.inner-nav-menu');

  $('.inner-hamburger, .inner-nav-close').click(function(){
    $('body').toggleClass('preventScrolling');
    innerHamburger.hasClass("open") ? (innerHamburger.removeClass("open"),
    innerNav.toggleClass("active")) : (innerHamburger.addClass("open"),
    innerNav.toggleClass("active"))
  })

  $(".inner-nav-menu li.-hasSubMenu .services-dropdown").on("click", function(t) {
    t.preventDefault(),
    $(this).parent().parent().hasClass("isOpen") ? $(this).parent().parent().removeClass("isOpen") : ($(".inner-nav-menu li.-hasSubMenu").removeClass("isOpen"),
    $(this).parent().parent().addClass("isOpen")),
    $(".inner-nav-menu li.-hasSubMenu").each(function(t) {
        $(".inner-nav-menu li.-hasSubMenu").eq(t).hasClass("isOpen") ? $(".inner-nav-menu li.-hasSubMenu").eq(t).find(".services-subnav").slideToggle() : $(".inner-nav-menu li.-hasSubMenu .services-subnav").eq(t).slideUp()
    })
  });

  $('.modal').hide();
  $('.contacts-main-button').click(function() {
      $('body').css('overflow', 'hidden');
      $('.modal').show();
  });
  $('.js-close-modal').click(function() {
      $('.modal').hide();
      $('body').css('overflow', 'visible');
  });





  // let modal = {
  //   closeButton: $('.js-close-modal'),
  //   closeOverlay: $('.modal'),

  //   init: function () {
  //       this.events();
  //   },
  //   openModal: function (id) {
  //       let modalWindow = $(id);
  //       modalWindow.fadeIn();
  //       modalWindow.find('.modal-content').removeClass('animate-away').addClass('animate-in');
  //       $('html,body').addClass('js-modal');
  //       $('html,body').off('scroll mousewheel touchmove');
  //   },

  //   closeModal: function (id) {
  //       let modalWindow = $(id);
  //       modalWindow.find('.modal-content').removeClass('animate-in').addClass('animate-away');
  //       modalWindow.fadeOut();
  //       $('html,body').removeClass('js-modal');
  //       $('html,body').on('scroll mousewheel touchmove');
  //   },
  //   events: function () {

  //     $(document).on('click', '.modalTrigger', function (e) {
  //         e.preventDefault();
  //         let self = $(this),
  //         target = self.attr('data-modal');
  //         modal.openModal(target);
  //     });

  //     $(document).on('click', '.modal', function (event) {
  //         let self = '#' + $(this).attr('id');
  //         if (event.target.className == 'modal-body') {
  //             modal.closeModal(self);
  //         }
  //     });

  //     $(document).on('click', '.js-close-modal', function () {
  //         let self = '#' + $(this).closest('.modal').attr('id');
  //         modal.closeModal(self);
  //     });

  //   }
  // }
  // jQuery(function () {
  //   frontend.init();
  //   slider.init();
  //   modal.init();
  // });

}); 