!function(Q){var F={};function B(U){if(F[U])return F[U].exports;var n=F[U]={i:U,l:!1,exports:{}};return Q[U].call(n.exports,n,n.exports,B),n.l=!0,n.exports}B.m=Q,B.c=F,B.d=function(Q,F,U){B.o(Q,F)||Object.defineProperty(Q,F,{enumerable:!0,get:U})},B.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},B.t=function(Q,F){if(1&F&&(Q=B(Q)),8&F)return Q;if(4&F&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var U=Object.create(null);if(B.r(U),Object.defineProperty(U,"default",{enumerable:!0,value:Q}),2&F&&"string"!=typeof Q)for(var n in Q)B.d(U,n,function(F){return Q[F]}.bind(null,n));return U},B.n=function(Q){var F=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return B.d(F,"a",F),F},B.o=function(Q,F){return Object.prototype.hasOwnProperty.call(Q,F)},B.p="",B(B.s=9)}({9:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/utils/script-tag-injection.js\nvar injectScripts = function injectScripts(scripts, parentNode) {\n  for (var i = 0; i < scripts.length; i += 1) {\n    if (scripts[i].innerHTML) {\n      parentNode.appendChild(scripts[i]);\n    }\n  }\n};\nvar filterScriptTags = function filterScriptTags(frag, callback) {\n  var scriptTags = frag.querySelectorAll('script');\n  var fragScriptTags = [];\n  var jsScriptTags = [];\n\n  for (var i = 0; i < scriptTags.length; i += 1) {\n    if (!scriptTags[i].innerHTML) {\n      fragScriptTags.push(scriptTags[i]);\n    }\n\n    if (scriptTags[i].innerHTML) {\n      jsScriptTags.push(scriptTags[i]); // mutate the original nodeList\n\n      scriptTags[i].parentNode.removeChild(scriptTags[i]);\n    }\n  }\n\n  if (fragScriptTags.length > 0) {\n    fragScriptTags[fragScriptTags.length - 1].onload = function () {\n      callback(jsScriptTags, 'scripts have loaded');\n      fragScriptTags[fragScriptTags.length - 1].onload = null;\n    };\n\n    return;\n  } // this shouldn't run unless there are no script\n  // tags being inserted withe the page content...\n\n\n  callback(jsScriptTags);\n};\n// CONCATENATED MODULE: ./src/js/default-page.js\n\nvar hash = window.location.hash.split('?')[0];\nvar title = hash.replace('#', '').split('-').join(' ');\nvar page = window.location.hash.split('?')[1].split('=')[1];\nvar h2 = document.querySelector('.default-page .call-to-action__title');\nh2.innerHTML = title;\nvar pageCopy = document.querySelector('.default-page .page__copy');\npageCopy.innerHTML = '';\nfetch(\"http://wp.infinityspine.com/wp-json/wp/v2/pages/\".concat(page)).then(function (response) {\n  if (!response.ok) {\n    throw new Error('Response failed!');\n  }\n\n  return response.json();\n}).then(function (json) {\n  pageCopy.innerHTML = '';\n  var rendered = json.content.rendered;\n  var frag = document.createRange().createContextualFragment(rendered);\n\n  var onload = function onload(scripts, message) {\n    // if there are scripts once the last one has loaded\n    console.log(message);\n    injectScripts(scripts, pageCopy);\n  }; // prepare page content\n\n\n  filterScriptTags(frag, onload); // add page content\n\n  pageCopy.appendChild(frag);\n})[\"catch\"](function (err) {\n  console.error(err);\n  debugger;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvc2NyaXB0LXRhZy1pbmplY3Rpb24uanM/NjA3MSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzPzMzYzQiXSwibmFtZXMiOlsiaW5qZWN0U2NyaXB0cyIsInNjcmlwdHMiLCJwYXJlbnROb2RlIiwiaSIsImxlbmd0aCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZmlsdGVyU2NyaXB0VGFncyIsImZyYWciLCJjYWxsYmFjayIsInNjcmlwdFRhZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZnJhZ1NjcmlwdFRhZ3MiLCJqc1NjcmlwdFRhZ3MiLCJwdXNoIiwicmVtb3ZlQ2hpbGQiLCJvbmxvYWQiLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJzcGxpdCIsInRpdGxlIiwicmVwbGFjZSIsImpvaW4iLCJwYWdlIiwiaDIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlQ29weSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJyZW5kZXJlZCIsImNvbnRlbnQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLEVBQXlCO0FBQ3BELE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsT0FBTyxDQUFDRyxNQUE1QixFQUFvQ0QsQ0FBQyxJQUFJLENBQXpDLEVBQTRDO0FBQzFDLFFBQUlGLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFQLENBQVdFLFNBQWYsRUFBMEI7QUFDeEJILGdCQUFVLENBQUNJLFdBQVgsQ0FBdUJMLE9BQU8sQ0FBQ0UsQ0FBRCxDQUE5QjtBQUNEO0FBQ0Y7QUFDRixDQU5NO0FB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QWdESCxRQUFoRCxDQUFiOztBQUVBLE1BQU1uQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDZixPQUFELEVBQVVzQyxPQUFWLEVBQXNCO0FBQ25DO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0F2QyxpQkFBYSxDQUFDQyxPQUFELEVBQVUyQixRQUFWLENBQWI7QUFDRCxHQUpELENBTGMsQ0FVZDs7O0FBQ0FyQixrQkFBZ0IsQ0FBQ0MsSUFBRCxFQUFPUSxNQUFQLENBQWhCLENBWGMsQ0FhZDs7QUFDQVksVUFBUSxDQUFDdEIsV0FBVCxDQUFxQkUsSUFBckI7QUFDRCxDQXRCSCxXQXVCUyxVQUFDa0MsR0FBRCxFQUFTO0FBQ2RGLFNBQU8sQ0FBQ0csS0FBUixDQUFjRCxHQUFkO0FBQ0E7QUFDRCxDQTFCSCIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluamVjdFNjcmlwdHMgPSAoc2NyaXB0cywgcGFyZW50Tm9kZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc2NyaXB0c1tpXS5pbm5lckhUTUwpIHtcbiAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc2NyaXB0c1tpXSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyU2NyaXB0VGFncyA9IChmcmFnLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBzY3JpcHRUYWdzID0gZnJhZy5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgY29uc3QgZnJhZ1NjcmlwdFRhZ3MgPSBbXTtcbiAgY29uc3QganNTY3JpcHRUYWdzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JpcHRUYWdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKCFzY3JpcHRUYWdzW2ldLmlubmVySFRNTCkge1xuICAgICAgZnJhZ1NjcmlwdFRhZ3MucHVzaChzY3JpcHRUYWdzW2ldKTtcbiAgICB9XG4gICAgaWYgKHNjcmlwdFRhZ3NbaV0uaW5uZXJIVE1MKSB7XG4gICAgICBqc1NjcmlwdFRhZ3MucHVzaChzY3JpcHRUYWdzW2ldKTtcbiAgICAgIC8vIG11dGF0ZSB0aGUgb3JpZ2luYWwgbm9kZUxpc3RcbiAgICAgIHNjcmlwdFRhZ3NbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHRUYWdzW2ldKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhZ1NjcmlwdFRhZ3MubGVuZ3RoID4gMCkge1xuICAgIGZyYWdTY3JpcHRUYWdzW2ZyYWdTY3JpcHRUYWdzLmxlbmd0aCAtIDFdLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNhbGxiYWNrKGpzU2NyaXB0VGFncywgJ3NjcmlwdHMgaGF2ZSBsb2FkZWQnKTtcbiAgICAgIGZyYWdTY3JpcHRUYWdzW2ZyYWdTY3JpcHRUYWdzLmxlbmd0aCAtIDFdLm9ubG9hZCA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0aGlzIHNob3VsZG4ndCBydW4gdW5sZXNzIHRoZXJlIGFyZSBubyBzY3JpcHRcbiAgLy8gdGFncyBiZWluZyBpbnNlcnRlZCB3aXRoZSB0aGUgcGFnZSBjb250ZW50Li4uXG4gIGNhbGxiYWNrKGpzU2NyaXB0VGFncyk7XG59O1xuIiwiaW1wb3J0IHsgZmlsdGVyU2NyaXB0VGFncywgaW5qZWN0U2NyaXB0cyB9IGZyb20gJy4vdXRpbHMvc2NyaXB0LXRhZy1pbmplY3Rpb24nO1xuXG5jb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVswXTtcbmNvbnN0IHRpdGxlID0gaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCctJykuam9pbignICcpO1xuY29uc3QgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0uc3BsaXQoJz0nKVsxXTtcblxuY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1wYWdlIC5jYWxsLXRvLWFjdGlvbl9fdGl0bGUnKTtcbmgyLmlubmVySFRNTCA9IHRpdGxlO1xuY29uc3QgcGFnZUNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1wYWdlIC5wYWdlX19jb3B5Jyk7XG5wYWdlQ29weS5pbm5lckhUTUwgPSAnJztcblxuZmV0Y2goYGh0dHA6Ly93cC5pbmZpbml0eXNwaW5lLmNvbS93cC1qc29uL3dwL3YyL3BhZ2VzLyR7cGFnZX1gKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3BvbnNlIGZhaWxlZCEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oKGpzb24pID0+IHtcbiAgICBwYWdlQ29weS5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCB7IHJlbmRlcmVkIH0gPSBqc29uLmNvbnRlbnQ7XG4gICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHJlbmRlcmVkKTtcblxuICAgIGNvbnN0IG9ubG9hZCA9IChzY3JpcHRzLCBtZXNzYWdlKSA9PiB7XG4gICAgICAvLyBpZiB0aGVyZSBhcmUgc2NyaXB0cyBvbmNlIHRoZSBsYXN0IG9uZSBoYXMgbG9hZGVkXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIGluamVjdFNjcmlwdHMoc2NyaXB0cywgcGFnZUNvcHkpO1xuICAgIH07XG4gICAgLy8gcHJlcGFyZSBwYWdlIGNvbnRlbnRcbiAgICBmaWx0ZXJTY3JpcHRUYWdzKGZyYWcsIG9ubG9hZCk7XG5cbiAgICAvLyBhZGQgcGFnZSBjb250ZW50XG4gICAgcGFnZUNvcHkuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIGRlYnVnZ2VyO1xuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n")}});