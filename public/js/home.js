!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}({1:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o});var r=["about","treatments","testimonials","blog","forms","contact"],i="uxte1J82H2vgWAbiXjypx3VRQYUQFwvYoHsy9HQWbYlSE4USBY",o="Gx4RiWADI875OX4K4uiWJiVqmbm5cpGf8UM9DT6WYRBQB5PJOK"},24:function(t,e,n){"use strict";n.r(e);var r=n(3),i=r.b.slice(0,4),o=document.querySelectorAll(".treatments__btn"),c=document.querySelector(".testimonials__btn button"),a=document.querySelectorAll(".articles-preview__btn"),u=document.querySelectorAll(".articles-preview-image img"),s=document.querySelectorAll(".articles-preview__post h2"),l=document.querySelectorAll(".articles-preview__excerpt");fetch("http://infinityspine.com/wp-json/wp/v2/posts?per_page=3").then(function(t){return t.json()}).then(function(t){var e=t.map(function(t){return t.featured_media}),n=t.map(function(t){return t.title.rendered}),r=t.map(function(t){return t.excerpt.rendered});s.forEach(function(t,e){var r=t;n[e]&&(r.innerHTML=n[e])}),l.forEach(function(t,e){var n=t;if(r[e]){var i=r[e].indexOf("</p>"),o="".concat(r[e].slice(0,i),"</p>");n.innerHTML=o}}),Promise.all(e.map(function(t){return fetch("http://infinityspine.com/wp-json/wp/v2/media/".concat(t)).then(function(t){return t.json()}).then(function(t){return t.media_details.sizes.medium})})).then(function(t){u.forEach(function(e,n){if(t[n])return e.setAttribute("src",t[n].source_url)})})}),o.forEach(function(t,e){t.addEventListener("click",function(){window.history.pushState(null,null,i[e]),Object(r.a)()})}),a.forEach(function(t,e){t.addEventListener("click",function(t){window.history.pushState(null,null,"#dr-thoma-articles"),Object(r.a)(t,e)})}),c.addEventListener("click",function(){window.history.pushState(null,null,"#more-testimonials"),Object(r.a)()});var d=document.querySelector("#splash-01");function m(){window.matchMedia("(min-width: 1920px)").matches&&d.setAttribute("src","img/splash-01.png"),window.matchMedia("(max-width: 1919px) and (min-width: 1600px)").matches&&d.setAttribute("src","img/splash-01.png"),window.matchMedia("(max-width: 1599px) and (min-width: 1440px)").matches&&d.setAttribute("src","img/splash-01.png"),window.matchMedia("(max-width: 1439px) and (min-width: 1280px)").matches&&d.setAttribute("src","img/splash-01.png"),window.matchMedia("(max-width: 1279px) and (min-width: 1024px)").matches&&d.setAttribute("src","img/splash-01.png"),window.matchMedia("(max-width: 1023px) and (min-width: 864px)").matches&&d.setAttribute("src","img/splash-01.png"),window.matchMedia("(max-width: 863px) and (min-width: 480px)").matches&&d.setAttribute("src","img/splash-01-pho480.png"),window.matchMedia("(max-width: 479px) and (min-width: 0px)").matches&&d.setAttribute("src","img/splash-01-pho480.png")}m(),window.onresize=function(){m()}},3:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"a",function(){return f});var r=n(1);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=window.location,c=o.origin,a=o.pathname,u=document.querySelector("body"),s=document.querySelector(".container"),l="/";"/infinity-spine/public/"===a&&(l="/infinity-spine/public/"),"/new/"===a&&(l="/new/");var d=["#nucca-chiropractic","#sports-physiotherapy","#functional-medicine","#red-near-infrared-therapy","#mission-vision","#about-dr-thoma","#corrective-exercises","#performance-exercise","#customized-nutrition","#welcome","#dr-thoma-articles","#new-patient-forms","#faqs","#more-testimonials","#contact","#directions","#home"],m=window.location.hash;function p(t){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.innerHTML='\n    var review_token = "'.concat(t,"\"; \n    var review_target = 'review-container';\n  ");var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src","https://reviewsonmywebsite.com/js/embed.js?v=7");var r=document.createElement("div");return r.id="review-container",[e,n,r]}function h(t,e,n){fetch("".concat(c).concat(l,"pages/").concat(t,".html")).then(function(t){return t.text()}).then(function(e){var n=document.querySelectorAll('[src="js/'.concat(m.replace("#",""),'.js"]'));n&&n.forEach(function(t){u.removeChild(t)}),m=t,s.innerHTML=e}).then(function(){var t=document.createElement("script");if(t.setAttribute("id",m),"home"===m||""===m){var i=document.querySelector(".testimonials .mdc-layout-grid__cell");t.setAttribute("src","js/home.js"),u.appendChild(t),p(r.b).forEach(function(t){return i.appendChild(t)}),e||window.history.replaceState({},"","#home")}if("contact"===m&&(t.setAttribute("src","js/contact.js"),u.appendChild(t),e||window.history.replaceState({},"","#contact")),"dr-thoma-articles"===m&&(t.setAttribute("src","js/dr-thoma-articles.js"),u.appendChild(t),e||window.history.replaceState({},"","#dr-thoma-articles?article=".concat(n))),"more-testimonials"===m){var o=document.querySelector(".testimonials .mdc-layout-grid__cell");p(r.c).forEach(function(t){return o.appendChild(t)})}window.scroll(0,0),document.location=window.location.hash}).catch(function(t){console.error("Error:",t)})}function f(t,e){t&&t.preventDefault();var n=window.location.hash.split("?")[0];if(a===l&&""===n&&(n="#home"),d.includes(n)){h(n.replace(/#/g,"").split("?")[0],"",e)}else{var r=i(document.querySelectorAll("[data-route]")).map(function(t){return t.dataset.route.replace("#","")}),o=i(document.querySelectorAll("[id]")).map(function(t){return t.id});[].concat(i(o),i(r)).some(function(t){return t===n.replace("#","")})?h("home",window.location.hash.replace(/#/g,"")):window.location="pages/404.html"}}window.addEventListener("load",function(t){var e=null,n=window.location.hash;n.includes("article")&&(e=n.slice(n.indexOf("?article")+9)),f(t,e)},!1),window.addEventListener("hashchange",function(t){var e=null,n=window.location.hash;if(n.includes("article")&&(e=n.slice(n.indexOf("?article")+9)),d.includes(n.split("?")[0]))f(t,e);else{var r=document.querySelectorAll("[id]"),i=[];r.forEach(function(t){return i.push("#".concat(t.id))}),i.includes(n)||(i=[],f())}},!1),window.addEventListener("error",function(){console.log("error event")},!1)}});
//# sourceMappingURL=home.js.map