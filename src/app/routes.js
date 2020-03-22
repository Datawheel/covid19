"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RouteCreate;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _App = _interopRequireDefault(require("./App"));

var _Home = _interopRequireDefault(require("./pages/Home"));

var _Covid = _interopRequireDefault(require("./pages/Covid19"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** */
function RouteCreate() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/",
    component: _App["default"],
    history: _reactRouter.browserHistory
  }, /*#__PURE__*/_react["default"].createElement(_reactRouter.IndexRoute, {
    component: _Covid["default"]
  }));
}