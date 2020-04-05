'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dataKeys = {
  'line': 'data',
  'radar': 'data',
  'bar': 'data',
  'horizontalBar': 'data',
  'bubble': 'data'
};

var updatePoints = function updatePoints(nextProps, chart, dataKey) {
  var name = chart.config.type;
  var nextProps = nextProps;

  if (name === 'polarArea' || name === 'pie' || name === 'doughnut') {
    nextProps.data.datasets.forEach(function (segment, segmentIndex) {
      if (!chart.data.datasets[segmentIndex]) {
        chart.data.labels.push(nextProps.data.labels[segmentIndex]);
        chart.data.datasets.forEach(function (dataset) {
          dataset.data.push(segment);
        });
      } else {
        Object.keys(segment).forEach(function (key) {
          chart.data.datasets[segmentIndex][key] = segment[key];
        });
      }
    });

    while (nextProps.data.datasets.length < chart.data.datasets.length) {
      removeData(chart);
    }
  } else if (name === "radar") {
    removeData(chart);
    nextProps.data.datasets.forEach(function (set, setIndex) {
      set.data.forEach(function (val, pointIndex) {
        if (typeof chart.data.datasets[setIndex][dataKey][pointIndex] == "undefined") {
          addData(nextProps, chart, setIndex);
        } else {
          chart.data.datasets[setIndex][dataKey][pointIndex] = val;
        }
      });
    });
  } else if (name === "bubble") {
    while (chart.data.datasets.length > nextProps.data.datasets.length) {
      chart.data.datasets.pop();
    }
    nextProps.data.datasets.forEach(function (set, setIndex) {
      if (typeof chart.data.datasets[setIndex] == "undefined") {
        chart.data.datasets.push(nextProps.data.datasets[setIndex]);
      } else {
        chart.data.datasets[setIndex][dataKey] = set.data;
      }
    });
  } else if (name === "scatter") {
    if (chart.data.datasets.length > nextProps.data.datasets.length) {
      chart.data.datasets.pop();
    }
    nextProps.data.datasets.forEach(function (set, setIndex) {
      if (typeof chart.data.datasets[setIndex] == "undefined") {
        chart.data.datasets.push(nextProps.data.datasets[setIndex]);
      } else {
        chart.data.datasets[setIndex] = nextProps.data.datasets[setIndex];
      }
    });
  } else {
    while (chart.data.labels.length > nextProps.data.labels.length) {
      removeData(chart);
    }
    nextProps.data.datasets.forEach(function (set, setIndex) {
      set.data.forEach(function (val, pointIndex) {
        if (typeof chart.data.datasets[setIndex][dataKey][pointIndex] == "undefined") {
          addData(nextProps, chart, setIndex);
        } else {
          chart.data.datasets[setIndex][dataKey][pointIndex] = val;
        }
      });
    });
  }
};

function addData(nextProps, chart, setIndex) {
  chart.data.labels.push(nextProps.data.labels[setIndex]);
  chart.data.datasets.forEach(function (dataset) {
    dataset.data.push(nextProps.data);
  });
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach(function (dataset) {
    dataset.data.pop();
  });
}

var Chart = function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    _classCallCheck(this, Chart);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {};

    _this.handleOnClick = function (event) {
      var _this$props = _this.props,
          getDatasetAtEvent = _this$props.getDatasetAtEvent,
          getElementAtEvent = _this$props.getElementAtEvent,
          getElementsAtEvent = _this$props.getElementsAtEvent;

      getDatasetAtEvent && getDatasetAtEvent(_this.state.chart.getDatasetAtEvent(event), event);
      getElementAtEvent && getElementAtEvent(_this.state.chart.getElementAtEvent(event), event);
      getElementsAtEvent && getElementsAtEvent(_this.state.chart.getElementsAtEvent(event), event);
    };

    _this.canvassRef = _react2.default.createRef();
    return _this;
  }

  Chart.prototype.componentDidMount = function componentDidMount() {
    this.initializeChart(this.props);
    this.props.getChart && this.props.getChart(this.state.chart);
    this.props.getCanvas && this.props.getCanvas(this.canvassRef);
  };

  Chart.prototype.componentWillUnmount = function componentWillUnmount() {
    var chart = this.state.chart;
    chart.destroy();
  };

  Chart.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var _props2 = this.props,
        redraw = _props2.redraw,
        type = _props2.type,
        options = _props2.options,
        height = _props2.height,
        width = _props2.width,
        data = _props2.data,
        plugins = _props2.plugins;

    if (!(0, _isEqual2.default)(data.datasets, nextProps.data.datasets) || nextProps.redraw == true || type != nextProps.type || height != nextProps.height || width != nextProps.width || !(0, _isEqual2.default)(options, nextProps.options) || !(0, _isEqual2.default)(plugins, nextProps.plugins)) {
      var chart = this.state.chart;
      if (nextProps.redraw) {
        chart.destroy();
        this.initializeChart(nextProps);
      } else {
        var dataKey = nextProps.dataKey || dataKeys[chart.config.type];
        updatePoints(nextProps, chart, dataKey);
        if (chart.scales) {
          chart.config.data.labels = nextProps.data.labels;
        }
        chart.update();
        return false;
      }
    }
  };

  Chart.prototype.render = function render() {
    var excludedProps = ['data', 'options', 'redraw'];
    var _props = {};
    for (var name in this.props) {
      if (this.props.hasOwnProperty(name)) {
        if (excludedProps.indexOf(name) === -1) {
          _props[name] = this.props[name];
        }
      }
    }
    var canvasStyle = {
      width: this.props.width ? this.props.width : "auto",
      height: this.props.height ? this.props.height : "auto"
    };
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('canvas', { ref: this.props.ref ? this.props.ref : this.canvassRef, style: canvasStyle, onClick: this.handleOnClick })
    );
  };

  Chart.prototype.initializeChart = function initializeChart(nextProps) {
    var Chart = require('chart.js');
    var el = _reactDom2.default.findDOMNode(this.canvassRef.current);
    var ctx = el.getContext("2d");
    var chart = new Chart(ctx, { type: nextProps.type, data: nextProps.data, options: nextProps.options || {}, plugins: nextProps.plugins || {} });
    this.state.chart = chart;
  };

  return Chart;
}(_react2.default.Component);

exports.default = Chart;