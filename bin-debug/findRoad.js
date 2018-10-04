var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * A*寻路算法
*/
var FindRoad = (function () {
    function FindRoad() {
        this.openArr = [];
        this.closeArr = [];
    }
    Object.defineProperty(FindRoad.prototype, "obstacleArr", {
        set: function (arr) {
            this._obstacleArr = arr;
        },
        enumerable: true,
        configurable: true
    });
    FindRoad.prototype.toFind = function (goArr) {
        this.reset();
        this.onPoint = goArr[0];
        this.moveToPoint = goArr[1];
        var find = false;
        while (!find) {
            var findArr;
            if (this.closeArr.length == 0) {
                this.closeArr.push(this.onPoint);
                this.sethg(this.onPoint, 0);
                findArr = this.findLocalPt(this.onPoint);
                continue;
            }
            else {
                findArr = this.findLocalPt(this.closeArr[this.closeArr.length - 1]);
            }
            if (findArr.length == 0) {
                break;
            }
            var num = 1;
            var no = -1;
            var minH = backgroundScene.maxNum;
            var lastClose = this.closeArr[this.closeArr.length - 1];
            while (num <= findArr.length) {
                this.sethg(findArr[num - 1], lastClose.G + 1);
                if (findArr[num - 1].F < minH) {
                    minH = findArr[num - 1].F;
                    no = num - 1;
                }
                num++;
            }
            if (no >= 0) {
                this.closeArr.push(findArr[no]);
                if (findArr[no].H == 1) {
                    find = true;
                    this.closeArr.push(this.moveToPoint);
                }
            }
        }
        return this.closeArr;
    };
    /**附近的点*/
    FindRoad.prototype.findLocalPt = function (Pt) {
        var Pts = [];
        var pt;
        if (Pt.x > this.minX) {
            pt = new Point(Pt.x - 1, Pt.y);
            Pts.push(pt);
        }
        if (Pt.x < this.maxX) {
            pt = new Point(Pt.x + 1, Pt.y);
            Pts.push(pt);
        }
        if (Pt.y > this.minY) {
            pt = new Point(Pt.x, Pt.y - 1);
            Pts.push(pt);
        }
        if (Pt.y < this.maxY) {
            pt = new Point(Pt.x, Pt.y + 1);
            Pts.push(pt);
        }
        var PtsArr = [];
        for (var i = 0; i < Pts.length; i++) {
            if (!this.checkObstacle(Pts[i]) && !this.checkClose(Pts[i])) {
                PtsArr.push(Pts[i]);
            }
        }
        return PtsArr;
    };
    /**检查*/
    FindRoad.prototype.checkObstacle = function (Pt) {
        var bool = false;
        for (var i = 0; i < this._obstacleArr.length; i++) {
            if (this._obstacleArr[i].x == Pt.x && this._obstacleArr[i].y == Pt.y) {
                bool = true;
                break;
            }
        }
        return bool;
    };
    /**检查*/
    FindRoad.prototype.checkClose = function (pt) {
        var bool = false;
        for (var i = 0; i < this.closeArr.length; i++) {
            if (this.closeArr[i].x == pt.x && this.closeArr[i].y == pt.y) {
                bool = true;
                break;
            }
        }
        return bool;
    };
    /**计算g和h值*/
    FindRoad.prototype.sethg = function (point, moveNum) {
        point.G = moveNum;
        point.H = Math.abs(this.moveToPoint.x - point.x) + Math.abs(this.moveToPoint.y - point.y);
        return point.F;
    };
    /**重置*/
    FindRoad.prototype.reset = function () {
        this.openArr = [];
        this.closeArr = [];
        this.onPoint = null;
        this.moveToPoint = null;
    };
    return FindRoad;
}());
__reflect(FindRoad.prototype, "FindRoad");
var ALL_DIR;
(function (ALL_DIR) {
    ALL_DIR[ALL_DIR["LEFT"] = 0] = "LEFT";
    ALL_DIR[ALL_DIR["RIGHT"] = 1] = "RIGHT";
    ALL_DIR[ALL_DIR["UP"] = 2] = "UP";
    ALL_DIR[ALL_DIR["DOWN"] = 3] = "DOWN";
    ALL_DIR[ALL_DIR["unkown"] = 4] = "unkown";
})(ALL_DIR || (ALL_DIR = {}));
