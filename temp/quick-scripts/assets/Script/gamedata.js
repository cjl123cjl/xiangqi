(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gamedata.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '31874fFHr9PB6zZfNdM+kOz', 'gamedata', __filename);
// Script/gamedata.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    init: function init() {
        this.initMap = [['C0', 'M0', 'X0', 'S0', 'J0', 'S1', 'X1', 'M1', 'C1'], [,,,,,,,,], [, 'P0',,,,,, 'P1'], ['Z0',, 'Z1',, 'Z2',, 'Z3',, 'Z4'], [,,,,,,,,], [,,,,,,,,], ['z0',, 'z1',, 'z2',, 'z3',, 'z4'], [, 'p0',,,,,, 'p1'], [,,,,,,,,], ['c0', 'm0', 'x0', 's0', 'j0', 's1', 'x1', 'm1', 'c1']];
        this.keys = {
            "c0": "c", "c1": "c",
            "m0": "m", "m1": "m",
            "x0": "x", "x1": "x",
            "s0": "s", "s1": "s",
            "j0": "j",
            "p0": "p", "p1": "p",
            "z0": "z", "z1": "z", "z2": "z", "z3": "z", "z4": "z", "z5": "z",

            "C0": "c", "C1": "C",
            "M0": "M", "M1": "M",
            "X0": "X", "X1": "X",
            "S0": "S", "S1": "S",
            "J0": "J",
            "P0": "P", "P1": "P",
            "Z0": "Z", "Z1": "Z", "Z2": "Z", "Z3": "Z", "Z4": "Z", "Z5": "Z"
        };

        this.value = {

            //车价值
            c: [[206, 208, 207, 213, 214, 213, 207, 208, 206], [206, 212, 209, 216, 233, 216, 209, 212, 206], [206, 208, 207, 214, 216, 214, 207, 208, 206], [206, 213, 213, 216, 216, 216, 213, 213, 206], [208, 211, 211, 214, 215, 214, 211, 211, 208], [208, 212, 212, 214, 215, 214, 212, 212, 208], [204, 209, 204, 212, 214, 212, 204, 209, 204], [198, 208, 204, 212, 212, 212, 204, 208, 198], [200, 208, 206, 212, 200, 212, 206, 208, 200], [194, 206, 204, 212, 200, 212, 204, 206, 194]],

            //马价值
            m: [[90, 90, 90, 96, 90, 96, 90, 90, 90], [90, 96, 103, 97, 94, 97, 103, 96, 90], [92, 98, 99, 103, 99, 103, 99, 98, 92], [93, 108, 100, 107, 100, 107, 100, 108, 93], [90, 100, 99, 103, 104, 103, 99, 100, 90], [90, 98, 101, 102, 103, 102, 101, 98, 90], [92, 94, 98, 95, 98, 95, 98, 94, 92], [93, 92, 94, 95, 92, 95, 94, 92, 93], [85, 90, 92, 93, 78, 93, 92, 90, 85], [88, 85, 90, 88, 90, 88, 90, 85, 88]],

            //相价值
            x: [[0, 0, 20, 0, 0, 0, 20, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 23, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 20, 0, 0, 0, 20, 0, 0], [0, 0, 20, 0, 0, 0, 20, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [18, 0, 0, 0, 23, 0, 0, 0, 18], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 20, 0, 0, 0, 20, 0, 0]],

            //士价值
            s: [[0, 0, 0, 20, 0, 20, 0, 0, 0], [0, 0, 0, 0, 23, 0, 0, 0, 0], [0, 0, 0, 20, 0, 20, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 20, 0, 20, 0, 0, 0], [0, 0, 0, 0, 23, 0, 0, 0, 0], [0, 0, 0, 20, 0, 20, 0, 0, 0]],

            //奖价值
            j: [[0, 0, 0, 8888, 8888, 8888, 0, 0, 0], [0, 0, 0, 8888, 8888, 8888, 0, 0, 0], [0, 0, 0, 8888, 8888, 8888, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 8888, 8888, 8888, 0, 0, 0], [0, 0, 0, 8888, 8888, 8888, 0, 0, 0], [0, 0, 0, 8888, 8888, 8888, 0, 0, 0]],

            //炮价值
            p: [[100, 100, 96, 91, 90, 91, 96, 100, 100], [98, 98, 96, 92, 89, 92, 96, 98, 98], [97, 97, 96, 91, 92, 91, 96, 97, 97], [96, 99, 99, 98, 100, 98, 99, 99, 96], [96, 96, 96, 96, 100, 96, 96, 96, 96], [95, 96, 99, 96, 100, 96, 99, 96, 95], [96, 96, 96, 96, 96, 96, 96, 96, 96], [97, 96, 100, 99, 101, 99, 100, 96, 97], [96, 97, 98, 98, 98, 98, 98, 97, 96], [96, 96, 97, 99, 99, 99, 97, 96, 96]],

            //卒价值
            z: [[9, 9, 9, 11, 13, 11, 9, 9, 9], [19, 24, 34, 42, 44, 42, 34, 24, 19], [19, 24, 32, 37, 37, 37, 32, 24, 19], [19, 23, 27, 29, 30, 29, 27, 23, 19], [14, 18, 20, 27, 29, 27, 20, 18, 14], [7, 0, 13, 0, 16, 0, 13, 0, 7], [7, 0, 7, 0, 15, 0, 7, 0, 7], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
        };
        this.args = {
            //红子 中文/图片地址/阵营/权重
            'c': { text: "车", img: 'r_c', my: 1, bl: "c", value: this.value.c },
            'm': { text: "马", img: 'r_m', my: 1, bl: "m", value: this.value.m },
            'x': { text: "相", img: 'r_x', my: 1, bl: "x", value: this.value.x },
            's': { text: "仕", img: 'r_s', my: 1, bl: "s", value: this.value.s },
            'j': { text: "将", img: 'r_j', my: 1, bl: "j", value: this.value.j },
            'p': { text: "炮", img: 'r_p', my: 1, bl: "p", value: this.value.p },
            'z': { text: "兵", img: 'r_z', my: 1, bl: "z", value: this.value.z },

            //蓝子
            'C': { text: "車", img: 'b_c', my: -1, bl: "c", value: this.value.C },
            'M': { text: "馬", img: 'b_m', my: -1, bl: "m", value: this.value.M },
            'X': { text: "象", img: 'b_x', my: -1, bl: "x", value: this.value.X },
            'S': { text: "士", img: 'b_s', my: -1, bl: "s", value: this.value.S },
            'J': { text: "帅", img: 'b_j', my: -1, bl: "j", value: this.value.J },
            'P': { text: "炮", img: 'b_p', my: -1, bl: "p", value: this.value.P },
            'Z': { text: "卒", img: 'b_z', my: -1, bl: "z", value: this.value.Z }
        };
        //黑子为红字价值位置的倒置
        this.value.C = this.arr2Clone(this.value.c).reverse();
        this.value.M = this.arr2Clone(this.value.m).reverse();
        this.value.X = this.value.x;
        this.value.S = this.value.s;
        this.value.J = this.value.j;
        this.value.P = this.arr2Clone(this.value.p).reverse();
        this.value.Z = this.arr2Clone(this.value.z).reverse();
    },
    //二维数组克隆
    arr2Clone: function arr2Clone(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr[i] = arr[i].slice();
        }
        return newArr;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=gamedata.js.map
        