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


// ButterJS scroll momentum
butter.init({
  wrapperId: 'butter',
  wrapperDamper: 0.03,//0.08 default
  cancelOnTouch: true
});


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

  // Contact form feedback
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


  // Show/hide mobile menu
  // $('#header button').click(function() {
  //   $(this).toggleClass('opened');
  //   $('#header').toggleClass('mobile-menu');
  // });
  // $('#header a').click(function() {
  //   $('#header').removeClass('mobile-menu');
  // });

  // // Offices addresses
  // $('.listOffices button').click(function(){
  //   $('.listOffices button').removeClass('current');
  //   $(this).toggleClass('current');
  // })

  // $('.listOffices:first-child').click(function(){
  //   $('#offices iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m0!4v1512507132385!6m8!1m7!1sV1pU2XNU46JTHlD9mCn1uA!2m2!1d-23.59491415192863!2d-46.68608913048044!3f42.65132591942757!4f11.038511780791282!5f0.7820865974627469');
  //   $('#offices h3').text('Brazil');
  //   $('#offices h4').text('Vila Olímpia, São Paulo');
  // })

  // $('.listOffices:nth-child(2)').click(function(){
  //   $('#offices iframe').attr('src', 'https://www.google.com/maps/embed?pb=!4v1527023413395!6m8!1m7!1sCAoSLEFGMVFpcE5NM3ZFR0FVbGxUUmMwT29VRExxVWl4czl1WHdxR29oa1FTZGVu!2m2!1d-22.84736464626735!2d-47.08421119213443!3f289.98239399462346!4f14.713586766620438!5f0.7820865974627469');
  //   $('#offices h3').text('Brazil');
  //   $('#offices h4').text('Campinas, São Paulo');
  // })

  // $('.listOffices:nth-child(3)').click(function(){
  //   $('#offices iframe').attr('src', 'https://www.google.com/maps/embed?pb=!4v1527019249613!6m8!1m7!1sSVI4NRLSAF-5QCVIqBKWpg!2m2!1d-34.58563167918702!2d-58.44304933808473!3f356.56615523013295!4f12.027294852580042!5f1.1924812503605782');
  //   $('#offices h3').text('Argentina');
  //   $('#offices h4').text('Palermo, Buenos Aires');
  // })

  // $('.listOffices:nth-child(4)').click(function(){
  //   $('#offices iframe').attr('src', 'https://www.google.com/maps/embed?pb=!4v1527019646833!6m8!1m7!1sxH_EwWkSfXhAGUkrsUj-nQ!2m2!1d47.46244434104601!2d-0.5621466676327307!3f116.84316015352265!4f16.426809335582504!5f0.7820865974627469');
  //   $('#offices h3').text('France');
  //   $('#offices h4').text('La Fayette-Eblé, Angers');
  // })

  // $('.listOffices:nth-child(5)').click(function(){
  //   $('#offices iframe').attr('src', 'https://www.google.com/maps/embed?pb=!4v1527019927760!6m8!1m7!1skNtl49XhHm6cdxwMd5Rp1w!2m2!1d-33.39749432766425!2d-70.57678961522807!3f34.03763652971414!4f3.8583698572061564!5f1.0892073800449036');
  //   $('#offices h3').text('Chile');
  //   $('#offices h4').text('Vitacura, Santiago');
  // })

  // $('.listOffices:nth-child(6)').click(function(){
  //   $('#offices iframe').attr('src', 'https://www.google.com/maps/embed?pb=!4v1527020231307!6m8!1m7!1sHktcvpBL-utNa-gIFgDq2Q!2m2!1d19.3978403030455!2d-99.17126889218359!3f327.81911794733395!4f28.624460737817316!5f0.5056434394113815');
  //   $('#offices h3').text('México');
  //   $('#offices h4').text('Napoles, Ciudad de México C.P.');
  // })


  // Cover parallax
  // $('#cover').each(function(){
  //   const $obj = $(this);

  //   $(window).scroll(function() {
  //     const yPos = -($(window).scrollTop() / $obj.data('speed')); 
  //     const bgpos = '50% '+ yPos + 'px';
  //     $obj.css('background-position', bgpos );
  //   });
  // });


  // Concerns carousel
  // $('#concerns aside').slick({
  //   arrows: false,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   cssEase: 'linear'
  // });


  // APIs carousel
  // $('#apis > div').slick({
  //   arrows: false,
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   responsive: [
  //     {
  //       breakpoint: 3000,
  //       settings: "unslick"
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         //slidesToScroll: 1,
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px'
  //       }
  //     }
  //   ]
  // });


  // Plans carousel
  // $('#plans .cards').slick({
  //   arrows: false,
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   responsive: [
  //     {
  //       breakpoint: 3000,
  //       settings: "unslick"
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         //slidesToScroll: 1,
  //         arrows: false,
  //         centerMode: true,
  //         dots: false,
  //         centerPadding: '5%'
  //       }
  //     }
  //   ]
  // });


  // Customers carousel
  // $('#customers > div:first-of-type').slick({
  //   arrows: false,
  //   dots: false,
  //   infinite: true,
  //   speed: 600,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 3000,
  //       settings: {
  //         slidesToShow: 6
  //       }
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         autoplaySpeed: 2000
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         autoplaySpeed: 1000
  //       }
  //     }
  //   ]
  // });


  /* Sticky-kit v1.1.2 | http://leafo.net */
  (function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
  if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
  u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
  h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
  a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
  y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

  $(".sticky_column").stick_in_parent();


});