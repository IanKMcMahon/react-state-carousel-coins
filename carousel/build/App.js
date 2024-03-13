"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _Carousel = _interopRequireDefault(require("./Carousel"));
var _photos = _interopRequireDefault(require("./photos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** App component, renders Carousel
 * 
 * Props: none
 * State: none
 * 
 * App --> Carousel
 */

function App() {
  // In real life, this data would probably come from an AJAX call.
  // For our purposes, we're just importing from another file.
  const carouselPhotos = _photos.default;
  const carouselTitle = "Shells from far-away beaches";
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_Carousel.default, {
    photos: carouselPhotos,
    title: carouselTitle
  }));
}
var _default = exports.default = App;