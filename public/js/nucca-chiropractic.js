!function(n){var e={};function t(c){if(e[c])return e[c].exports;var Q=e[c]={i:c,l:!1,exports:{}};return n[c].call(Q.exports,Q,Q.exports,t),Q.l=!0,Q.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var Q in n)t.d(c,Q,function(e){return n[e]}.bind(null,Q));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=11)}({0:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return testimonialTags; });\n/**\n * @param {string} token\n * There are 2 tokens in the constants file\n * testimonialTags - builds the necessary html for the reviews\n * and testimonials on the home page and testimonials page\n */\nfunction testimonialTags(token) {\n  var scriptToken = document.createElement('script');\n  scriptToken.setAttribute('type', 'text/javascript');\n  scriptToken.innerHTML = \"\\n    var review_token = \\\"\".concat(token, \"\\\"; \\n    var review_target = 'review-container';\\n  \");\n  var scriptReview = document.createElement('script');\n  scriptReview.setAttribute('type', 'text/javascript');\n  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7');\n  var reviewContainer = document.createElement('div');\n  reviewContainer.id = 'review-container';\n  return [scriptToken, scriptReview, reviewContainer];\n}\n/**\n * @param [string] - a string of html tags\n * documentFrag takes a string and returns it as a node element fragment\n */\n\nvar documentFrag = function documentFrag(string) {\n  return document.createRange().createContextualFragment(string);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (documentFrag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvaHRtbC5qcz81ODExIl0sIm5hbWVzIjpbInRlc3RpbW9uaWFsVGFncyIsInRva2VuIiwic2NyaXB0VG9rZW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzY3JpcHRSZXZpZXciLCJyZXZpZXdDb250YWluZXIiLCJpZCIsImRvY3VtZW50RnJhZyIsInN0cmluZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7Ozs7QUFNTyxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUNyQyxNQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBRixhQUFXLENBQUNHLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsaUJBQWpDO0FBQ0FILGFBQVcsQ0FBQ0ksU0FBWix3Q0FDd0JMLEtBRHhCO0FBS0EsTUFBTU0sWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQUcsY0FBWSxDQUFDRixZQUFiLENBQTBCLE1BQTFCLEVBQWtDLGlCQUFsQztBQUNBRSxjQUFZLENBQUNGLFlBQWIsQ0FBMEIsS0FBMUIsRUFBaUMsZ0RBQWpDO0FBRUEsTUFBTUcsZUFBZSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBeEI7QUFDQUksaUJBQWUsQ0FBQ0MsRUFBaEIsR0FBcUIsa0JBQXJCO0FBRUEsU0FBTyxDQUFDUCxXQUFELEVBQWNLLFlBQWQsRUFBNEJDLGVBQTVCLENBQVA7QUFDRDtBQUVEOzs7OztBQUlBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQ7QUFBQSxTQUNuQlIsUUFBUSxDQUFDUyxXQUFULEdBQXVCQyx3QkFBdkIsQ0FBZ0RGLE1BQWhELENBRG1CO0FBQUEsQ0FBckI7O0FBSWVELHFFQUFmIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxuICogVGhlcmUgYXJlIDIgdG9rZW5zIGluIHRoZSBjb25zdGFudHMgZmlsZVxuICogdGVzdGltb25pYWxUYWdzIC0gYnVpbGRzIHRoZSBuZWNlc3NhcnkgaHRtbCBmb3IgdGhlIHJldmlld3NcbiAqIGFuZCB0ZXN0aW1vbmlhbHMgb24gdGhlIGhvbWUgcGFnZSBhbmQgdGVzdGltb25pYWxzIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RpbW9uaWFsVGFncyh0b2tlbikge1xuICBjb25zdCBzY3JpcHRUb2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHRUb2tlbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gIHNjcmlwdFRva2VuLmlubmVySFRNTCA9IChgXG4gICAgdmFyIHJldmlld190b2tlbiA9IFwiJHt0b2tlbn1cIjsgXG4gICAgdmFyIHJldmlld190YXJnZXQgPSAncmV2aWV3LWNvbnRhaW5lcic7XG4gIGApO1xuXG4gIGNvbnN0IHNjcmlwdFJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHRSZXZpZXcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xuICBzY3JpcHRSZXZpZXcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9yZXZpZXdzb25teXdlYnNpdGUuY29tL2pzL2VtYmVkLmpzP3Y9NycpO1xuXG4gIGNvbnN0IHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXZpZXdDb250YWluZXIuaWQgPSAncmV2aWV3LWNvbnRhaW5lcic7XG5cbiAgcmV0dXJuIFtzY3JpcHRUb2tlbiwgc2NyaXB0UmV2aWV3LCByZXZpZXdDb250YWluZXJdO1xufVxuXG4vKipcbiAqIEBwYXJhbSBbc3RyaW5nXSAtIGEgc3RyaW5nIG9mIGh0bWwgdGFnc1xuICogZG9jdW1lbnRGcmFnIHRha2VzIGEgc3RyaW5nIGFuZCByZXR1cm5zIGl0IGFzIGEgbm9kZSBlbGVtZW50IGZyYWdtZW50XG4gKi9cbmNvbnN0IGRvY3VtZW50RnJhZyA9IChzdHJpbmcpID0+IChcbiAgZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRGcmFnO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},1:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('var handleErrors = function handleErrors(response) {\n  if (!response.ok) {\n    throw Error(response.statusText);\n  }\n\n  return response;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (handleErrors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZmV0Y2guanM/MzZjNCJdLCJuYW1lcyI6WyJoYW5kbGVFcnJvcnMiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQWM7QUFDakMsTUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEIsVUFBTUMsS0FBSyxDQUFDRixRQUFRLENBQUNHLFVBQVYsQ0FBWDtBQUNEOztBQUNELFNBQU9ILFFBQVA7QUFDRCxDQUxEOztBQU9lRCxxRUFBZiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlRXJyb3JzID0gKHJlc3BvbnNlKSA9PiB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVFcnJvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},11:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n\n\nvar pageCopy = document.querySelector('.page-copy'); // NUCCA chiropractic\n\nfetch('http://wp.infinityspine.com/wp-json/wp/v2/pages/2556').then(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"]).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  var frag = Object(_utils_html__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])(res.content.rendered);\n  pageCopy.appendChild(frag);\n}).then(function () {\n  pageCopy.classList.add('fade-in');\n})[\"catch\"](function (err) {\n  console.error(err);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbnVjY2EtY2hpcm9wcmFjdGljLmpzPzUzZjUiXSwibmFtZXMiOlsicGFnZUNvcHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaCIsInRoZW4iLCJoYW5kbGVFcnJvcnMiLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJmcmFnIiwiZG9jdW1lbnRGcmFnIiwiY29udGVudCIsInJlbmRlcmVkIiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQixDLENBRUE7O0FBQ0FDLEtBQUssQ0FBQyxzREFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUUMsNERBRFIsRUFFR0QsSUFGSCxDQUVRLFVBQUNFLFFBQUQ7QUFBQSxTQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLENBRlIsRUFHR0gsSUFISCxDQUdRLFVBQUNJLEdBQUQsRUFBUztBQUNiLE1BQU1DLElBQUksR0FBR0MsbUVBQVksQ0FBQ0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLFFBQWIsQ0FBekI7QUFDQVosVUFBUSxDQUFDYSxXQUFULENBQXFCSixJQUFyQjtBQUNELENBTkgsRUFPR0wsSUFQSCxDQU9RLFlBQU07QUFDVkosVUFBUSxDQUFDYyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixTQUF2QjtBQUNELENBVEgsV0FVUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsU0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDRCxDQVpIIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhbmRsZUVycm9ycyBmcm9tICcuL3V0aWxzL2ZldGNoJztcbmltcG9ydCBkb2N1bWVudEZyYWcgZnJvbSAnLi91dGlscy9odG1sJztcblxuY29uc3QgcGFnZUNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb3B5Jyk7XG5cbi8vIE5VQ0NBIGNoaXJvcHJhY3RpY1xuZmV0Y2goJ2h0dHA6Ly93cC5pbmZpbml0eXNwaW5lLmNvbS93cC1qc29uL3dwL3YyL3BhZ2VzLzI1NTYnKVxuICAudGhlbihoYW5kbGVFcnJvcnMpXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgY29uc3QgZnJhZyA9IGRvY3VtZW50RnJhZyhyZXMuY29udGVudC5yZW5kZXJlZCk7XG4gICAgcGFnZUNvcHkuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gIH0pXG4gIC50aGVuKCgpID0+IHtcbiAgICBwYWdlQ29weS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n")}});