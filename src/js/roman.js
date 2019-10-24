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

  // $(".inner-nav-menu li.-hasSubMenu").on("click", function(t) {
  //   t.preventDefault(),
  //   $(this).parent().parent().hasClass("isOpen") ? $(this).parent().parent().removeClass("isOpen") : ($(".inner-nav-menu li.-hasSubMenu").removeClass("isOpen"),
  //   $(this).parent().parent().addClass("isOpen")),
  //   $(".inner-nav-menu li.-hasSubMenu").each(function(t) {
  //       $(".inner-nav-menu li.-hasSubMenu").eq(t).hasClass("isOpen") ? $(".inner-nav-menu li.-hasSubMenu").eq(t).find(".services-subnav").slideToggle() : $(".inner-nav-menu li.-hasSubMenu").eq(t).slideUp()
  //   })
  // });


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    $('.date-day').val(dd);
    $('.reserve-year').val(yyyy);
    $('.reserve-month').val(mm);
    

    $(".quantity-arrow-plus").click(function(e) {
      e.preventDefault();
      updateValue(this, 1);
    });
    $(".quantity-arrow-minus").click(function(e) {
      e.preventDefault();
        updateValue(this, -1);
    });

    function updateValue(obj, delta) {
        let item = $(obj).parent().find("input");
        let newValue = parseInt(item.val(), 10) + delta;
        if (item.attr('max') >= newValue) {
          item.val(Math.max(newValue, 0));
        }
    }

    $(".reserve-city select, .reserve-specialist select").click(function () {
      $(this).css('color', '#333');
    }); 

    $('.add-service').on('click', function(){
      let inputProcedure = $('.reserve-procedure-field');
      let inputPrice = $('.input-price-field');
      let currRow = $(this).closest('tr');
      let procedure = currRow.find('td:eq(1)').text();
      let price = currRow.find('td:eq(2)').text();
      inputProcedure.attr('value', procedure);
      inputProcedure.attr('title', procedure);
      inputPrice.attr('value', price);
    })


    $(document.body).on("click", ".image-arrow", function(e) {
      e.preventDefault();
      if (
        $(this)
          .parent()
          .next("ul")
          .hasClass("services-hide")
      ) {
        $(this)
          .parent()
          .next("ul")
          .removeClass("services-hide");
        $parr = $(this).parent();
        $(this).remove();
        $($parr).append("<img src='https://www.kusmirchuk.top/wp-content/themes/mediostar/src/img/menu-arrow-white.svg' class='image-arrow'></img>");
      } else {
        $(this)
          .parent()
          .next("ul")
          .addClass("services-hide");
        $parr = $(this).parent();
        $(this).remove();
        $($parr).append("<img src='https://www.kusmirchuk.top/wp-content/themes/mediostar/src/img/menu-arrow.svg' class='image-arrow'></img>");
      }
    });

    $(document).ready(function() {
      $("li.cat-item.inner-nav-menu-item.hasSubMenu>a ").append("<img src='https://www.kusmirchuk.top/wp-content/themes/mediostar/src/img/menu-arrow.svg' class='image-arrow'></img>");

      $(".cat-item-116").each(function() {
        $(this)
          .parents("ul")
          .removeClass("services-hide");

        $(this)
          .parents("ul")
          .prev("a")
          .children()
          .hide();
        $(this)
          .parents("ul")
          .prev("a")
          .append("<img src='https://www.kusmirchuk.top/wp-content/themes/mediostar/src/img/menu-arrow-white.svg' class='image-arrow'></img>");
      });
    });

    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('.imagePreview').css('background-image', 'url('+e.target.result +')');
              $('.imagePreview').hide();
              $('.imagePreview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]);
      }
    }
    $(".form-file").change(function() {
        readURL(this);
    });
    // function readURL(input) {
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    //     reader.onload = function(e) {
    //       $('.form-file-wrapper').append('<img src="" class="form-file-wrapper" alt="">')
    //       $('.form-file-image').attr('src', e.target.result);
    //     }
    //     reader.readAsDataURL(input.files[0]);
    //   }
    //  }
    //  $(".form-file").change(function() {
    //   readURL(this);
    //  });



    // if ($('.modal-online-reserve').hasClass('active')) {
    //   $('.online-registration').addClass('online-registration-active');
    // } else {
    //   null
    // }

  // $('.modal').hide();
  // $('.contacts-message-button').click(function() {
  //     $('body').css('overflow', 'hidden');
  //     $('.modal').show();
  // });
  // $('.js-close-modal').click(function() {
  //     $('.modal').hide();
  //     $('body').css('overflow', 'visible');
  // });
}); 