var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**寻路算法
 * 深度搜索
*/
var findRoad = (function () {
    function findRoad() {
    }
    Object.defineProperty(findRoad.prototype, "closeArr", {
        set: function (arr) {
            this._closeArr = arr;
        },
        enumerable: true,
        configurable: true
    });
    return findRoad;
}());
__reflect(findRoad.prototype, "findRoad");
