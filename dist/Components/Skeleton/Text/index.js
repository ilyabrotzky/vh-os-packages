"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseColor = _Colors.default["gray-30"];
var shineColor = _Colors.default["gray-10"];

var VHSkeletonText = function VHSkeletonText(props) {
  console.log(props);

  if (props.red) {
    baseColor = _Colors.default["red-light"];
  }

  if (props.green) {
    baseColor = _Colors.default["green-light"];
  }

  return _react.default.createElement(_styles.default, {
    baseColor: baseColor,
    shineColor: shineColor
  });
};

VHSkeletonText.defaultProps = {};
VHSkeletonText.propTypes = {};
var _default = VHSkeletonText;
exports.default = _default;