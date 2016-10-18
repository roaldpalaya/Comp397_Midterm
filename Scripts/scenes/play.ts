module scenes {
    export class Play extends objects.Scene {

        private _playBG : createjs.Bitmap;
        private _robber :objects.Enemy;
        private _tickLbl :objects.Label;
        private _tick : Number;
        constructor() {
            super();
            this.start();
        }
      
        public start() : void {
            createjs.Ticker.getMeasuredTickTime();
            createjs.Ticker.on("tick", gameLoop, this);
            
            this._tickLbl= new objects.Label("counter: "+this._tick, "25px Consolar", "#000000", config.Screen.HEIGHT-50, config.Screen.WIDTH-50);
            this.addChild(this._tickLbl);
            // Add menu scene to global stage container
            this._playBG =new createjs.Bitmap(assets.getResult("PlayBG"));
            this.addChildAt(this._playBG,0);
            
            var blurFilter =new createjs.BlurFilter(5,5,5);
            this._playBG.filters =[blurFilter];
            var bounds=blurFilter.getBounds();

            var bitmapBounds=this._playBG.getBounds();
            this._playBG.cache(bounds.x,bounds.y,bitmapBounds.width,bitmapBounds.height);
            
            this._robber = new objects.Enemy("robber",5);
            stage.addChild(this);
            
            
        }

        public update() : void {
        }



        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}