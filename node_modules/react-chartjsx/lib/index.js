'use strict';

exports.__esModule = true;
exports.Scatter = exports.Bubble = exports.HorizontalBar = exports.PolarArea = exports.Doughnut = exports.Pie = exports.Radar = exports.Bar = exports.Line = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = exports.Line = function (_React$Component) {
  _inherits(Line, _React$Component);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'line' }, this.props));
  };

  return Line;
}(_react2.default.Component);

var Bar = exports.Bar = function (_React$Component2) {
  _inherits(Bar, _React$Component2);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Bar.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'bar' }, this.props));
  };

  return Bar;
}(_react2.default.Component);

var Radar = exports.Radar = function (_React$Component3) {
  _inherits(Radar, _React$Component3);

  function Radar() {
    _classCallCheck(this, Radar);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Radar.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'radar' }, this.props));
  };

  return Radar;
}(_react2.default.Component);

var Pie = exports.Pie = function (_React$Component4) {
  _inherits(Pie, _React$Component4);

  function Pie() {
    _classCallCheck(this, Pie);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Pie.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'pie' }, this.props));
  };

  return Pie;
}(_react2.default.Component);

var Doughnut = exports.Doughnut = function (_React$Component5) {
  _inherits(Doughnut, _React$Component5);

  function Doughnut() {
    _classCallCheck(this, Doughnut);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  Doughnut.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'doughnut' }, this.props));
  };

  return Doughnut;
}(_react2.default.Component);

var PolarArea = exports.PolarArea = function (_React$Component6) {
  _inherits(PolarArea, _React$Component6);

  function PolarArea() {
    _classCallCheck(this, PolarArea);

    return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
  }

  PolarArea.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'polarArea' }, this.props));
  };

  return PolarArea;
}(_react2.default.Component);

var HorizontalBar = exports.HorizontalBar = function (_React$Component7) {
  _inherits(HorizontalBar, _React$Component7);

  function HorizontalBar() {
    _classCallCheck(this, HorizontalBar);

    return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
  }

  HorizontalBar.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'horizontalBar' }, this.props));
  };

  return HorizontalBar;
}(_react2.default.Component);

var Bubble = exports.Bubble = function (_React$Component8) {
  _inherits(Bubble, _React$Component8);

  function Bubble() {
    _classCallCheck(this, Bubble);

    return _possibleConstructorReturn(this, _React$Component8.apply(this, arguments));
  }

  Bubble.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'bubble' }, this.props));
  };

  return Bubble;
}(_react2.default.Component);

var Scatter = exports.Scatter = function (_React$Component9) {
  _inherits(Scatter, _React$Component9);

  function Scatter() {
    _classCallCheck(this, Scatter);

    return _possibleConstructorReturn(this, _React$Component9.apply(this, arguments));
  }

  Scatter.prototype.render = function render() {
    return _react2.default.createElement(_chart2.default, _extends({ type: 'scatter' }, this.props));
  };

  return Scatter;
}(_react2.default.Component);