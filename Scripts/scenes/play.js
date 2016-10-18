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
            createjs.Ticker.getMeasuredTickTime();
            createjs.Ticker.on("tick", gameLoop, this);
            this._tickLbl = new objects.Label("counter: " + this._tick, "25px Consolar", "#000000", config.Screen.HEIGHT - 50, config.Screen.WIDTH - 50);
            this.addChild(this._tickLbl);
            // Add menu scene to global stage container
            this._playBG = new createjs.Bitmap(assets.getResult("PlayBG"));
            this.addChildAt(this._playBG, 0);
            var blurFilter = new createjs.BlurFilter(5, 5, 5);
            this._playBG.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            var bitmapBounds = this._playBG.getBounds();
            this._playBG.cache(bounds.x, bounds.y, bitmapBounds.width, bitmapBounds.height);
            this._robber = new objects.Enemy("robber", 5);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
        };
        Play.prototype._onEnemyClick = function (event) {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map