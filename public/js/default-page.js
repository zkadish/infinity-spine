!function(n){var c={};function I(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,I),t.l=!0,t.exports}I.m=n,I.c=c,I.d=function(n,c,e){I.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:e})},I.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},I.t=function(n,c){if(1&c&&(n=I(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(I.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var t in n)I.d(e,t,function(c){return n[c]}.bind(null,t));return e},I.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return I.d(c,"a",c),c},I.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},I.p="",I(I.s=26)}({26:function(module,exports){eval("console.log('Default Page loaded!');\nvar hash = window.location.hash.split('?')[0];\nvar title = hash.replace('#', '').split('-').join(' ');\nvar page = window.location.hash.split('?')[1].split('=')[1];\nvar h2 = document.querySelector('.default-page .call-to-action__title');\nh2.innerHTML = title;\nvar pageCopy = document.querySelector('.default-page .page__copy');\npageCopy.innerHTML = '';\nvar payPalBtns = \"<div id=\\\"paypal-button-container\\\"></div>\\n<script src=\\\"https://www.paypal.com/sdk/js?client-id=AUDV8H40Tek4B5fjdvmKObyYRD_pdGVmP-3ZQ3Eg5C2chOVfz6Bkh5KEGont_y7bH2FdpKkL9_DTWwRz&amp;currency=USD\\\" data-sdk-integration-source=\\\"button-factory\\\"><\/script>\\n<script>\\n    paypal.Buttons({\\n        style: {\\n            shape: 'pill',\\n            color: 'blue',\\n            layout: 'vertical',\\n            label: 'paypal',\\n            \\n        },\\n        createOrder: function(data, actions) {\\n            return actions.order.create({\\n                purchase_units: [{\\n                    amount: {\\n                        value: '2000'\\n                    }\\n                }]\\n            });\\n        },\\n        onApprove: function(data, actions) {\\n            return actions.order.capture().then(function(details) {\\n                alert('Transaction completed by ' + details.payer.name.given_name + '!');\\n            });\\n        }\\n    }).render('#paypal-button-container');\\n<\/script>\";\nfetch(\"http://wp.infinityspine.com/wp-json/wp/v2/pages/\".concat(page)).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  pageCopy.innerHTML = res.content.rendered;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzPzMzYzQiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0IiwidGl0bGUiLCJyZXBsYWNlIiwiam9pbiIsInBhZ2UiLCJoMiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInBhZ2VDb3B5IiwicGF5UGFsQnRucyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsImNvbnRlbnQiLCJyZW5kZXJlZCJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBRUEsSUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLElBQWhCLENBQXFCRyxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFiO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNLLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLEVBQXNCRixLQUF0QixDQUE0QixHQUE1QixFQUFpQ0csSUFBakMsQ0FBc0MsR0FBdEMsQ0FBZDtBQUNBLElBQU1DLElBQUksR0FBR04sTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUFoQixDQUFxQkcsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsRUFBbUNBLEtBQW5DLENBQXlDLEdBQXpDLEVBQThDLENBQTlDLENBQWI7QUFFQSxJQUFNSyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQ0FBdkIsQ0FBWDtBQUNBRixFQUFFLENBQUNHLFNBQUgsR0FBZVAsS0FBZjtBQUNBLElBQU1RLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFqQjtBQUNBRSxRQUFRLENBQUNELFNBQVQsR0FBcUIsRUFBckI7QUFFQSxJQUFNRSxVQUFVLG8vQkFBaEI7QUE0QkFDLEtBQUssMkRBQW9EUCxJQUFwRCxFQUFMLENBQ0dRLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxDQURoQixFQUVHRixJQUZILENBRVEsVUFBQ0csR0FBRCxFQUFTO0FBQ2JOLFVBQVEsQ0FBQ0QsU0FBVCxHQUFxQk8sR0FBRyxDQUFDQyxPQUFKLENBQVlDLFFBQWpDO0FBQ0QsQ0FKSCIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdEZWZhdWx0IFBhZ2UgbG9hZGVkIScpO1xuXG5jb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVswXTtcbmNvbnN0IHRpdGxlID0gaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCctJykuam9pbignICcpO1xuY29uc3QgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0uc3BsaXQoJz0nKVsxXTtcblxuY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1wYWdlIC5jYWxsLXRvLWFjdGlvbl9fdGl0bGUnKTtcbmgyLmlubmVySFRNTCA9IHRpdGxlO1xuY29uc3QgcGFnZUNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1wYWdlIC5wYWdlX19jb3B5Jyk7XG5wYWdlQ29weS5pbm5lckhUTUwgPSAnJztcblxuY29uc3QgcGF5UGFsQnRucyA9IGA8ZGl2IGlkPVwicGF5cGFsLWJ1dHRvbi1jb250YWluZXJcIj48L2Rpdj5cbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cucGF5cGFsLmNvbS9zZGsvanM/Y2xpZW50LWlkPUFVRFY4SDQwVGVrNEI1Zmpkdm1LT2J5WVJEX3BkR1ZtUC0zWlEzRWc1QzJjaE9WZno2QmtoNUtFR29udF95N2JIMkZkcEtrTDlfRFRXd1J6JmFtcDtjdXJyZW5jeT1VU0RcIiBkYXRhLXNkay1pbnRlZ3JhdGlvbi1zb3VyY2U9XCJidXR0b24tZmFjdG9yeVwiPjwvc2NyaXB0PlxuPHNjcmlwdD5cbiAgICBwYXlwYWwuQnV0dG9ucyh7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBzaGFwZTogJ3BpbGwnLFxuICAgICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgIGxheW91dDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGxhYmVsOiAncGF5cGFsJyxcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVPcmRlcjogZnVuY3Rpb24oZGF0YSwgYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXBwcm92ZTogZnVuY3Rpb24oZGF0YSwgYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY2FwdHVyZSgpLnRoZW4oZnVuY3Rpb24oZGV0YWlscykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdUcmFuc2FjdGlvbiBjb21wbGV0ZWQgYnkgJyArIGRldGFpbHMucGF5ZXIubmFtZS5naXZlbl9uYW1lICsgJyEnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSkucmVuZGVyKCcjcGF5cGFsLWJ1dHRvbi1jb250YWluZXInKTtcbjwvc2NyaXB0PmBcblxuZmV0Y2goYGh0dHA6Ly93cC5pbmZpbml0eXNwaW5lLmNvbS93cC1qc29uL3dwL3YyL3BhZ2VzLyR7cGFnZX1gKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICBwYWdlQ29weS5pbm5lckhUTUwgPSByZXMuY29udGVudC5yZW5kZXJlZDtcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n")}});