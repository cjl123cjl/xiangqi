"use strict";
cc._RF.push(module, 'f6e17asYGFK0qx4UuuX8swZ', 'game');
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