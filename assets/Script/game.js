
cc.Class({
    extends: cc.Component,

    properties: {
        childList:[],
        cellprefab:cc.Prefab,
        startpos:cc.Node,
    },

    onLoad:function () {
        this.createMans(cc.abs.gamedata.initMap);
    },
    createMans:function (map) {
        //生成map里面有的棋子
        for (var i=0; i<map.length; i++){
            for (var n=0; n<map[i].length; n++){
                var key = map[i][n];
                if (key){
                    let cell = cc.instantiate(this.cellprefab); // 创建节点
                    cell.getComponent("cell").init(key,n,i);
                    cell.parent = this.startpos;
                    this.childList.push(cell)
                }
            }
        }
    },
});
