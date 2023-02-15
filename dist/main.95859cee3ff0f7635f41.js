/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  { id: 1, title: "Item 1", bg: "../public/summer_forest.jpg" },
  { id: 2, title: "Item 2", bg: "../public/rain_city.jpg" },
  { id: 3, title: "Item 3", bg: "../public/winter_forest.jpg" },
]);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./index.css");



const audioSound = {
  rain: "https://zvukitop.com/wp-content/uploads/2021/05/zvuk-silnogo-dojdya.mp3?_=2",
  summer:
    "https://zvukitop.com/wp-content/uploads/2020/10/zvuk-lesa-penie-ptichek.mp3?_=3",
  winter:
    "https://zvukitop.com/wp-content/uploads/2021/12/zamerzanie-vody-v-moroz.mp3?_=4",
};

const root = document.querySelector("#app");
const background = document.querySelector(".background-image");
const inputValue = document.querySelector(".range");
const audio = document.querySelector("#audio");
startStopAudio();

let audioTrack = "1";

function change(id) {
  background.className = `background-image img_${id}`;
  startStopAudio(id);
}

function changeValue(id) {
  const inputValue = document.querySelector(".range").value;
  audio.volu;
}

function startStopAudio(id) {
  // if (audio.classList.contains) audio.classList.toggle("play");

  audio.src = audioSound.winter;
  audio.play();
}

function renderItem(item) {
  const li = document.createElement("li");
  li.setAttribute("id", item.id);
  li.classList.add(`img_${item.id}`);
  li.addEventListener("click", () => change(`${item.id}`));
  root.append(li);
}

_data__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(renderItem);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NTg1OWNlZTNmZjBmNzYzNWY0MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtBQUNmLElBQUksMkRBQTJEO0FBQy9ELElBQUksdURBQXVEO0FBQzNELElBQUksMkRBQTJEO0FBQy9ELENBQUMsRUFBQzs7Ozs7OztVQ0pGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ0w7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpREFBaUQsR0FBRztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixRQUFRO0FBQ2xDLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUEscURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5jc3M/YmYzOSIsIndlYnBhY2s6Ly8vLi9kYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgeyBpZDogMSwgdGl0bGU6IFwiSXRlbSAxXCIsIGJnOiBcIi4uL3B1YmxpYy9zdW1tZXJfZm9yZXN0LmpwZ1wiIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiBcIkl0ZW0gMlwiLCBiZzogXCIuLi9wdWJsaWMvcmFpbl9jaXR5LmpwZ1wiIH0sXG4gIHsgaWQ6IDMsIHRpdGxlOiBcIkl0ZW0gM1wiLCBiZzogXCIuLi9wdWJsaWMvd2ludGVyX2ZvcmVzdC5qcGdcIiB9LFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgYXVkaW9Tb3VuZCA9IHtcbiAgcmFpbjogXCJodHRwczovL3p2dWtpdG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNS96dnVrLXNpbG5vZ28tZG9qZHlhLm1wMz9fPTJcIixcbiAgc3VtbWVyOlxuICAgIFwiaHR0cHM6Ly96dnVraXRvcC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTAvenZ1ay1sZXNhLXBlbmllLXB0aWNoZWsubXAzP189M1wiLFxuICB3aW50ZXI6XG4gICAgXCJodHRwczovL3p2dWtpdG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8xMi96YW1lcnphbmllLXZvZHktdi1tb3Jvei5tcDM/Xz00XCIsXG59O1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZ3JvdW5kLWltYWdlXCIpO1xuY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZ2VcIik7XG5jb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9cIik7XG5zdGFydFN0b3BBdWRpbygpO1xuXG5sZXQgYXVkaW9UcmFjayA9IFwiMVwiO1xuXG5mdW5jdGlvbiBjaGFuZ2UoaWQpIHtcbiAgYmFja2dyb3VuZC5jbGFzc05hbWUgPSBgYmFja2dyb3VuZC1pbWFnZSBpbWdfJHtpZH1gO1xuICBzdGFydFN0b3BBdWRpbyhpZCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVZhbHVlKGlkKSB7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmdlXCIpLnZhbHVlO1xuICBhdWRpby52b2x1O1xufVxuXG5mdW5jdGlvbiBzdGFydFN0b3BBdWRpbyhpZCkge1xuICAvLyBpZiAoYXVkaW8uY2xhc3NMaXN0LmNvbnRhaW5zKSBhdWRpby5jbGFzc0xpc3QudG9nZ2xlKFwicGxheVwiKTtcblxuICBhdWRpby5zcmMgPSBhdWRpb1NvdW5kLndpbnRlcjtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGl0ZW0uaWQpO1xuICBsaS5jbGFzc0xpc3QuYWRkKGBpbWdfJHtpdGVtLmlkfWApO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlKGAke2l0ZW0uaWR9YCkpO1xuICByb290LmFwcGVuZChsaSk7XG59XG5cbmRhdGEuZm9yRWFjaChyZW5kZXJJdGVtKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==