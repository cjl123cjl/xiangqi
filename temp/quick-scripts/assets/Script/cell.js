(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/cell.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '50dfecpPspLe4yDhpWqHtrO', 'cell', __filename);
// Script/cell.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        m_key: 0,
        m_x: 0,
        m_y: 0,
        sprite: cc.Sprite,
        size: cc.v2(),
        spriteAlte: cc.SpriteAtlas
    },

    init: function init(key, x, y) {
        this.m_key = key;
        this.m_x = x;
        this.m_y = y;
        this.pater = key.slice(0, 1);
        var o = cc.abs.gamedata.args[this.pater];
        this.x = x || 0;
        this.y = y || 0;
        this.key = key;
        this.my = o.my;
        this.text = o.text;
        this.value = o.value;
        this.isShow = true;
        this.alpha = 1;
        this.ps = []; //着点

        this.sprite.spriteFrame = this.spriteAlte.getSpriteFrame(o.img);
        this.node.setPosition(this.size.x * x, this.size.y * y);
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
        //# sourceMappingURL=cell.js.map
        