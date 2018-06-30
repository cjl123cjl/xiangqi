(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f6e17asYGFK0qx4UuuX8swZ', 'game', __filename);
// Script/game.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        childList: [],
        cellprefab: cc.Prefab,
        startpos: cc.Node
    },

    onLoad: function onLoad() {
        this.createMans(cc.abs.gamedata.initMap);
    },
    createMans: function createMans(map) {
        //生成map里面有的棋子
        for (var i = 0; i < map.length; i++) {
            for (var n = 0; n < map[i].length; n++) {
                var key = map[i][n];
                if (key) {
                    var cell = cc.instantiate(this.cellprefab); // 创建节点
                    cell.getComponent("cell").init(key, n, i);
                    cell.parent = this.startpos;
                    this.childList.push(cell);
                }
            }
        }
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
        //# sourceMappingURL=game.js.map
        