/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DataRetriever */ \"./src/modules/DataRetriever.js\");\n/* harmony import */ var _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ChallengeGrid */ \"./src/modules/ChallengeGrid.js\");\n\n\n\nconst container = document.querySelector('.challenges-list');\nconst retriever = new _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__.DataRetriever();\nconst grid = new _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__.ChallengeGrid(retriever, container);\n\ngrid.run()\n\n//# sourceURL=webpack://02-esc-website/./src/main.js?");

/***/ }),

/***/ "./src/modules/Challenge.js":
/*!**********************************!*\
  !*** ./src/modules/Challenge.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Challenge\": () => (/* binding */ Challenge)\n/* harmony export */ });\nclass Challenge {\n    constructor(data) {\n        this.title = data.title;\n        this.rating = data.rating;\n        this.image = data.image;\n        this.description = data.description;\n        this.minParticipants = data.minParticipants;\n        this.maxParticipants = data.maxParticipants;\n    }\n\n    render() {\n        // Create elements for challenge card\n        let challengesItem = document.createElement('li');\n        challengesItem.classList.add('challenges-item');\n        \n        let challengesPicture = document.createElement('img')\n        challengesPicture.classList.add('challenge-picture');\n        challengesPicture.src=this.image;\n\n        let challengeTitle = document.createElement('h3');\n        challengeTitle.classList.add('challenge-title');\n        challengeTitle.innerHTML = this.title;\n\n        let challengeMeta = document.createElement('div');\n        challengeMeta.classList.add('challenge-meta');\n\n        let challengeRating = document.createElement('ul');\n        challengeRating.classList.add('challenge-rating');\n\n        // Create elements for rating stars\n        for(let i = 0; i < Math.floor(this.rating); i++) {\n            let challengeRatingStar = document.createElement('li');\n            challengeRatingStar.classList.add('challenge-rating-star');\n            challengeRatingStar.classList.add('on');\n            challengeRating.appendChild(challengeRatingStar);\n    \n        };\n\n        for(let i = Math.floor(this.rating); i < 5; i++) {\n            let challengeRatingStar = document.createElement('li');\n            challengeRatingStar.classList.add('challenge-rating-star');\n            challengeRatingStar.classList.add('off');\n            challengeRating.appendChild(challengeRatingStar);\n        };\n\n        let challengeSize = document.createElement('small');\n        challengeSize.classList.add('challenge-size');\n        challengeSize.innerHTML = `${this.minParticipants}-${this.maxParticipants} participants`;\n\n        let challengeDescription = document.createElement('p');\n        challengeDescription.classList.add('challenge-description');\n        challengeDescription.innerHTML = this.description\n\n        let challengeCta = document.createElement('a');\n        challengeCta.classList.add('challenge-cta');\n        challengeCta.innerHTML = \"Book the room\";\n\n        // Render/append on site\n        challengesItem.appendChild(challengesPicture);\n        challengesItem.appendChild(challengeTitle);\n        challengesItem.appendChild(challengeMeta)\n        challengeMeta.appendChild(challengeRating);\n        challengeMeta.appendChild(challengeSize);\n        challengesItem.appendChild(challengeDescription);\n        challengesItem.appendChild(challengeCta);\n\n        return challengesItem;\n    }\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/Challenge.js?");

/***/ }),

