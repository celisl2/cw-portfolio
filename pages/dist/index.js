"use strict";
exports.__esModule = true;
var Header_1 = require("../components/Header");
var Header_module_scss_1 = require("../styles/Header.module.scss");
var Slider_1 = require("../components/Slider");
var sliderSource = [
    { src: './../public/assets/accordion/lc.JPG', alt: 'laura' },
    { src: '/../public/assets/accordion/neck.jpg', alt: 'neck' }
];
function Home() {
    return (React.createElement("div", { className: Header_module_scss_1["default"].container },
        React.createElement(Header_1["default"], null),
        React.createElement(Slider_1["default"], { sources: sliderSource })));
}
exports["default"] = Home;
