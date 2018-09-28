/**背景层 Y轴反转*/
class backgroundScene extends egret.DisplayObjectContainer{
    private shaps:egret.Shape[];
    private backShaps:egret.Shape[];
    private shapeW:number=50;//格子
    private shapeH:number=50;//格子
    private lineNum:number;
    private columnNum:number;
    private str1:string;
    private str2:string;
    private str3:string;
    private str4:string;
    public seletPtArr:number[]=[];
    constructor(){
        super();
        this.str1="new Pt is :";
        this.str2=",";
        this.str3="by TOUCH_BEGIN";
        this.str4="by TOUCH_END";
        this.initScene();
        this.touchChildren=true;
        this.touchEnabled=false;
    }
    private initScene(){
        var lineNum:number=Math.floor(mainScene.sceneW/this.shapeW);
        var columnNum:number=Math.floor(mainScene.sceneH/this.shapeH);
        this.lineNum=lineNum;
        this.columnNum=columnNum;
        var shap:egret.Shape;
        var backShap:egret.Shape;
        this.shaps=[];
        this.backShaps=[];
        for(let i=0;i<columnNum;i++){
            for(let j=0;j<lineNum;j++){
                backShap=new egret.Shape();
                backShap.touchEnabled=false;
                backShap.alpha=0.5;
                shap=new egret.Shape();
                shap["coordinateX"]=j;
                shap["coordinateY"]=i;
                shap["onChoice"]=false;
                this.addChild(shap);
                this.addChild(backShap);
                this.shaps.push(shap);
                this.backShaps.push(backShap);
                var pass:boolean=Math.floor(Math.random()*8)==7;//1/8是障碍物
                if(pass){
                    shap.touchEnabled=false;
                    shap.graphics.lineStyle(2, 0x454545 );
                    shap.graphics.beginFill(0x919191,1);
                    shap.graphics.drawRect(j*this.shapeW,i*this.shapeH,this.shapeW,this.shapeH);
                    shap.graphics.endFill();
                    backShap.graphics.lineStyle(2, 0x919191);
                    backShap.graphics.beginFill(0x000000,0.5);
                    backShap.graphics.drawRect(j*this.shapeW,i*this.shapeH,this.shapeW,this.shapeH);
                    backShap.graphics.endFill();
                }else{
                    shap.touchEnabled=true;
                    shap.graphics.lineStyle(2, 0x454545 );
                    shap.graphics.beginFill(0xFFFFFF,1);
                    shap.graphics.drawRect(j*this.shapeW,i*this.shapeH,this.shapeW,this.shapeH);
                    shap.graphics.endFill();
                    backShap.graphics.lineStyle(2, 0x454545 );
                    backShap.graphics.beginFill(0x000000,0.5);
                    backShap.graphics.drawRect(j*this.shapeW,i*this.shapeH,this.shapeW,this.shapeH);
                    backShap.graphics.endFill();
                }
                (function(shap,thisObj){
                    shap.addEventListener(egret.TouchEvent.TOUCH_TAP,thisObj.onEnd,thisObj);
                }(shap,this)) 
            }
        }
    }
    private onEnd(evt:egret.TouchEvent){
        var obj:any=evt.target;
        if(obj.onChoice){
            this.backShaps[obj.coordinateX+obj.coordinateY*this.lineNum].alpha=0.5;
            obj.onChoice=false;
            this.seletPtArr.shift();
        }else{
            this.checkArr();
            obj.onChoice=true;
            this.seletPtArr.push(obj.coordinateX+obj.coordinateY*this.lineNum);
            this.backShaps[obj.coordinateX+obj.coordinateY*this.lineNum].alpha=1;
        }
        console.log(this.str1+obj.coordinateX+this.str2+obj.coordinateY+this.str4);
    }
    private checkArr():void{
        if(this.seletPtArr.length>=2){
            var pt=this.seletPtArr.shift();
            this.backShaps[pt].alpha=0.5;
            this.backShaps[pt]["onChoice"]=false;
        }
    }
}