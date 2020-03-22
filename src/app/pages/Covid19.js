"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = _interopRequireDefault(require("../components/Section"));

var _axios = _interopRequireDefault(require("axios"));

var _ConfirmedCases = _interopRequireDefault(require("./charts/ConfirmedCases"));

var _ConfirmedPerCapita = _interopRequireDefault(require("./charts/ConfirmedPerCapita"));

var _ConfirmedPerDay = _interopRequireDefault(require("./charts/ConfirmedPerDay"));

var _InternationalComparison = _interopRequireDefault(require("./charts/InternationalComparison"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Covid19 = /*#__PURE__*/function (_React$Component) {
  _inherits(Covid19, _React$Component);

  var _super = _createSuper(Covid19);

  function Covid19() {
    var _this;

    _classCallCheck(this, Covid19);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: [],
      dataChile: [],
      source: "",
      updated: ""
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData", function () {
      _axios["default"].all([_axios["default"].get("/data.json"), _axios["default"].get("/data_country.json")]).then(_axios["default"].spread(function () {
        for (var _len2 = arguments.length, resp = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          resp[_key2] = arguments[_key2];
        }

        var results = resp[0].data;
        var data = results.data,
            source = results.source,
            updated = results.updated;
        var dates = data.map(function (d) {
          return d.fecha;
        }).sort(function (a, b) {
          return b > a ? 1 : -1;
        });
        var latest = new Date(dates[0]);
        latest.setDate(latest.getDate() + 3);
        var dataChile = resp[1].data.data;

        _this.setState({
          data: data,
          dataChile: dataChile,
          source: source,
          updated: updated,
          latest: latest
        });
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.fetchData();
    });

    return _this;
  }

  _createClass(Covid19, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "page covid19"
      }, /*#__PURE__*/_react["default"].createElement(_Section["default"], {
        title: "Casos por Regi\xF3n"
      }, /*#__PURE__*/_react["default"].createElement(_ConfirmedCases["default"], this.state), /*#__PURE__*/_react["default"].createElement(_ConfirmedPerCapita["default"], this.state), /*#__PURE__*/_react["default"].createElement(_ConfirmedPerDay["default"], this.state), /*#__PURE__*/_react["default"].createElement(_InternationalComparison["default"], this.state)), /*#__PURE__*/_react["default"].createElement(_Section["default"], {
        title: "PREGUNTAS FRECUENTES"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "faq-escalas",
        className: "faq-item"
      }, /*#__PURE__*/_react["default"].createElement("p", null, "Crecimiento exponencial y escalas logar\xEDtmicas \xBFQu\xE9 es el crecimiento exponencial? \xBFC\xF3mo se relaciona con el uso de escalas logar\xEDtmicas?"), /*#__PURE__*/_react["default"].createElement("p", null, "Al comienzo de una epidemia, esta presenta un crecimiento exponencial, es decir, el n\xFAmero de contagiados se multiplica seg\xFAn un factor determinado, en lugar de sumar."), /*#__PURE__*/_react["default"].createElement("p", null, "Comparemos el crecimiento lineal que agrega 10 en cada paso de tiempo con el crecimiento exponencial que se multiplica por 2."), /*#__PURE__*/_react["default"].createElement("p", null, "Una secuencia de crecimiento lineal que agrega 10 en cada paso de tiempo se ve as\xED:"), /*#__PURE__*/_react["default"].createElement("pre", null, "0, 10, 20, 30, 40, 50, 60, 70, 80, 100 ..."), /*#__PURE__*/_react["default"].createElement("p", null, "Mientras que la secuencia exponencial que se multiplica por 2 en cada paso de tiempo se ve as\xED:"), /*#__PURE__*/_react["default"].createElement("pre", null, "1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ..."), /*#__PURE__*/_react["default"].createElement("p", null, "Al principio, el crecimiento lineal parece m\xE1s r\xE1pido (20 es mucho mayor que 4), pero el crecimiento lineal no se acelera. Agrega la misma cantidad cada vez."), /*#__PURE__*/_react["default"].createElement("p", null, " ", "El crecimiento exponencial se acelera, agregando m\xE1s en cada paso de tiempo, por lo que puede \"explotar\" en cualquier momento."), /*#__PURE__*/_react["default"].createElement("p", null, "Despu\xE9s de 10 pasos, el crecimiento lineal (+10) nos lleva a 100. El crecimiento exponencial (x2) nos lleva a (1,024). Despu\xE9s de 20 pasos, el crecimiento lineal solo nos lleva a 200 y el crecimiento exponencial supera el mill\xF3n."), /*#__PURE__*/_react["default"].createElement("p", null, "El crecimiento exponencial es tan r\xE1pido que para apreciarlo mejor es necesario usar escalas logar\xEDtmicas. Estas son escalas que tambi\xE9n crecen por m\xFAltiplos. Por ejemplo, una escala logar\xEDtmica entre 1 y 1.000.000 va de 1 a 10, de 10 a 100, de 100 a 1.000, de 1.000 a 10.000, de 10.000 a 100.000, y de 100.000 a 1.000.000. Esta es una escala logar\xEDtmica en base 10, porque se multiplica por diez cada vez. Lo que muestra esta escala es que, en el crecimiento exponencial, 1.000 est\xE1 a medio camino de 1.000.000. Por eso es importante detener el crecimiento exponencial incluso si los n\xFAmeros parecen peque\xF1os. El mismo n\xFAmero de pasos que te llevan de 1 a 1.000 te lleva de 1.000 a 1.000.000."), /*#__PURE__*/_react["default"].createElement("p", null, "Estrictamente hablando, los procesos epid\xE9micos son solo exponenciales desde el principio, cuando el n\xFAmero de casos es peque\xF1o en comparaci\xF3n con el tama\xF1o de la poblaci\xF3n u otros factores limitantes. Luego, el crecimiento se desvanece, ya sea porque la propagaci\xF3n se generaliz\xF3 o porque otros factores, como el distanciamiento f\xEDsico o la inmunizaci\xF3n, reducen la velocidad de propagaci\xF3n. Para obtener m\xE1s informaci\xF3n sobre las formas funcionales b\xE1sicas de propagaci\xF3n de epidemias, puedes ver", " ", /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.youtube.com/watch?v=Kas0tIxDvrg"
      }, "este"), "video preparado por el CDC (Centros para el Control y la Prevenci\xF3n de Enfermedades\u200B en EE.UU)."))));
    }
  }]);

  return Covid19;
}(_react["default"].Component);

exports["default"] = Covid19;