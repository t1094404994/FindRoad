var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**背景层 Y轴反转*/
var backgroundScene = (function (_super) {
    __extends(backgroundScene, _super);
    function backgroundScene() {
        var _this = _super.call(this) || this;
        _this.shapeW = 20; //格子宽
        _this.shapeH = 20; //格子高
        _this.initScene();
        return _this;
    }
    backgroundScene.prototype.initScene = function () {
        var lineNum = Math.floor(mainScene.sceneW / this.shapeW);
        var columnNum = Math.floor(mainScene.sceneH / this.shapeH);
        var shap;
        this.shaps = [];
        for (var i = 0; i < columnNum; i++) {
            for (var j = 0; j < lineNum; j++) {
                shap = new egret.Shape();
                shap.graphics.lineStyle(2, 0x454545);
                shap.graphics.beginFill(0xFFFFFF, 1);
                shap.graphics.drawRect(j * this.shapeW, i * this.shapeH, this.shapeW, this.shapeH);
                shap.graphics.endFill();
                shap["coordinateX"] = j;
                shap["coordinateY"] = i;
                this.addChild(shap);
                this.shaps.push(shap);
            }
        }
    };
    return backgroundScene;
}(egret.DisplayObjectContainer));
__reflect(backgroundScene.prototype, "backgroundScene");
