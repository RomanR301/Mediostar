!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-close-modal');
       closeCallback = document.querySelector('.callback-close');
       onlineReg    = document.querySelector('.online-registration')
       bodyOverflow = document.querySelector('body');
   modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         overlay.classList.add('active');
         bodyOverflow.classList.add('modal-open')
         onlineReg.classList.add('online-registration-active');
      }); // end click
   }); // end foreach
   closeButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');
         parentModal.classList.remove('active');
         overlay.classList.remove('active');
         onlineReg.classList.remove('online-registration-active');
         bodyOverflow.classList.remove('modal-open');
      });
   }); // end foreach
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);
    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready


// addition to callback modal inside online register modal
$('.online-reserve-call').click(function(){
    $('.modal-online-reserve').removeClass('active');
    $('.online-reserve-callback').addClass('active');
});

$('.online-callback-back').click(function(){
    $('.online-reserve-callback').removeClass('active');
    $('.online-reserve-main').addClass('active');
})

$('.callback-close').click(function(){
    $('.modal').removeClass('active');
    $('.overlay').removeClass('active');
    $('body').removeClass('modal-open');
    $('.online-registration').removeClass('online-registration-active');
})

