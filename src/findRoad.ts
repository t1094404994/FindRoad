/**
 * A*寻路算法
*/
class FindRoad{
    private _obstacleArr:Point[]; //障碍
    private openArr:Point[]; //open
    private closeArr:Point[];//close
    private onPoint:Point; //初始点
    private moveToPoint:Point;//目标点
    constructor(){
        this.openArr=[];
        this.closeArr=[];
    }
    public set obstacleArr(arr:Point[]){
        this._obstacleArr=arr;
    }
    public toFind(goArr:Point[]):any{
        this.reset();
        this.onPoint=goArr[0];
        this.moveToPoint=goArr[1];
        var find:boolean=false;
        while(!find){
            var findArr:Point[];
            if(this.closeArr.length==0){
                this.closeArr.push(this.onPoint);
                this.sethg(this.onPoint,0);
                findArr=this.findLocalPt(this.onPoint);
                continue;
            }else{
                findArr=this.findLocalPt(this.closeArr[this.closeArr.length-1]);
            }
            if(findArr.length==0){
                break;
            }
            var num:number=1;
            var no:number=-1;
            var minH=backgroundScene.maxNum;
            var lastClose=this.closeArr[this.closeArr.length-1];
            while(num<=findArr.length){
                this.sethg(findArr[num-1],lastClose.G+1);
                if(findArr[num-1].F<minH){
                    minH=findArr[num-1].F;
                    no=num-1;
                }
                num++;
            }
            if(no>=0){
                this.closeArr.push(findArr[no]);
                if(findArr[no].H==1){
                    find=true;
                    this.closeArr.push(this.moveToPoint);
                }
            }
        }
        return this.closeArr;
    }
    public minX:number;
    public minY:number;
    public maxX:number;
    public maxY:number;
    /**附近的点*/
    private findLocalPt(Pt:Point):any{
        var Pts:Point[]=[];
        var pt:Point;
        if(Pt.x>this.minX){
            pt=new Point(Pt.x-1,Pt.y);
            Pts.push(pt);
        }
        if(Pt.x<this.maxX){
            pt=new Point(Pt.x+1,Pt.y);
            Pts.push(pt);
        }
        if(Pt.y>this.minY){
            pt=new Point(Pt.x,Pt.y-1);
            Pts.push(pt);
        }
        if(Pt.y<this.maxY){
            pt=new Point(Pt.x,Pt.y+1);
            Pts.push(pt);
        }
        var PtsArr:Point[]=[];
        for(let i=0;i<Pts.length;i++){
            if(!this.checkObstacle(Pts[i])&&!this.checkClose(Pts[i])){
                PtsArr.push(Pts[i]);
            }
        }
        return PtsArr;
    }
    /**检查*/
    private checkObstacle(Pt:Point):boolean{
        var bool:boolean=false;
        for(let i=0;i<this._obstacleArr.length;i++){
            if(this._obstacleArr[i].x==Pt.x&&this._obstacleArr[i].y==Pt.y){
                bool=true;
                break;
            }
        }
        return bool;
    }
    /**检查*/
    private checkClose(pt:Point):boolean{
        var bool:boolean=false;
        for(let i=0;i<this.closeArr.length;i++){
            if(this.closeArr[i].x==pt.x&&this.closeArr[i].y==pt.y){
                bool=true;
                break;
            }
        }
        return bool;
    }
    /**计算g和h值*/
    private sethg(point:Point,moveNum:number):number{
        point.G=moveNum;
        point.H=Math.abs(this.moveToPoint.x-point.x)+Math.abs(this.moveToPoint.y-point.y);
        return point.F;
    }
    /**重置*/
    public reset(){
        this.openArr=[];
        this.closeArr=[];
        this.onPoint=null;
        this.moveToPoint=null;
    }
}
enum ALL_DIR{
    LEFT,RIGHT,UP,DOWN,unkown
}