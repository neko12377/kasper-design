"use strict";
exports.__esModule = true;
exports.CopyButton = void 0;
var react_1 = require("react");
var ButtonWithRef_1 = require("components/atom/ButtonWithRef");
var CopyButton = function (props) {
    var handleClick = function (targetRef) {
        var _a;
        var text = (_a = targetRef.current.innerText) !== null && _a !== void 0 ? _a : "";
        navigator.clipboard.writeText(text).then();
    };
    var handleHover = function (buttonRef) {
        buttonRef.current.style.backgroundColor = "#52c8f9";
        buttonRef.current.style.border = "1px solid #35bff8";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#ffffff";
    };
    var handleLeave = function (buttonRef) {
        buttonRef.current.style.backgroundColor = "none";
        buttonRef.current.style.border = "solid 1px #b6b6b6";
        buttonRef.current.style.backgroundImage =
            "linear-gradient(to top, #f7f7f7, #ffffff)";
        buttonRef.current.style.color = "#5e5e5e";
    };
    var handlePress = function (buttonRef) {
        buttonRef.current.style.backgroundColor = "#36a9fb";
        buttonRef.current.style.border = "solid 1px #35bff8";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#ffffff";
    };
    var handleUp = function (buttonRef) {
        buttonRef.current.style.backgroundColor = "#52c8f9";
        buttonRef.current.style.border = "1px solid #35bff8";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#ffffff";
    };
    return (react_1["default"].createElement(ButtonWithRef_1.ButtonWithRef, { backgroundImage: "linear-gradient(to top, #f7f7f7, #ffffff)", backgroundColor: "none", borderColor: "#b6b6b6", borderWidth: 1, borderStyle: "solid", color: "#5e5e5e", handleClick: function () { return handleClick(props.targetRef); }, ref: props.buttonRef, handleHover: function () { return handleHover(props.buttonRef); }, handleLeave: function () { return handleLeave(props.buttonRef); }, handlePress: function () { return handlePress(props.buttonRef); }, handleUp: function () { return handleUp(props.buttonRef); } }, props.children));
};
exports.CopyButton = CopyButton;
