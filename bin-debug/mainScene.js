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
var mainScene = (function (_super) {
    __extends(mainScene, _super);
    function mainScene() {
        var _this = _super.call(this) || this;
        _this.createdScene();
        return _this;
    }
    /**初始化场景*/
    mainScene.prototype.createdScene = function () {
        this.backGround = new backgroundScene();
        this.addChild(this.backGround);
    };
    mainScene.sceneW = 800;
    mainScene.sceneH = 1200;
    return mainScene;
}(egret.DisplayObjectContainer));
__reflect(mainScene.prototype, "mainScene");
