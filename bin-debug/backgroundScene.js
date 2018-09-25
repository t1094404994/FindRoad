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
        _this.shapeW = 50; //格子
        _this.shapeH = 50; //格子
        _this.seletPtArr = [];
        _this.str1 = "new Pt is :";
        _this.str2 = ",";
        _this.str3 = "by TOUCH_BEGIN";
        _this.str4 = "by TOUCH_END";
        _this.initScene();
        _this.touchChildren = true;
        _this.touchEnabled = false;
        return _this;
    }
    backgroundScene.prototype.initScene = function () {
        var lineNum = Math.floor(mainScene.sceneW / this.shapeW);
        var columnNum = Math.floor(mainScene.sceneH / this.shapeH);
        this.lineNum = lineNum;
        this.columnNum = columnNum;
        var shap;
        var backShap;
        this.shaps = [];
        this.backShaps = [];
        for (var i = 0; i < columnNum; i++) {
            for (var j = 0; j < lineNum; j++) {
                backShap = new egret.Shape();
                backShap.touchEnabled = false;
                backShap.alpha = 0.5;
                shap = new egret.Shape();
                shap["coordinateX"] = j;
                shap["coordinateY"] = i;
                shap["onChoice"] = false;
                this.addChild(shap);
                this.addChild(backShap);
                this.shaps.push(shap);
                this.backShaps.push(backShap);
                var pass = Math.floor(Math.random() * 8) == 7; //1/8是障碍物
                if (pass) {
                    shap.touchEnabled = false;
                    shap.graphics.lineStyle(2, 0x454545);
                    shap.graphics.beginFill(0x919191, 1);
                    shap.graphics.drawRect(j * this.shapeW, i * this.shapeH, this.shapeW, this.shapeH);
                    shap.graphics.endFill();
                    backShap.graphics.lineStyle(2, 0x919191);
                    backShap.graphics.beginFill(0x000000, 0.5);
                    backShap.graphics.drawRect(j * this.shapeW, i * this.shapeH, this.shapeW, this.shapeH);
                    backShap.graphics.endFill();
                }
                else {
                    shap.touchEnabled = true;
                    shap.graphics.lineStyle(2, 0x454545);
                    shap.graphics.beginFill(0xFFFFFF, 1);
                    shap.graphics.drawRect(j * this.shapeW, i * this.shapeH, this.shapeW, this.shapeH);
                    shap.graphics.endFill();
                    backShap.graphics.lineStyle(2, 0x454545);
                    backShap.graphics.beginFill(0x000000, 0.5);
                    backShap.graphics.drawRect(j * this.shapeW, i * this.shapeH, this.shapeW, this.shapeH);
                    backShap.graphics.endFill();
                }
                (function (shap, thisObj) {
                    shap.addEventListener(egret.TouchEvent.TOUCH_TAP, thisObj.onEnd, thisObj);
                }(shap, this));
            }
        }
    };
    backgroundScene.prototype.onEnd = function (evt) {
        var obj = evt.target;
        if (obj.onChoice) {
            this.backShaps[obj.coordinateX + obj.coordinateY * this.lineNum].alpha = 0.5;
            obj.onChoice = false;
            this.seletPtArr.shift();
        }
        else {
            this.checkArr();
            obj.onChoice = true;
            this.seletPtArr.push(obj.coordinateX + obj.coordinateY * this.lineNum);
            this.backShaps[obj.coordinateX + obj.coordinateY * this.lineNum].alpha = 1;
        }
        console.log(this.str1 + obj.coordinateX + this.str2 + obj.coordinateY + this.str4);
    };
    backgroundScene.prototype.checkArr = function () {
        if (this.seletPtArr.length >= 2) {
            var pt = this.seletPtArr.shift();
            this.backShaps[pt].alpha = 0.5;
            this.backShaps[pt]["onChoice"] = false;
        }
    };
    return backgroundScene;
}(egret.DisplayObjectContainer));
__reflect(backgroundScene.prototype, "backgroundScene");
