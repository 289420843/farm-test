"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _vue = require("vue");

var _default = (0, _vue.defineComponent)({
    setup: function setup() {
        var state = (0, _vue.reactive)({
            loading: false
        });
        setTimeout(function () {
            state.loading = true;
        }, 500);
        return function () {
            return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("span", null, ["loading:".concat(state.loading ? "true" : "false")])]);
        };
    }
});

exports.default = _default;
