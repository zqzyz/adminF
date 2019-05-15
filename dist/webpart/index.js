"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./webpart"));
var Vue = require("vue")["default"];
function render() {
    console.log($("#app2").length);
    new Vue({
        el: '#app',
        template: "<h1>{{aaa}}</h1>",
        data: {
            aaa: 1111
        }
    });
}
exports.render = render;
//# sourceMappingURL=index.js.map