/***/ "./src/modules/ChallengeGrid.js":
/*!**************************************!*\
  !*** ./src/modules/ChallengeGrid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengeGrid\": () => (/* binding */ ChallengeGrid)\n/* harmony export */ });\n/* harmony import */ var _Challenge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Challenge */ \"./src/modules/Challenge.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter */ \"./src/modules/Filter.js\");\n\n\n\nclass ChallengeGrid {\n    constructor(retriever, container) {\n        this.retriever = retriever;\n        this.container = container;\n        this.challengeItems = [];\n        this.filters = {\n            byOnline: true,\n            byOnsite: true,\n            byLabel: false,\n            byRating: false,\n            byText: false,\n            labelsFilters: [],\n            minRatingFilter: 2,\n            maxRatingFilter: 5,\n            textFilter: ''\n        };\n        this.labelsArray = [];\n    }\n\n    async run() {\n        this.challenges = await this.retriever.load();\n       \n        this.render();\n    }\n\n    render() {\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\n        const challengeArray = filterInstance.filterArray(this.challenges)\n        challengeArray.forEach(challengeData => {\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\n        const challengeItem = challengeInstance.render();\n        this.container.appendChild(challengeItem);\n        this.challengeItems.push(challengeData);\n        })\n\n        // FILTERBOX\n\n        const filterButton = document.querySelector('.filter-cta');\n\n        const filterBoard = document.querySelector('.filter-board');\n        filterBoard.style.display = 'none';\n        \n        const filterMenu  = document.createElement('div');\n        filterMenu.classList.add(\"filter-menu\");\n        filterBoard.appendChild(filterMenu);\n        \n        const filterBoxTitle = document.createElement('h3');\n        filterBoxTitle.classList.add(\"filter-box-title\");\n        filterMenu.appendChild(filterBoxTitle);\n        filterBoxTitle.innerHTML = \"Filter challenges\";\n\n        const xButton = document.createElement('a');\n        xButton.classList.add(\"x-button-style\");\n        const btnSpan = document.createElement('p');\n        btnSpan.innerHTML = \"&#10005;\";\n        xButton.appendChild(btnSpan);\n        filterMenu.appendChild(xButton);\n\n        const filtersToChoose = document.createElement('div');\n        filtersToChoose.classList.add('choose-filter-box');\n        filterMenu.appendChild(filtersToChoose);\n\n        const filterType = document.createElement('div');\n        filterType.classList.add(\"filter-by-type\");\n        filtersToChoose.appendChild(filterType);\n\n        const filterTypeTitle = document.createElement('h4');\n        filterTypeTitle.innerHTML = \"By Type\";\n        filterType.appendChild(filterTypeTitle);\n\n        const filterTypeList = document.createElement('ul');\n        filterType.appendChild(filterTypeList);\n\n        const filterListPoint1 = document.createElement('li');\n        filterTypeList.appendChild(filterListPoint1);\n\n        const filterTypeCheck1 = document.createElement('input');\n        filterTypeCheck1.type = \"checkbox\";\n        filterTypeCheck1.checked = true\n        filterListPoint1.appendChild(filterTypeCheck1);\n\n        const filterTypeText1 = document.createElement('label');\n        filterTypeText1.innerHTML = \"&nbspInclude online challenges\";\n        filterListPoint1.appendChild(filterTypeText1);\n\n        const filterListPoint2 = document.createElement('li');\n        filterTypeList.appendChild(filterListPoint2);\n\n        const filterTypeCheck2 = document.createElement('input');\n        filterTypeCheck2.type = \"checkbox\";\n        filterTypeCheck2.checked = true\n        filterListPoint2.appendChild(filterTypeCheck2);\n\n        const filterTypeText2 = document.createElement('label');\n        filterTypeText2.innerHTML = \"&nbspInclude on-site challenges\";\n        filterListPoint2.appendChild(filterTypeText2);\n        \n        const filterRating = document.createElement('div');\n        filterRating.classList.add(\"filter-by-rating\");\n        filtersToChoose.appendChild(filterRating);\n\n        const filterRatingTitle = document.createElement('h4');\n        filterRatingTitle.innerHTML = \"By Rating\";\n        filterRating.appendChild(filterRatingTitle);\n\n        const filterRatingList = document.createElement('ul');\n        filterRating.appendChild(filterRatingList);\n\n        function createStars(starsArr) {\n            for (let i = 0; i < 5; i++) {\n                starsArr[i] = document.createElement('li');\n                starsArr[i].classList.add(\"filter-rating-star\");\n                starsArr[i].classList.add(\"off\");\n                filterRatingList.appendChild(starsArr[i]); \n                starsArr.push();  \n            } \n        }\n\n        function starRating(starsArr) {\n            const starLength = starsArr.length;\n            \n            starsArr.forEach((star) => {\n                star.addEventListener('click', () =>  {\n                    let i = starsArr.indexOf(star);   \n                    if (star.classList.contains(\"off\")) {\n                        for (i; i >= 0; --i) {\n                            starsArr[i].classList.add(\"on\");\n                            starsArr[i].classList.remove(\"off\");\n                        }\n                    }\n                    else {           \n                        i+=1;        \n                        for (i; i < starLength; ++i) {\n                            starsArr[i].classList.add(\"off\");\n                            starsArr[i].classList.remove(\"on\");\n                        } \n                    }\n                    console.log(i+1);\n                    return i+1;\n                }) \n            })\n        }\n\n        // MinRatingStars creation and eventListener\n        const starsArray = [];\n        createStars(starsArray);\n        starRating(starsArray);\n    \n        // Label \"to\" between stars\n        const filterStarLabel = document.createElement('li');\n        filterStarLabel.innerHTML = \"&nbspto&nbsp\";\n        filterStarLabel.style.textAlign = \"center\";\n        filterStarLabel.style.padding = \"0.5rem\";\n        filterRatingList.appendChild(filterStarLabel);\n\n        // MaxRatingStars creation\n        const starsArray2 = [];\n        createStars(starsArray2);\n        starRating(starsArray2);\n\n        // Tag creation\n        const filterTag = document.createElement('div');\n        filterTag.classList.add(\"filter-by-tag\");\n        filtersToChoose.appendChild(filterTag);\n\n        const filterTagTitle = document.createElement('h4');\n        filterTagTitle.innerHTML = \"By Tag\";\n        filterTag.appendChild(filterTagTitle);\n\n        const filterTagLabels = document.createElement('div');\n        filterTagLabels.classList.add(\"filter-by-tag-item\");\n        filterTag.appendChild(filterTagLabels);\n\n        // Creates array of all labels in all challenges\n        this.challenges.forEach(obj => {\n            obj.labels.forEach(label => {\n                if(!this.labelsArray.includes(label)) {\n                    this.labelsArray.push(label);\n                    const filterTagItem = document.createElement('label');\n                    filterTagItem.innerHTML = label;\n                    filterTagItem.style.backgroundColor = 'white';\n                    filterTagLabels.appendChild(filterTagItem);\n                    filterTagItem.addEventListener('click', (event) => {\n                        // Label selected conditional\n                        if (filterTagItem.style.backgroundColor == \"white\") {\n                            filterTagItem.style.backgroundColor = \"lightslategray\";\n                            filterTagItem.style.color = \"white\";\n                            filterTagItem.style.borderColor = \"lightslategray\";                          \n                        } else {\n                            filterTagItem.style.backgroundColor = \"white\";\n                            filterTagItem.style.color = \"gray\";\n                            filterTagItem.style.borderColor = \"lightgray\";\n                        }\n\n                        const value = event.target.innerText;\n                        const index = this.filters.labelsFilters.indexOf(value);\n                        this.filters.labelsFilters.includes(value) ? this.filters.labelsFilters.splice(index, 1) : this.filters.labelsFilters.push(value);\n                        this.filters.labelsFilters.length > 0 ? this.filters.byLabel = true : this.filters.byLabel = false;\n                        \n                        this.rerender()\n                    })\n                }\n            });\n        });\n\n\n\n        const filterSearchText = document.createElement('div');\n        filterSearchText.classList.add(\"filter-search-text\");\n        filterMenu.appendChild(filterSearchText);\n\n        const filterSearchTextTitle = document.createElement('h4');\n        filterSearchTextTitle.innerHTML = \"Or type to search for keyword\";\n        filterSearchText.appendChild(filterSearchTextTitle);\n\n        const searchText = document.createElement('input');\n        searchText.type = \"text\";\n        searchText.classList.add('filter-search-input');\n        searchText.placeholder = \"Start typing to filter\";\n        searchText.addEventListener('keyup', () => {\n            this.filters.byText = true;\n            this.filters.textFilter = searchText.value;\n            this.rerender()\n        });\n        filterSearchText.appendChild(searchText);\n        \n        \n        \n        filterListPoint1.addEventListener('change', () => {\n            if (!this.filters.byOnline) {\n                this.filters.byOnline = true;\n                this.rerender()\n            }\n            else {\n                this.filters.byOnline = false;\n                this.rerender()\n            }\n        });\n\n        filterListPoint2.addEventListener('change', () => {\n            if (!this.filters.byOnsite) {\n                this.filters.byOnsite = true;\n                this.rerender()\n            }\n            else {\n                this.filters.byOnsite = false;\n                this.rerender()\n            }\n        });\n\n        \n        xButton.addEventListener('click',() => \n            {\n                filterButton.style.display = 'block';\n                filterBoard.style.display = \"none\";\n            }\n        );\n\n        filterButton.addEventListener('click', () => \n        {\n            filterButton.style.display = 'none'; \n            filterBoard.style.display = \"block\";\n        }\n    );\n\n\n    }\n\n    rerender() {\n        // Clear the DOM\n        this.container.innerHTML = '';\n        \n\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\n        const challengeArray = filterInstance.filterArray(this.challengeItems)\n        challengeArray.forEach(challengeData => {\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\n        const challengeItem = challengeInstance.render()\n        this.container.appendChild(challengeItem)\n            \n        })\n    }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/ChallengeGrid.js?");

