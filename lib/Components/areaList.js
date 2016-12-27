"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AreaList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("../Styles/areaList.sass");

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import $ from 'jquery';
// import 'imports?jQuery=jquery!owl.carousel';

// const areaList = [
// {"name": "學校專區", "img": "../res/t_p1.png"}]
var areaList = [{ "name": "學校專區", "img": "/res/t_p1.png" }, { "name": "員工餐廳專區", "img": "/res/n_p1.png" }, { "name": "賣場專區", "img": "/res/n_p2.png" }, { "name": "夜市專區", "img": "/res/n_p3.png" }, { "name": "飲冰品專區", "img": "/res/n_p4.png" }, { "name": "伴手禮專區", "img": "/res/n_p5.png" }, { "name": "連鎖餐廳專區", "img": "/res/t_p2.png" }];

var AreaList = exports.AreaList = function (_Component) {
	_inherits(AreaList, _Component);

	function AreaList() {
		_classCallCheck(this, AreaList);

		return _possibleConstructorReturn(this, (AreaList.__proto__ || Object.getPrototypeOf(AreaList)).apply(this, arguments));
	}

	_createClass(AreaList, [{
		key: "getBackgoundImage",
		value: function getBackgoundImage(img) {
			return {
				background: "url('" + img + "') no-repeat 50% 50%",
				backgroundSize: "cover"
			};
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "areaList" },
				areaList.map(function (obj, index) {
					return _react2.default.createElement(
						"div",
						{ className: "areaContainer", key: index, style: _this2.getBackgoundImage(obj.img) },
						_react2.default.createElement(
							"div",
							{ className: "areaName" },
							obj.name
						)
					);
				})
			);
		}
	}]);

	return AreaList;
}(_react.Component);