var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
            // Add menu scene to global stage container
            createjs.Ticker.getMeasuredTickTime();
            createjs.Ticker.on("tick", gameLoop, this);
            //Create counter Label
            this._tickLbl = new objects.Label("Counter: ", "35px Consolar", "#000000", config.Screen.CENTER_X - 330, config.Screen.HEIGHT - 550);
            this.addChild(this._tickLbl);
            //Create score Label
            this._scoreLbl = new objects.Label("Score: ", "35px Consolar", "#000000", config.Screen.CENTER_X - 330, config.Screen.HEIGHT - 500);
            this.addChild(this._scoreLbl);
            //background
            this._playBG = new createjs.Bitmap(assets.getResult("PlayBG"));
            this.addChildAt(this._playBG, 0);
            var blurFilter = new createjs.BlurFilter(5, 5, 5);
            this._playBG.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            var bitmapBounds = this._playBG.getBounds();
            this._playBG.cache(bounds.x, bounds.y, bitmapBounds.width, bitmapBounds.height);
            //add robber
            this._robber = new objects.Enemy("robber", 1);
            this._robber.on("Click", this._onEnemyClick, this);
            this.addChild(this._robber);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._robber.update();
        };
        Play.prototype._onEnemyClick = function (event) {
            this._robber.shot();
            console.log("Clicked life left is " + this._robber.life);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map