cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // use this for initialization
    onLoad: function () {
       cc.abs = {};
       var gamedata = require('gamedata');
       cc.abs.gamedata = new gamedata();
       cc.abs.gamedata.init();
       
    },

    // called every frame
    update: function (dt) {

    },

    onPlay:function(){
        cc.director.loadScene('game');
    },
});
