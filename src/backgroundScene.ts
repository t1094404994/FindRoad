/**背景层 Y轴反转*/
class backgroundScene extends egret.DisplayObjectContainer{
    private shaps:egret.Shape[];
    private shapeW:number=20;//格子宽
    private shapeH:number=20;//格子高
    constructor(){
        super();
        this.initScene();
    }
    private initScene(){
        var lineNum:number=Math.floor(mainScene.sceneW/this.shapeW);
        var columnNum:number=Math.floor(mainScene.sceneH/this.shapeH);
        var shap:egret.Shape;
        this.shaps=[];
        for(let i=0;i<columnNum;i++){
            for(let j=0;j<lineNum;j++){
                shap=new egret.Shape();
                shap.graphics.lineStyle(2, 0x454545 );
                shap.graphics.beginFill(0xFFFFFF,1);
                shap.graphics.drawRect(j*this.shapeW,i*this.shapeH,this.shapeW,this.shapeH);
                shap.graphics.endFill();
                shap["coordinateX"]=j;
                shap["coordinateY"]=i;
                this.addChild(shap);
                this.shaps.push(shap);
            }
        }
    }
}