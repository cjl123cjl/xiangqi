"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'main');
// Script/main.js

'use strict';

cc.Class({
   extends: cc.Component,

   properties: {},

   // use this for initialization
   onLoad: function onLoad() {
      cc.abs = {};
      var gamedata = require('gamedata');
      cc.abs.gamedata = new gamedata();
      cc.abs.gamedata.init();
   },

   // called every frame
   update: function update(dt) {},

   onPlay: function onPlay() {
      cc.director.loadScene('game');
   }
});

cc._RF.pop();