"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MinuteTimer = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledMinuteTimer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 155px;\n    height: 44px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 60px;\n    color: #8762d2;\n"], ["\n    width: 155px;\n    height: 44px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 60px;\n    color: #8762d2;\n"])));
exports.MinuteTimer = react_1["default"].memo(function (props) {
    var _a = props.leftTime.split(":"), minute = _a[0], second = _a[1];
    var _b = react_1.useState(parseInt(minute)), currentMinute = _b[0], setCurrentMinute = _b[1];
    var _c = react_1.useState(parseInt(second)), currentSecond = _c[0], setCurrentSecond = _c[1];
    var countdown = react_1.useCallback(function () {
        var minuteCountdown = function () {
            currentMinute > 0 &&
                currentSecond === 0 &&
                setCurrentMinute(currentMinute - 1);
        };
        var secondCountdown = function () {
            currentMinute >= 0 &&
                currentSecond > 0 &&
                setCurrentSecond(currentSecond - 1);
            currentMinute > 0 && currentSecond === 0 && setCurrentSecond(59);
        };
        setTimeout(function () {
            minuteCountdown();
            secondCountdown();
        }, 1000);
    }, [currentSecond]);
    var formatTime = react_1.useCallback(function () {
        var minuteStr = currentMinute < 10
            ? "0" + currentMinute.toString()
            : currentMinute.toString();
        var secondStr = currentSecond < 10
            ? "0" + currentSecond.toString()
            : currentSecond.toString();
        return [minuteStr, secondStr];
    }, [currentMinute, currentSecond]);
    countdown();
    return (react_1["default"].createElement(StyledMinuteTimer, null, formatTime()[0] + ":" + formatTime()[1]));
});
var templateObject_1;
