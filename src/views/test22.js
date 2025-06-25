"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _vue = require("vue");

var lineImgRequire = require("./line.png");

var _default = (0, _vue.defineComponent)({
    setup: function setup() {
        var state = (0, _vue.reactive)({
            loading: false
        }); // 图片加载完成回调

        function imgLoad() {
            console.log("@cc imgLoad");
            state.loading = true;
        }

        return function () {
            console.log("@cc lineImgRequire", lineImgRequire);
            return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("img", {
                "style": {
                    display: "none"
                },
                "src": lineImgRequire,
                "onLoad": imgLoad
            }, null), (0, _vue.createTextVNode)("loading:"), state.loading ? "true" : "false"]);
        };
    }
});

exports.default = _default;