/***/ }),

/***/ "./src/modules/DataRetriever.js":
/*!**************************************!*\
  !*** ./src/modules/DataRetriever.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataRetriever\": () => (/* binding */ DataRetriever)\n/* harmony export */ });\nclass DataRetriever {\n    constructor() {\n        this.challenges = null\n    }\n    async load() {\n        const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';\n        if(!this.challenges) {\n            try {\n                const response = await fetch(url);\n                const data = await response.json();\n                this.challenges = data.challenges\n            } catch (error) {\n                console.log(error)\n            }    \n        }\n\n        return this.challenges;\n    }\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/DataRetriever.js?");

/***/ }),

/***/ "./src/modules/Filter.js":
/*!*******************************!*\
  !*** ./src/modules/Filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": () => (/* binding */ Filter)\n/* harmony export */ });\nclass Filter {\n    constructor(filtersObj) {\n        this.filters = filtersObj\n    }\n    filterArray(array) {\n        let newArray = [];\n        let filteredArray = [];\n        \n        if (this.filters.byOnline) {\n            filteredArray = array.filter(obj => {\n                return obj.type === 'online';\n            })\n            // Using spread to \"create\"/concat a new array with all values\n            newArray = [...newArray, ...filteredArray];\n        }\n    \n        if (this.filters.byOnsite) {\n            filteredArray = array.filter(obj => {\n                return obj.type === 'onsite';\n            })\n            // Using spread to \"create\"/concat a new array with all values\n            newArray = [...newArray, ...filteredArray];\n        }\n    \n        if (this.filters.byLabel) {\n            newArray = newArray.filter(obj => {\n                return this.filters.labelsFilters.every(label => obj.labels.includes(label));\n            })\n        }\n    \n        if (this.filters.byRating) {\n            newArray = newArray.filter(obj => {\n                if(obj.rating >= this.filters.minRatingFilter && obj.rating <= this.filters.maxRatingFilter) {\n                    return obj;\n                }\n            });\n        }\n    \n        if (this.filters.byText) {\n            newArray = newArray.filter(obj => {\n                // returns obj with title or description that includes the value from textFilter\n                return obj.description.toUpperCase().includes(this.filters.textFilter.toUpperCase()) || obj.title.toUpperCase().includes(this.filters.textFilter.toUpperCase());\n            });\n        }\n    \n        console.log(newArray);\n        return newArray;    \n    }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/Filter.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;