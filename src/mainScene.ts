class mainScene extends egret.DisplayObjectContainer{
    public static sceneW:number=800;
    public static sceneH:number=1200;
    private backGround:backgroundScene;
    constructor(){
        super();
        this.createdScene();
    }
    /**初始化场景*/
    public createdScene(){
        this.backGround=new backgroundScene();
        this.addChild(this.backGround);
    }
}