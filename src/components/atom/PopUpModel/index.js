"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PopUpModel = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledPopUpModel = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    position: absolute;\n    left: ", "px;\n    top: ", "px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    position: absolute;\n    left: ", "px;\n    top: ", "px;\n"])), function (props) { var _a; return (_a = props.width) !== null && _a !== void 0 ? _a : 200; }, function (props) { var _a; return (_a = props.height) !== null && _a !== void 0 ? _a : 55; }, function (props) { var _a; return (_a = props.backgroundColor) !== null && _a !== void 0 ? _a : "#fbfcfd"; }, function (props) { var _a, _b; return (_a = props.left) !== null && _a !== void 0 ? _a : window.innerWidth / 2 - ((_b = props.width) !== null && _b !== void 0 ? _b : 200) / 2; }, function (props) { var _a, _b; return (_a = props.top) !== null && _a !== void 0 ? _a : window.innerHeight / 2 - ((_b = props.height) !== null && _b !== void 0 ? _b : 55) / 2; });
var MessageSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: ", ";\n    width: 100%;\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: ", ";\n    width: 100%;\n"])), function (props) { return (props.isBottomButton ? "65%" : "100%"); });
var PopUpModel = function (props) {
    var _a, _b, _c;
    return (react_1["default"].createElement(StyledPopUpModel, { width: props.width, height: props.height, backgroundColor: props.backgroundColor, left: props.left, top: props.top }, (_a = props.children) !== null && _a !== void 0 ? _a : (react_1["default"].createElement(MessageSection, null, (_b = props.icon) !== null && _b !== void 0 ? _b : null, (_c = props.message) !== null && _c !== void 0 ? _c : "Pop Up!"))));
};
exports.PopUpModel = PopUpModel;
var templateObject_1, templateObject_2;
