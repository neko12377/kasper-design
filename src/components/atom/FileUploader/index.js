"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.FileUploader = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 400px;\n  height: 100px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  column-gap: 10px;\n"], ["\n  width: 400px;\n  height: 100px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  column-gap: 10px;\n"])));
var UploadImgBlock = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  height: auto;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  height: auto;\n"])));
var UploadImgInput = styled_components_1["default"].input.attrs({
    type: "file",
    id: "uploadInput",
    accept: "image/jpg, image/jpeg, image/tif, image/tiff, image/png"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
var UploadImgInputLabel = styled_components_1["default"].label.attrs({ "for": "uploadInput" })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  height: 28px;\n  border: solid 1px #b6b6b6;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0 rgba(6, 0, 0, 0.2);\n  background-image: linear-gradient(to top, #f7f7f7, #ffffff);\n  color: #5e5e5e;\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: 400;\n  font-stretch: normal;\n  font-size: 14px;\n  line-height: normal;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #52c8f9;\n    border: 1px solid #35bff8;\n    background-image: none;\n    color: #ffffff;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  height: 28px;\n  border: solid 1px #b6b6b6;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0 rgba(6, 0, 0, 0.2);\n  background-image: linear-gradient(to top, #f7f7f7, #ffffff);\n  color: #5e5e5e;\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: 400;\n  font-stretch: normal;\n  font-size: 14px;\n  line-height: normal;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #52c8f9;\n    border: 1px solid #35bff8;\n    background-image: none;\n    color: #ffffff;\n  }\n"])));
var FileUploader = function (props) {
    var _a = react_1.useState(""), preview = _a[0], setPreview = _a[1];
    var pictPicture = function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        var fileReader = new FileReader();
        fileReader.addEventListener("load", function () {
            setPreview(fileReader.result);
        });
        file && fileReader.readAsDataURL(file);
    };
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(UploadImgBlock, { src: preview }),
        react_1["default"].createElement(UploadImgInput, { onChange: pictPicture }),
        react_1["default"].createElement(UploadImgInputLabel, null, "pick a picture")));
};
exports.FileUploader = FileUploader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
