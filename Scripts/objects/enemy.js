var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString, life) {
            _super.call(this, imageString, "poof");
            this._life = life;
            this.name = "robber";
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            _super.prototype.update.call(this);
            this.getPosition();
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = Math.floor(Math.random() * 600) + this.width;
            this.y = Math.floor(Math.random() * 400) + this.height;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            this._life--;
            if (this._life = 0) {
                this._dead();
            }
        };
        Enemy.prototype._dead = function () {
            currentScene.removeChild(this);
            this.update();
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map