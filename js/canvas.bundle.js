/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/frt.png":
/*!*************************!*\
  !*** ./src/img/frt.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ede92a8e6619b24a2ca9d35ab01c8fbf.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_frt_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/frt.png */ "./src/img/frt.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var frameCount = 0;
var scrollOffset = 0;
var gravity = 1;
var keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  }
};

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 5;
    this.jump = 15;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: {
          image: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
          cropWidth: 177,
          width: 66
        },
        left: {
          image: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
          cropWidth: 177,
          width: 66
        }
      },
      run: {
        right: {
          image: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
          cropWidth: 341,
          width: 127.875
        },
        left: {
          image: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
          cropWidth: 341,
          width: 127.875
        }
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.frt = createImage(_img_frt_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite.image, this.currentSprite.cropWidth * this.frames, 0, this.currentSprite.cropWidth, 400, this.position.x, this.position.y, this.width, this.height); //c.drawImage(this.frt, this.position.x + 5, this.position.y, 55, 55);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left) this.width = this.currentSprite.width;
      if (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left) this.width = this.currentSprite.width;
      this.frames++;
      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right || this.frames > 59 && this.currentSprite === this.sprites.stand.left) this.frames = 0;else if (this.frames > 29 && this.currentSprite === this.sprites.run.right || this.frames > 29 && this.currentSprite === this.sprites.run.left) this.frames = 0;
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        if (this.position.y > 0 && this.position.y < 50) gravity = 0.1;else if (this.position.y >= 50 && this.position.y < 200) gravity = 0.3;else gravity = 1;
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width, this.height = this.image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width, this.height = this.image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var player = new Player();
player.draw();
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platforms = [];
var genericObjects = [];
var winPosition;

function init() {
  player = new Player();
  player.draw();
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platforms = designLevels();
  genericObjects = [new GenericObject({
    x: -2,
    y: -2,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -2,
    y: -2,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  })];
  scrollOffset = 0;
}

init();
animate();

function designLevels() {
  var levels = [new Platform({
    x: 0,
    y: 455,
    image: platformImage
  })];

  for (var i = 1; i < 100; i++) {
    var x = levels[levels.length - 1].position.x + levels[levels.length - 1].width + generateRandom(80, 250);

    if (i % 3 == 0 || i % 5 == 0) {
      levels.push(new Platform({
        x: x,
        y: 300,
        image: platformSmallImage
      }));
    } else {
      levels.push(new Platform({
        x: x,
        y: 455,
        image: platformImage
      }));
    }

    winPosition = x;
  }

  return levels;
}

var then = Date.now();

function createImage(imageSource) {
  var image = new Image();
  image.src = imageSource;
  return image;
}

function animate() {
  requestAnimationFrame(animate);
  var now = Date.now();
  var elapsed = now - then;

  if (elapsed > 7) {
    then = Date.now();
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
    genericObjects.forEach(function (object) {
      object.draw();
    });
    platforms.forEach(function (platform) {
      platform.draw();
      detectCollisions(platform);
    });
    player.update();
    checkWhenKeysReleased();
    checkIfPlayerWins();
    checkIfPlayerLoses();
    c.font = "48px Helvetica";
    c.fillText("Score: " + scrollOffset, 10, 50);
  }
}

function checkIfPlayerWins() {
  if (scrollOffset >= winPosition) console.log("You Win");
}

function checkIfPlayerLoses() {
  if (player.position.y > canvas.height) {
    init();
  }

  if (player.position.y + player.height < 0) {
    init();
  }
}

function detectCollisions(platform) {
  if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) player.velocity.y = 0;
}

function checkWhenKeysReleased() {
  if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -player.speed;
  } else if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else {
    player.velocity.x *= 0.9;
    movePlatform();
  }
}

function movePlatform() {
  if (keys.right.pressed) {
    platforms.forEach(function (platform) {
      platform.position.x -= player.speed;
    });
    genericObjects.forEach(function (object) {
      object.position.x -= player.speed * 0.66;
    });
    scrollOffset += player.speed;
  } else if (keys.left.pressed && scrollOffset > 0) {
    platforms.forEach(function (platform) {
      platform.position.x += player.speed;
    });
    genericObjects.forEach(function (object) {
      object.position.x += player.speed * 0.66;
    });
    scrollOffset -= player.speed;
  }
}

addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft" || event.key == "a") {
    keys.left.pressed = true;
    player.currentSprite = player.sprites.run.left;
  } else if (event.key === "ArrowRight" || event.key == "d") {
    keys.right.pressed = true;
    player.currentSprite = player.sprites.run.right;
  } else if (event.key === " ") {
    player.velocity.y -= player.jump;
    player.currentSprite = player.sprites.run.right;
  }
});
addEventListener("keyup", function (event) {
  if (event.key === "ArrowLeft" || event.key == "a") {
    keys.left.pressed = false;
    player.currentSprite = player.sprites.stand.left;
  } else if (event.key === "ArrowRight" || event.key == "d") {
    keys.right.pressed = false;
    player.currentSprite = player.sprites.stand.right;
  }
});

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map