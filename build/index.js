module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Graph = function (_Component) {
  _inherits(Graph, _Component);

  function Graph(props) {
    _classCallCheck(this, Graph);

    var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, props));

    _this.initCanvas = _this.initCanvas.bind(_this);
    _this.drawLine = _this.drawLine.bind(_this);
    _this.drawLinesStats = _this.drawLinesStats.bind(_this);
    _this.drawTextLabel = _this.drawTextLabel.bind(_this);
    _this.drawPoints = _this.drawPoints.bind(_this);
    _this.drawVerticalLines = _this.drawVerticalLines.bind(_this);
    _this.proportionalXPosition = _this.proportionalXPosition.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.initCanvasWithDimensions = _this.initCanvasWithDimensions.bind(_this);
    _this.setCanvas = _this.setCanvas.bind(_this);
    _this.graphStyles = {
      graph: {
        position: 'relative'
      },
      canvas: {
        width: '100%'
      },
      tagHover: {
        position: 'absolute',
        background: '#FFF',
        padding: '3px 8px',
        margin: '0 8px',
        borderRadius: '3px',
        boxShadow: '0 7px 14px 0 rgba(50, 50, 93, .1), 0 3px 6px 0 rgba(0, 0, 0, .07)',
        userSelect: 'none',
        cursor: 'default'
      },
      tagItem: {
        padding: '1px 0',
        fontSize: '.7em',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      tagItemDot: {
        borderRadius: '4px',
        height: '6px',
        width: '6px',
        marginRight: '8px'
      },
      tagItemLabel: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '8px',
        letterSpacing: '.001em',
        color: '#858585'
      },
      tagItemValue: {
        color: '#202020'
      }
    };
    _this.state = {
      context: null,
      height: null,
      width: null,
      mouseX: null,
      mouseY: null,
      activeSegment: null,
      mouseInPerimeter: false,
      tagLabelStyle: {},
      tagLabelDatas: []
    };
    return _this;
  }

  _createClass(Graph, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener("resize", this.initCanvasWithDimensions);
      this.initCanvasWithDimensions();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.initCanvasWithDimensions);
    }
  }, {
    key: 'initCanvasWithDimensions',
    value: function initCanvasWithDimensions() {
      var _this2 = this;

      var canvas = this.refs.canvas;
      var context = canvas.getContext('2d');
      var graphContainer = this.refs.graphContainer;
      var setupInterval = setInterval(function () {
        if (graphContainer.offsetHeight === _this2.props.height) {
          clearInterval(setupInterval);
          _this2.initCanvas(graphContainer, canvas, context);
        }
      }, 10);
    }
  }, {
    key: 'proportionalXPosition',
    value: function proportionalXPosition(xPosition, xPositions) {
      var availaibleHeight = this.state.height - 35;
      var proportionalFactor = (Math.max.apply(Math, _toConsumableArray(xPositions)) - Math.min.apply(Math, _toConsumableArray(xPositions))) / availaibleHeight || 1;
      var calculatedPosition = availaibleHeight - (xPosition / proportionalFactor - Math.min.apply(Math, _toConsumableArray(xPositions)) / proportionalFactor - 10);
      return calculatedPosition;
    }
  }, {
    key: 'drawTextLabel',
    value: function drawTextLabel() {
      var labels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var segmentWidth = this.state.width / (labels.length - 1);
      var ctx = this.state.context;
      ctx.font = "11px Roboto";
      ctx.fillStyle = this.props.labelsColor;
      for (var i = 0; i < labels.length; i++) {
        // eslint-disable-next-line
        if (i == 0) {
          ctx.textAlign = "left";
        }
        // eslint-disable-next-line
        else if (i == labels.length - 1) {
            ctx.textAlign = "right";
          } else {
            ctx.textAlign = "center";
          }
        ctx.fillText(labels[i], i * segmentWidth, this.state.height - 1);
      }
    }
  }, {
    key: 'drawVerticalLines',
    value: function drawVerticalLines(stats) {
      var ctx = this.state.context;
      var segmentWidth = this.state.width / (stats.length - 1);
      for (var i = 0; i < stats.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = i === this.state.activeSegment && this.state.mouseInPerimeter ? this.props.horizontalSegmentHoverColor : this.props.horizontalSegmentColor;
        ctx.moveTo(segmentWidth * i, this.state.height - 15);
        ctx.lineTo(segmentWidth * i, 0);
        ctx.stroke();
      }
    }
  }, {
    key: 'drawPoints',
    value: function drawPoints(stats, color) {
      var ctx = this.state.context;
      var segmentWidth = this.state.width / (stats.length - 1);
      ctx.fillStyle = color;
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#FFF';
      ctx.beginPath();
      ctx.arc(segmentWidth * this.state.activeSegment, this.proportionalXPosition(stats[this.state.activeSegment], stats), 3, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: 'drawLine',
    value: function drawLine(stats, color) {
      var ctx = this.state.context;
      var segmentWidth = this.state.width / (stats.length - 1);
      ctx.beginPath();
      ctx.moveTo(0, this.proportionalXPosition(stats[0], stats));
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = color;
      for (var i = 0; i < stats.length; i++) {
        ctx.lineTo(segmentWidth * i, this.proportionalXPosition(stats[i], stats));
      }
      ctx.stroke();
    }
  }, {
    key: 'drawPolygon',
    value: function drawPolygon(stats, color) {
      var ctx = this.state.context;
      var segmentWidth = this.state.width / (stats.length - 1);
      var grd = ctx.createLinearGradient(0, this.state.height, 0, 0);
      grd.addColorStop(1, color.start);
      grd.addColorStop(0, color.stop);
      ctx.beginPath();
      ctx.moveTo(0, this.state.height);
      for (var i = 0; i < stats.length; i++) {
        ctx.lineTo(segmentWidth * i, this.proportionalXPosition(stats[i], stats));
      }
      ctx.lineTo(this.state.width, this.state.height);
      ctx.closePath();
      ctx.fillStyle = grd;
      ctx.fill();
    }
  }, {
    key: 'drawLinesStats',
    value: function drawLinesStats(statsList) {
      for (var i = 0; i < statsList.length; i++) {
        this.drawPolygon(statsList[i].datas, this.props.linesColors[i].gradient);
        this.drawLine(statsList[i].datas, this.props.linesColors[i].border);
      }
      this.drawVerticalLines(statsList[0].datas);
      if (this.state.mouseInPerimeter) {
        for (var _i = 0; _i < statsList.length; _i++) {
          this.drawPoints(statsList[_i].datas, this.props.linesColors[_i].border);
        }
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      var mouseX = e.nativeEvent.offsetX;
      var mouseY = e.nativeEvent.offsetY;
      var stats = this.props.graphs ? this.props.graphs : [];
      var segmentWidth = this.state.width / (stats[0].datas.length - 1);
      for (var i = 0; i < stats[0].datas.length; i++) {
        if (mouseX > i * segmentWidth - segmentWidth / 2 && mouseX < i * segmentWidth + segmentWidth / 2) {
          // eslint-disable-next-line
          var tagLabelDatas = stats.map(function (stat) {
            return {
              label: stat.label,
              color: stat.labelColor,
              value: stat.datas[i]
            };
          });
          var tagLabelStyle = mouseX >= this.state.width / 2 ? {
            right: this.state.width - (mouseX - 5)
          } : {
            left: mouseX + 5
          };
          tagLabelStyle.top = mouseY + 5;
          this.setState({ activeSegment: i, tagLabelDatas: tagLabelDatas, tagLabelStyle: tagLabelStyle });
        }
      }
      this.setState({ mouseX: mouseX, mouseY: mouseY });
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      this.setState({ mouseInPerimeter: true });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({ mouseInPerimeter: false });
    }
  }, {
    key: 'initCanvas',
    value: function initCanvas(graphContainer, canvas, context) {
      canvas.width = graphContainer.offsetWidth * 2;
      canvas.height = graphContainer.offsetHeight * 2;
      canvas.style.width = graphContainer.offsetWidth + 'px';
      canvas.style.height = graphContainer.offsetHeight + 'px';
      context.imageSmoothingQuality = "high";
      context.scale(2, 2);
      this.setState({ context: context, height: graphContainer.offsetHeight, width: graphContainer.offsetWidth });
    }
  }, {
    key: 'setCanvas',
    value: function setCanvas(statsList, labels) {
      this.state.context.clearRect(0, 0, this.state.width, this.state.height);
      this.drawLinesStats(statsList);
      this.drawTextLabel(labels);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.state.context && this.props.graphs) {
        this.setCanvas(this.props.graphs, this.props.labels);
      }
      return _react2.default.createElement(
        'div',
        {
          id: 'Graph',
          ref: 'graphContainer',
          style: _extends({}, this.graphStyles.graph, { height: this.props.height + 'px' }),
          onMouseEnter: function onMouseEnter() {
            return _this3.handleMouseEnter();
          },
          onMouseLeave: function onMouseLeave() {
            return _this3.handleMouseLeave();
          } },
        this.state.mouseInPerimeter && _react2.default.createElement(
          'div',
          { style: _extends({}, this.state.tagLabelStyle, this.graphStyles.tagHover) },
          this.state.tagLabelDatas.map(function (tagLabel, index) {
            return _react2.default.createElement(
              'div',
              { key: index, style: _this3.graphStyles.tagItem },
              _react2.default.createElement(
                'span',
                { style: _this3.graphStyles.tagItemLabel },
                _react2.default.createElement('div', { style: _extends({}, _this3.graphStyles.tagItemDot, { backgroundColor: tagLabel.color }) }),
                tagLabel.label
              ),
              _react2.default.createElement(
                'span',
                { style: _this3.graphStyles.tagItemValue },
                tagLabel.value
              )
            );
          })
        ),
        _react2.default.createElement('canvas', {
          ref: 'canvas',
          style: this.graphStyles.canvas,
          onMouseMove: function onMouseMove(e) {
            return _this3.handleMouseMove(e);
          }
        })
      );
    }
  }]);

  return Graph;
}(_react.Component);

exports.default = Graph;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);