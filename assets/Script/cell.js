
cc.Class({
    extends: cc.Component,

    properties: {
        m_key:0,
        m_x:0,
        m_y:0,
        sprite:cc.Sprite,
        size:cc.v2(),
        spriteAlte:cc.SpriteAtlas,
    },

    init:function(key,x,y){
        this.m_key = key;
        this.m_x = x;
        this.m_y = y;
        this.pater = key.slice(0,1);
        var o=cc.abs.gamedata.args[this.pater]
        this.x = x||0;   
        this.y = y||0;
        this.key = key ;
        this.my = o.my;
        this.text = o.text;
        this.value = o.value;
        this.isShow = true;
        this.alpha = 1;
        this.ps = []; //着点

        this.sprite.spriteFrame = this.spriteAlte.getSpriteFrame(o.img);
        this.node.setPosition(this.size.x * x,this.size.y * y);
    },

});
