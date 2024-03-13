"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./Carousel.css");
var _Card = _interopRequireDefault(require("./Card"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel(_ref) {
  let {
    photos,
    title
  } = _ref;
  const [currCardIdx, setCurrCardIdx] = (0, _react.useState)(0);
  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "Carousel"
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("div", {
    className: "Carousel-main"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-left-circle",
    onClick: goForward
  }), /*#__PURE__*/React.createElement(_Card.default, {
    caption: currCard.caption,
    src: currCard.src,
    currNum: currCardIdx + 1,
    totalNum: total
  }), /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right-circle",
    onClick: goForward
  })));
}
var _default = exports.default = Carousel;