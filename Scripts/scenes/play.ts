module scenes {
    export class Play extends objects.Scene {

        private _playBG : createjs.Bitmap;
        private _robber :objects.Enemy;
        private _tickLbl :objects.Label;
        private _tick : Number;
        private _scoreLbl :objects.Label;
        constructor() {
            super();
            this.start();
        }
      
        public start() : void {
            // Add menu scene to global stage container
            
            createjs.Ticker.getMeasuredTickTime();
            createjs.Ticker.on("tick", gameLoop, this);
            //Create counter Label
            this._tickLbl= new objects.Label("Counter: ", "35px Consolar", "#000000", config.Screen.CENTER_X-330, config.Screen.HEIGHT-550);
            this.addChild(this._tickLbl);

            //Create score Label
            this._scoreLbl=new objects.Label("Score: ",  "35px Consolar", "#000000", config.Screen.CENTER_X-330, config.Screen.HEIGHT-500);
            this.addChild(this._scoreLbl);
            //background
            this._playBG =new createjs.Bitmap(assets.getResult("PlayBG"));
            this.addChildAt(this._playBG,0);
            
            var blurFilter =new createjs.BlurFilter(5,5,5);
            this._playBG.filters =[blurFilter];
            var bounds=blurFilter.getBounds();

            var bitmapBounds=this._playBG.getBounds();
            this._playBG.cache(bounds.x,bounds.y,bitmapBounds.width,bitmapBounds.height);
            
            //add robber
            this._robber = new objects.Enemy("robber",1);
            this._robber.on("Click", this._onEnemyClick,this);
            
            this.addChild(this._robber);
            
           
            stage.addChild(this);
            
            
        }

        public update() : void {
            this._robber.update();
        }



        private _onEnemyClick(event : createjs.MouseEvent) : void {
            this._robber.shot();
            
            console.log("Clicked life left is "+ this._robber.life);
        }
    }
}