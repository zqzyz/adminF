"use strict";
exports.__esModule = true;
var ramda_1 = require("ramda");
var sys;
(function (sys) {
    sys.root = window;
    sys.sign = ramda_1.replace(/\./g, "_")(ramda_1.last(ramda_1.split("/")(window.location.pathname)));
})(sys = exports.sys || (exports.sys = {}));
//# sourceMappingURL=system.js.map