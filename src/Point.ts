/**点*/
class Point {
    private _x:number;
    private _y:number;
    public G:number;//移动量
    public H:number;//和目标点的估计距离
    private _F:number;//g+h
    constructor(x:number=0,y:number=0){
        this._x=x;
        this._y=y;
    }
    public get x():number{
        return this._x;
    }
    public set x(x:number){
        this._x=x;
    }
    public get y():number{
        return this._y;
    }
    public set y(y:number){
        this._y=y;
    }
    public get F():number{
        return this.H+this.G;
    }
}