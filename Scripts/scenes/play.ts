module scenes {
    export class Play extends objects.Scene {

        private _playBG : createjs.Bitmap;
        constructor() {
            super();
            this.start();
        }

        public start() : void {

            // Add menu scene to global stage container
            this._playBG =new createjs.Bitmap(assets.getResult("PlayBG"));
            this.addChildAt(this._playBG,0);
            
            var blurFilter =new createjs.BlurFilter(5,5,5);
            this._playBG.filters =[blurFilter];
            var bounds=blurFilter.getBounds();

            var bitmapBounds=this._playBG.getBounds();
            this._playBG.cache(bounds.x,bounds.y,bitmapBounds.width,bitmapBounds.height);
            stage.addChild(this);
            
        }

        public update() : void {
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}