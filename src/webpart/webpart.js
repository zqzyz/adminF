"use strict";
exports.__esModule = true;
var ControllerOption = (function () {
    function ControllerOption() {
    }
    return ControllerOption;
}());
var a = 1;
var WebpartItem = (function () {
    function WebpartItem(option) {
        this.id = option && option.id;
    }
    return WebpartItem;
}());
exports.WebpartItem = WebpartItem;
var WebpartOption = (function () {
    function WebpartOption() {
    }
    return WebpartOption;
}());
var Webpart = (function () {
    function Webpart(ele) {
        this.container = ele;
        this.container.style.border = "1px solid red";
        this.container.innerText = "webpart 2 22";
        this.vueobj = new Vue({
            el: ele,
            data: {
                text: this.text
            },
            template: "<h1>{{text}}</h1>"
        });
    }
    Webpart.prototype.add = function (item) {
        this.list.push(item);
    };
    Webpart.prototype.del = function (item) {
    };
    Webpart.prototype.get = function (id) {
    };
    Webpart.prototype.update = function (item, id) {
        id = id || item.id;
    };
    return Webpart;
}());
exports.Webpart = Webpart;
//# sourceMappingURL=webpart.js.map