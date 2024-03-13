"use strict";

var _react = require("@testing-library/react");
var _Carousel = _interopRequireDefault(require("./Carousel"));
var _testCommon = _interopRequireDefault(require("./_testCommon.js"));
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
it("works when you click on the right arrow", function () {
  const {
    container
  } = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Carousel.default, {
    photos: _testCommon.default,
    title: "images for testing"
  }));
  // expect the first image to show, but not the second
  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  _react.fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(container.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')).toBeInTheDocument();
});

// Smoke Test 

it("renders without crashing", function () {
  (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Carousel.default, null));
});

// Snapshot Test