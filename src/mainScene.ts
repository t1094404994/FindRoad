class mainScene extends egret.DisplayObjectContainer{
    public static sceneW:number=477;
    public static sceneH:number=800;
    private backGround:backgroundScene;
    constructor(){
        super();
        this.touchChildren=true;
        this.touchEnabled=false;
        this.createdScene();
    }
    /**初始化场景*/
    public createdScene(){
        this.backGround=new backgroundScene();
        this.addChild(this.backGround);
    }
}