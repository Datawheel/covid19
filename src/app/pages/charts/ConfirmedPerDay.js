"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Visualization = _interopRequireDefault(require("../../components/Visualization"));

var _ButtonGroupV = _interopRequireDefault(require("../../components/ButtonGroupV2"));

var _core = require("@blueprintjs/core");

var _d3plusReact = require("d3plus-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ConfirmedPerDay = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfirmedPerDay, _React$Component);

  var _super = _createSuper(ConfirmedPerDay);

  function ConfirmedPerDay() {
    var _this;

    _classCallCheck(this, ConfirmedPerDay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      scale: "Lineal",
      value: 10,
      valueReleased: 10
    });

    return _this;
  }

  _createClass(ConfirmedPerDay, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var scale = this.state.scale;
      var _this$props = this.props,
          data = _this$props.data,
          dataChile = _this$props.dataChile,
          source = _this$props.source;
      var r = [].concat(_toConsumableArray(data), _toConsumableArray(dataChile));
      r.sort(function (a, b) {
        return a.region_id - b.region_id || a.fecha > b.fecha;
      });
      var days = 0;
      var comparison = "";
      r.forEach(function (d) {
        if (d.region !== comparison) {
          comparison = d.region;
          days = 0;
        }

        if (d.casos_acum >= _this2.state.valueReleased) {
          days += 1;
        }

        d.days = days;
      });
      r = r.filter(function (d) {
        return d.days > 0;
      });
      return /*#__PURE__*/_react["default"].createElement(_Visualization["default"], {
        buttons: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ButtonGroupV["default"], {
          items: ["Lineal", "Logarítmica"],
          selected: scale,
          callback: function callback(scale) {
            return _this2.setState({
              scale: scale
            });
          }
        }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Slider, {
          labelStepSize: 10,
          max: 100,
          value: this.state.value,
          onRelease: function onRelease(valueReleased) {
            return _this2.setState({
              valueReleased: valueReleased
            });
          },
          onChange: function onChange(value) {
            return _this2.setState({
              value: value
            });
          }
        }))),
        paragraph: ["Este gráfico muestra los casos confirmados por región desde que se confirmaron 10 contagiados. Ello pues la propagación de COVID-19 no comenzó al mismo tiempo en todas las regiones y, por ende, es importante   analizar si el comportamiento del virus sigue tendencias similares desde el día que se confirman los primeros casos en cada región.", "La curva en rojo muestra el comportamiento del virus a nivel nacional.", "Mueva el slider para ajustar este umbral."],
        source: /*#__PURE__*/_react["default"].createElement("p", {
          className: "source"
        }, "Datos entregados por el Ministerio de Salud, y almacenados diariamente por Ignacio Toledo en ", /*#__PURE__*/_react["default"].createElement("a", {
          href: source
        }, source)),
        title: "TOTAL CASOS DETECTADOS DESDE LOS ".concat(this.state.valueReleased, " CONFIRMADOS")
      }, /*#__PURE__*/_react["default"].createElement(_d3plusReact.LinePlot, {
        config: {
          data: r,
          x: "days",
          discrete: "x",
          groupBy: ["region"],
          legend: false,
          xConfig: {
            tickFormat: function tickFormat(d) {
              return d % 2 ? "D\xEDa ".concat(d) : "";
            }
          },
          y: "casos_acum",
          yConfig: {
            scale: scale === "Lineal" ? "linear" : "log",
            title: "Casos Confirmados\n(".concat(scale, ")")
          }
        }
      }));
    }
  }]);

  return ConfirmedPerDay;
}(_react["default"].Component);

exports["default"] = ConfirmedPerDay;