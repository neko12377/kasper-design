"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ProcessBar = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledProcessBar = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])), function (props) { var _a; return (_a = props.width) !== null && _a !== void 0 ? _a : 538; }, function (props) {
    return props.stepSignSize && props.fontSize
        ? props.stepSignSize + props.fontSize + 10
        : 46;
});
var DescriptionGroup = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  display: flex;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  display: flex;\n"])), function (props) {
    return props.amountOfStep && props.barLength && props.stepSignSize
        ? props.stepSignSize * props.amountOfStep +
            props.barLength * (props.amountOfStep - 1) +
            props.barLength
        : 688;
}, function (props) { return (props.fontSize ? props.fontSize + 10 : 24); });
var StepDescription = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  font-size: ", "px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n"], ["\n  width: ", "px;\n  height: ", "px;\n  font-size: ", "px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n"])), function (props) {
    return props.amountOfStep && props.barLength && props.stepSignSize
        ? (props.stepSignSize * props.amountOfStep +
            props.barLength * (props.amountOfStep - 1) +
            props.barLength) /
            props.amountOfStep
        : 172;
}, function (props) { var _a; return (_a = props.fontSize) !== null && _a !== void 0 ? _a : 14; }, function (props) { var _a; return (_a = props.fontSize) !== null && _a !== void 0 ? _a : 14; }, function (props) { var _a; return (_a = props.color) !== null && _a !== void 0 ? _a : "#36a9fb"; });
var BarGroup = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  width: 100%;\n  height: ", "px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"])), function (props) { var _a; return (_a = props.stepSignSize) !== null && _a !== void 0 ? _a : 22; });
var StepSignAndBarGroup = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var StyledProcessBarStepSection = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  background-color: ", ";\n  color: ", ";\n  font-size: ", "px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  background-color: ", ";\n  color: ", ";\n  font-size: ", "px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) { var _a; return (_a = props.size) !== null && _a !== void 0 ? _a : 22; }, function (props) { var _a; return (_a = props.size) !== null && _a !== void 0 ? _a : 22; }, function (props) { return (props.shape === "square" ? "2px" : "50%"); }, function (props) { var _a; return (_a = props.backgroundColor) !== null && _a !== void 0 ? _a : "#36a9fa"; }, function (props) { var _a; return (_a = props.color) !== null && _a !== void 0 ? _a : "white"; }, function (props) { var _a; return (_a = props.fontSize) !== null && _a !== void 0 ? _a : 14; });
var StyledProcessBarBarSection = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n"])), function (props) { var _a; return (_a = props.barLength) !== null && _a !== void 0 ? _a : 150; }, function (props) { var _a; return (_a = props.height) !== null && _a !== void 0 ? _a : 2; }, function (props) { var _a; return (_a = props.backgroundColor) !== null && _a !== void 0 ? _a : "#36a9fa"; });
exports.ProcessBar = react_1["default"].memo(function (props) {
    var _a = react_1.useState([
        "步驟一",
        "步驟二",
        "步驟三四五六七八九十",
        "完成",
    ]), descriptions = _a[0], setDescriptions = _a[1];
    react_1.useEffect(function () {
        var _a;
        setDescriptions((_a = props.descriptions) !== null && _a !== void 0 ? _a : [
            "步驟一",
            "步驟二",
            "步驟三四五六七八九十",
            "完成",
        ]);
    }, [props.descriptions]);
    var _b = react_1.useState(["1", "2", "3", "✓"]), stepSigns = _b[0], setStepsSign = _b[1];
    react_1.useEffect(function () {
        var _a;
        setStepsSign((_a = props.stepSigns) !== null && _a !== void 0 ? _a : ["1", "2", "3", "✓"]);
    }, [props.stepSigns]);
    var _c = react_1.useState(150), barLength = _c[0], setBarLength = _c[1];
    react_1.useEffect(function () {
        if (props.width && props.stepSignSize && props.stepSigns) {
            var barLength_1 = (props.width - props.stepSignSize * props.stepSigns.length) /
                (props.stepSigns.length - 1);
            setBarLength(barLength_1);
        }
    }, [props.width, props.stepSignSize]);
    var toDecideColor = react_1.useCallback(function (index) {
        return props.currentProcessingStep &&
            props.currentProcessingStep >= index + 1
            ? props.processingStepColor
            : props.notProcessedYetStepColor;
    }, [props.currentProcessingStep]);
    return (react_1["default"].createElement(StyledProcessBar, { width: props.width, stepSignSize: props.stepSignSize, fontSize: props.fontSize },
        react_1["default"].createElement(DescriptionGroup, { stepSignSize: props.stepSignSize, barLength: barLength, amountOfStep: props.descriptions && props.descriptions.length, fontSize: props.fontSize }, descriptions.map(function (description, index) {
            return (react_1["default"].createElement(StepDescription, { key: "description_" + index, fontSize: props.fontSize, barLength: barLength, amountOfStep: props.stepSigns && props.stepSigns.length, stepSignSize: props.stepSignSize, color: toDecideColor(index) }, description));
        })),
        react_1["default"].createElement(BarGroup, { stepSignSize: props.stepSignSize }, stepSigns &&
            stepSigns.map(function (stepSign, index) {
                return index < stepSigns.length - 1 ? (react_1["default"].createElement(StepSignAndBarGroup, { key: "step_" + index },
                    react_1["default"].createElement(StyledProcessBarStepSection, { size: props.stepSignSize, fontSize: props.fontSize, backgroundColor: toDecideColor(index) }, stepSign),
                    react_1["default"].createElement(StyledProcessBarBarSection, { barLength: barLength, backgroundColor: toDecideColor(index), height: props.barHeight }))) : (react_1["default"].createElement(StepSignAndBarGroup, { key: "step_" + index },
                    react_1["default"].createElement(StyledProcessBarStepSection, { size: props.stepSignSize, backgroundColor: toDecideColor(index) }, stepSign)));
            }))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
