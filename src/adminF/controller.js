"use strict";
exports.__esModule = true;
var ControllerOption = (function () {
    function ControllerOption(option) {
        this.id = option && option.id;
    }
    return ControllerOption;
}());
var Controller = (function () {
    function Controller(option) {
        this.option = new ControllerOption(option);
        this.id = this.option.id;
    }
    Controller.prototype.init = function () {
        return "Hello, " + this.id;
    };
    Controller.prototype.setFromData = function (data) {
    };
    Controller.prototype.getFromData = function () {
    };
    Controller.prototype.formData = function (data) {
        if (data) {
        }
    };
    Controller.create = function (option) {
        return new Controller(option);
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map