"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _image = _interopRequireDefault(require("./image1.jpg"));
var _image2 = _interopRequireDefault(require("./image2.jpg"));
var _image3 = _interopRequireDefault(require("./image3.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const photos = [{
  src: _image.default,
  caption: "Photo by Richard Pasquarella on Unsplash"
}, {
  src: _image2.default,
  caption: "Photo by Pratik Patel on Unsplash"
}, {
  src: _image3.default,
  caption: "Photo by Josh Post on Unsplash"
}];
var _default = exports.default = photos;