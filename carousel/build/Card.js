"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Card: displays image.
 * 
 * Props:
 * - caption: string describing the image
 * - src: string for the image link
 * - currNum: integer for what image we're on
 * - totalNum: integer for how many images are in the collection
 * 
 * State:
 * - none
 * 
 * App --> Carousel --> Card
 */

function Card(_ref) {
  let {
    caption,
    src,
    currNum,
    totalNum
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Card"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "Card-title"
  }, caption), /*#__PURE__*/_react.default.createElement("img", {
    className: "Card-image",
    src: src,
    alt: caption
  }), /*#__PURE__*/_react.default.createElement("small", {
    className: "Card-small"
  }, "Image ", currNum, " of ", totalNum, "."));
}
var _default = exports.default = Card;