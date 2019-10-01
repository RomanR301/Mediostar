//   let servicesNavItem = $('.services-nav-item')
//   let servicesDropDown = $('.services-dropdown')


//   $('.services-dropdown').click(function(e){
//     e.preventDefault();
// var tmpel = $(this).next('.services-subnav');
// console.log(tmpel);
//     if (tmpel.children('ul:first').hasClass('-visible')) {
//       tmpel.children('ul:first').removeClass('-visible')
//     } else {
//       tmpel.children('ul:first').addClass('-visible')
//     }
//   });




// $("nav.services_nav li.has-child .show-more").on("click", function(t) {
//   t.preventDefault(),
//   $(this).parent().parent().hasClass("isOpen") ? $(this).parent().parent().removeClass("isOpen") : ($("nav.services_nav li").removeClass("isOpen"),
//   $(this).parent().parent().addClass("isOpen")),
//   $("nav.services_nav li.has-child").each(function(t) {
//       $("nav.services_nav li.has-child").eq(t).hasClass("isOpen") ? $("nav.services_nav li.has-child").eq(t).find(".inner-menu").slideToggle() : $("nav.services_nav li.has-child .inner-menu").eq(t).slideUp()
//   })
// }),

// (function(){
//   var a = document.querySelector('.prices-sidebar'), b = null, K = null, Z = 0, P = 150, N = 50;  // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
//   window.addEventListener('scroll', Ascroll, false);
//   function Ascroll() {
//     var Ra = a.getBoundingClientRect(),
//         R1bottom = document.querySelector('.prices-content').getBoundingClientRect().bottom;
//     if (Ra.bottom < R1bottom) {
//       if (b == null) {
//         var Sa = getComputedStyle(a, ''), s = '';
//         for (var i = 0; i < Sa.length; i++) {
//           if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//             s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
//           }
//         }
//         b = document.createElement('div');
//         b.className = "stop";
//         // b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//         b.style.cssText = s + ' box-sizing: border-box; width: 100%';
//         a.insertBefore(b, a.firstChild);
//         var l = a.childNodes.length;
//         for (var i = 1; i < l; i++) {
//           b.appendChild(a.childNodes[1]);
//         }
//       }
//       var Rb = b.getBoundingClientRect(),
//           Rh = Ra.top + Rb.height,
//           W = document.documentElement.clientHeight,
//           R1 = Math.round(Rh - R1bottom),
//           R2 = Math.round(Rh - W);
//       if (Rb.height > W) {
//         if (Ra.top < K) {  // скролл вниз
//           if (R2 + N > R1) {  // не дойти до низа
//             if (Rb.bottom - W + N <= 0) {  // подцепиться
//               b.className = 'sticky';
//               b.style.top = W - Rb.height - N + 'px';
//               Z = N + Ra.top + Rb.height - W;
//             } else {
//               b.className = 'stop';
//               b.style.top = - Z + 'px';
//             }
//           } else {
//             b.className = 'stop';
//             b.style.top = - R1 +'px';
//             Z = R1;
//           }
//         } else {  // скролл вверх
//           if (Ra.top - P < 0) {  // не дойти до верха
//             if (Rb.top - P >= 0) {  // подцепиться
//               b.className = 'sticky';
//               b.style.top = P + 'px';
//               Z = Ra.top - P;
//             } else {
//               b.className = 'stop';
//               b.style.top = - Z + 'px';
//             }
//           } else {
//             b.className = '';
//             b.style.top = '';
//             Z = 0;
//           }
//         }
//         K = Ra.top;
//       } else {
//         if ((Ra.top - P) <= 0) {
//           if ((Ra.top - P) <= R1) {
//             b.className = 'stop';
//             b.style.top = - R1 +'px';
//           } else {
//             b.className = 'sticky';
//             b.style.top = P + 'px';
//           }
//         } else {
//           b.className = '';
//           b.style.top = '';
//         }
//       }
//     }
//   }
//   })()