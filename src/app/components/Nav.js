"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Nav = /*#__PURE__*/function (_React$Component) {
  _inherits(Nav, _React$Component);

  var _super = _createSuper(Nav);

  function Nav() {
    _classCallCheck(this, Nav);

    return _super.apply(this, arguments);
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("nav", {
        className: "nav"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        width: "34px",
        height: "34px",
        viewBox: "0 0 36 34",
        version: "1.1"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "#FFFFFF",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-109, -60)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(109, 60)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M28.065768,8.57934 L32.199612,23.719608 L6.77839203,30.627432 L2.64494403,15.115716 L28.065768,8.57934 Z M7.12489203,2.377188 L33.263664,2.377188 L33.263664,18.223128 L33.164664,18.223128 L30.05844,6.80922 C29.910732,6.274224 29.348016,5.887728 28.795992,5.942376 C28.733424,5.9499 28.671252,5.962176 28.610268,5.9796 L7.12489203,11.501028 L7.12489203,2.377188 Z M5.81334003,-3.55271368e-15 C5.23359603,0.060984 4.74572403,0.605484 4.74889203,1.188792 L4.74889203,12.119976 L0.887496031,13.110372 C0.284784031,13.265604 -0.122303969,13.955832 0.0333240311,14.558544 L4.78611603,32.385672 C4.94610003,32.989176 5.64385203,33.391512 6.24616803,33.227172 L33.969336,25.7004 C34.57284,25.54002 34.97478,24.842664 34.810836,24.239556 L33.820836,20.59992 L34.45206,20.59992 C35.074176,20.59992 35.64006,20.034036 35.64006,19.411524 L35.64006,1.188792 C35.64006,0.56628 35.074176,0.000396 34.45206,-3.55271368e-15 L5.81334003,-3.55271368e-15 Z",
        id: "Fill-1"
      }))))), /*#__PURE__*/_react["default"].createElement("span", {
        className: "brand-name"
      }, "Chilecracia"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "brand-desc title"
      }, "COVID-19 en Chile"));
    }
  }]);

  return Nav;
}(_react["default"].Component);

exports["default"] = Nav;