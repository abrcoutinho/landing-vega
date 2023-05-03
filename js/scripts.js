// Vega Checkout

// Header on scroll event
function expandNavbar(e) {
  const navbar = document.getElementById("navbar");
  const scrolledDown = document.body.scrollTop > 40 || document.documentElement.scrollTop > 40;

  if (scrolledDown) {
    navbar.classList.add("scrolled");
  }

  if(!scrolledDown) {
    navbar.classList.remove("scrolled");
  }
}
window.addEventListener('scroll', expandNavbar);


// Show/hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-220px";
  }
  prevScrollpos = currentScrollPos;
}


// ! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},i=function(t){return parseInt(e.getComputedStyle(t).height,10)},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},l=function(e){return e?i(e)+e.offsetTop:0},s=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(i,f){var m,h,g,w,p,v,y,b={};b.cancelScroll=function(){cancelAnimationFrame(y)},b.animateScroll=function(t,i,a){var d=o(m||n,a||{}),f="[object Number]"===Object.prototype.toString.call(t),h=f||!t.tagName?null:t;if(f||h){var g=e.pageYOffset;d.header&&!w&&(w=document.querySelector(d.header)),p||(p=l(w));var v,y,A,E=f?t:c(h,p,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),S=E-g,I=u(),q=0,F=function(n,o){var a=e.pageYOffset;if(n==o||a==o||(g<o&&e.innerHeight+a)>=I)return b.cancelScroll(),s(t,o,f),d.after(t,i),v=null,!0},O=function(t){v||(v=t),q+=t-v,y=q/parseInt(d.speed,10),y=y>1?1:y,A=g+S*r(d,y),e.scrollTo(0,Math.floor(A)),F(A,E)||(e.requestAnimationFrame(O),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,i),b.cancelScroll(),e.requestAnimationFrame(O)}};var A=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),b.animateScroll(h,g),h=null,g=null)},E=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(i))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=a(decodeURIComponent(g.hash))}catch(e){n=a(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?A():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),A()))}},S=function(e){v||(v=setTimeout((function(){v=null,p=l(w)}),66))};return b.destroy=function(){m&&(document.removeEventListener("click",E,!1),e.removeEventListener("resize",S,!1),b.cancelScroll(),m=null,h=null,g=null,w=null,p=null,v=null,y=null)},b.init=function(i){t&&(b.destroy(),m=o(n,i||{}),w=m.header?document.querySelector(m.header):null,p=l(w),document.addEventListener("click",E,!1),e.addEventListener("hashchange",A,!1),w&&e.addEventListener("resize",S,!1))},b.init(f),b}}));

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  easing: 'easeInOutCubic',
});


// ButterJS scroll momentum
butter.init({
  wrapperId: 'butter',
  wrapperDamper: 0.03,//0.08 default
  cancelOnTouch: true
});































// Show elements on scroll
const animateHTML = function() {
  let elems, windowHeight;
  const init = function() {
    elems = document.getElementsByClassName('slide-in');
    windowHeight = window.innerHeight
    _addEventHandlers();
  }
  const _addEventHandlers = function() {
    window.addEventListener('scroll', _checkPosition);
    window.addEventListener('resize', init);
  }
  const _checkPosition = function() {
    for (let i = 0; i < elems.length; i++) {
      const posFromTop = elems[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('slide-in', 'active');
      }
    }
  }
  return {
    init: init
  }
}
animateHTML().init()





// Contact window
// const contactWindow = document.querySelector('#contact-form');
// const contactForm = document.querySelector('#contact-form form');
// const btContactFooter = document.querySelector('#footer article:first-of-type button');
// const btCloseContact = document.querySelector('#contact-form > button');

// const btPlanLite = document.querySelector('#bt-plan-lite');
// const btPlanEnterprise = document.querySelector('#bt-plan-enterprise');

// btContactFooter.addEventListener('click', function() {
//   contactWindow.classList.add('visible');
// });

// if (btPlanLite) {
//   btPlanLite.addEventListener('click', function() {
//     contactWindow.classList.add('visible');
//   });
// }
// if (btPlanEnterprise) {
//   btPlanEnterprise.addEventListener('click', function() {
//     contactWindow.classList.add('visible');
//   });
// }

// btCloseContact.addEventListener('click', function() {
//   contactWindow.classList.remove('visible');
// });


// Contact form feedback
// msgConfirmation = document.querySelector('#contact-form aside')
// const btMsg = document.querySelector('#contact-form aside button');

// btMsg.addEventListener('click', function() {
//   msgConfirmation.classList.remove('show');
//   contactWindow.classList.remove('visible');
// });





// jQuery scripts
$(document).ready(function(){

  // Newsletter feedback
  // $("#contact-form form").on("submit", function(event) {
  //   event.preventDefault();
 
  //   var form = $(this);
  //   var url = form.attr('action');
  //   var data = form.serializeArray();

  //   var dataObject = {};
  //   for (var i = 0; i < data.length; i++){
  //     dataObject[data[i]['name']] = data[i]['value'];
  //   }

  //   $.ajax({
  //     url: url,
  //     data: dataObject,
  //     method: "POST",
  //   }).fail(function(response) {
  //     if (response.status === 0) {
  //       $('#contact-form aside').addClass('show');
  //       $('#contact-form').animate({scrollTop: 0}, 'slow');
  //       $(".txtarea").val('');
  //     } else {
  //       alert("Something went wrong. Please try again later.");
  //     }
  //   });
  // });



  $(".newsletter form").on("submit", function(event) {
    event.preventDefault();

    alert("E-mail recebido com sucesso");

  });




  // Show/hide mobile menu
  $('.vega > .header .menu-mobile-button').click(function() {
    $('.menu-mobile').addClass('active');
  });
  $('.menu-mobile .close').click(function() {
    $('.menu-mobile').removeClass('active');
  });
  $('.menu-mobile .menu a').click(function() {
    $('.menu-mobile').removeClass('active');
  });


  // Tab plans
  $('.price .tabs .bt-anual').click(function() {
    $(this).addClass('active');
    $('.price .tabs .bt-mensal').removeClass('active');
    $('.plans .mensal').removeClass('active');
    $('.plans .anual').addClass('active');
  });

  $('.price .tabs .bt-mensal').click(function() {
    $(this).addClass('active');
    $('.price .tabs .bt-anual').removeClass('active');
    $('.plans .anual').removeClass('active');
    $('.plans .mensal').addClass('active');
  });


  // Carousels
  $('.possibilities .cards').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: "unslick"
      }
    ]
  });

  $('.sales-recovery .grid').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: "unslick"
      }
    ]
  });

  $('.price .cards-container').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: "unslick"
      }
    ]
  });

  $('.integrations .cards-container').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    // mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          infinite: false,
          autoplay: false,
          draggable: true,
          speed: 200,
          swipeToSlide: true,
          waitForAnimate: false,
          pauseOnHover: true,
          pauseOnFocus: true
        }
      }
    ]
  });


});