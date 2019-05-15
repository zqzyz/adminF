"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./webpart"));
myLib();
function render() {
    new Vue({
        el: "#app",
        template: "<h1>h1</h1>"
    });
}
exports.render = render;
//# sourceMappingURL=index.js.map