"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Card = _interopRequireDefault(require("./Card"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Smoke Test 

it("renders without crashing", function () {
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Card.default, null));
});