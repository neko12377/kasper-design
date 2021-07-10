"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonWithRef = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledButton = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  border-style: ", ";\n  border-width: ", "px;\n  border-color: ", ";\n  cursor: pointer;\n  background-color: ", ";\n  background-image: ", ";\n  color: ", ";\n  transition: background-color 0.3s;\n  &:hover {\n    ", "\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  border-style: ", ";\n  border-width: ", "px;\n  border-color: ", ";\n  cursor: pointer;\n  background-color: ", ";\n  background-image: ", ";\n  color: ", ";\n  transition: background-color 0.3s;\n  &:hover {\n    ", "\n  }\n"])), function (props) { var _a; return (_a = props.width) !== null && _a !== void 0 ? _a : "80px"; }, function (props) { var _a; return (_a = props.height) !== null && _a !== void 0 ? _a : "28px"; }, function (props) { var _a; return (_a = props.borderRadius) !== null && _a !== void 0 ? _a : "4px"; }, function (props) { var _a; return (_a = props.borderShadow) !== null && _a !== void 0 ? _a : "0px 2px 5px 0 rgba(0, 0, 0, 0.28)"; }, function (props) { var _a; return (_a = props.borderStyle) !== null && _a !== void 0 ? _a : "solid"; }, function (props) { var _a; return (_a = props.borderWidth) !== null && _a !== void 0 ? _a : "1"; }, function (props) { var _a; return (_a = props.borderColor) !== null && _a !== void 0 ? _a : "#fc5c4f"; }, function (props) { var _a; return (_a = props.backgroundColor) !== null && _a !== void 0 ? _a : "#ff5243"; }, function (props) { var _a; return (_a = props.backgroundImage) !== null && _a !== void 0 ? _a : "none"; }, function (props) { var _a; return (_a = props.color) !== null && _a !== void 0 ? _a : "#fff"; }, function (props) { return props.hoverObject; });
exports.ButtonWithRef = react_1["default"].forwardRef(function (props, ref) {
    var handlePress = function () {
        props.handlePress && props.handlePress();
    };
    var handleUp = function () {
        props.handleUp && props.handleUp();
    };
    var handleLeave = function () {
        props.handleLeave && props.handleLeave();
    };
    var handleHover = function () {
        props.handleHover && props.handleHover();
    };
    var handleClick = function () {
        props.handleClick && props.handleClick();
    };
    return (react_1["default"].createElement(StyledButton, { backgroundColor: props.backgroundColor, backgroundImage: props.backgroundImage, color: props.color, borderColor: props.borderColor, borderWidth: props.borderWidth, borderStyle: props.borderStyle, borderShadow: props.borderShadow, borderRadius: props.borderRadius, height: props.height, width: props.width, onMouseDown: function () { return handlePress(); }, onMouseUp: function () { return handleUp(); }, onMouseLeave: function () { return handleLeave(); }, onMouseOver: function () { return handleHover(); }, onClick: function () { return handleClick(); }, ref: ref }, props.children));
});
var templateObject_1;
