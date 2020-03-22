"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Array = require("d3-array");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colors = {
  0: "#BF3C25",
  15: "#845EC2",
  1: "#D65DB1",
  2: "#FF6F91",
  3: "#FF9671",
  4: "#E57B89",
  5: "#D26F9D",
  13: "#5379D0",
  6: "#007FC9",
  7: "#007DA4",
  16: "#674A65",
  8: "#6074B5",
  9: "#B97562",
  14: "#65CE90",
  10: "#39BC99",
  11: "#02A99D",
  12: "#009CB6"
};
var axisStyles = {
  barConfig: {
    stroke: "#ccc"
  },
  gridConfig: {
    stroke: "#ccc"
  },
  shapeConfig: {
    labelConfig: {
      fontColor: function fontColor() {
        return "#211f1a";
      },
      fontFamily: function fontFamily() {
        return "Open Sans, sans-serif";
      },
      fontSize: function fontSize() {
        return 14;
      },
      fontWeight: function fontWeight() {
        return 400;
      }
    },
    stroke: "#ccc"
  },
  tickSize: 5,
  titleConfig: {
    fontColor: function fontColor() {
      return "#211f1a";
    },
    fontFamily: function fontFamily() {
      return "Open Sans, sans-serif";
    },
    fontSize: function fontSize() {
      return 16;
    },
    fontWeight: function fontWeight() {
      return 400;
    }
  }
};
var _default = {
  xConfig: _objectSpread({}, axisStyles),
  yConfig: _objectSpread({}, axisStyles, {
    tickFormat: function tickFormat(d) {
      return d;
    }
  }),
  shapeConfig: {
    Line: {
      curve: "monotoneX",
      label: function label(d) {
        return d.region || d.Geography;
      },
      labelConfig: {
        fontColor: function fontColor(d) {
          return colors[d.region_id] || "#1b1b1b";
        },
        fontFamily: function fontFamily() {
          return ["Pathway Gothic One", "Arial Narrow", "sans-serif"];
        },
        fontSize: function fontSize() {
          return 14;
        },
        fontWeight: function fontWeight() {
          return 700;
        },
        padding: 0,
        verticalAlign: "middle"
      },
      labelBounds: function labelBounds(d, i, s) {
        var yExtent = (0, _d3Array.extent)(s.points.map(function (p) {
          return p[1];
        }));

        if (yExtent[1] - yExtent[0] > 5) {
          var _s$points$ = _slicedToArray(s.points[0], 2),
              firstX = _s$points$[0],
              firstY = _s$points$[1];

          var _s$points = _slicedToArray(s.points[s.points.length - 1], 2),
              lastX = _s$points[0],
              lastY = _s$points[1];

          var height = 30;
          return {
            x: lastX - firstX + 5,
            y: lastY - firstY - height / 2 + 1,
            width: 200,
            height: height
          };
        }

        return false;
      },
      stroke: function stroke(d) {
        return colors[d.region_id] || "#cccccc";
      },
      strokeLinecap: "round",
      strokeWidth: 3
    },
    labelConfig: {
      fontFamily: "Open Sans"
    }
  },
  tooltipConfig: {
    tbody: function tbody(d) {
      var output = [];
      if (d.confirmados) output.push(["Casos Confirmados", d.confirmados]);
      if (d.casos_acum) output.push(["Casos a la fecha", d.casos_acum]);
      if (d.fecha) output.push(["Fecha", d.fecha]);
      return output;
    }
  }
};
exports["default"] = _default;