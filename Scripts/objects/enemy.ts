module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        private _life : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, life : number) {
            super( imageString, "poof" );
            this._life = life;
            this.name="robber";

        }

        get life() : number {
            
            return this._life;
        }

        public update() : void {
            super.update();
            this.getPosition();
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = Math.floor(Math.random()* 600)+this.width ;
            this.y = Math.floor(Math.random()* 400)+this.height;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            this._life--;
            if (this._life=0){
                this._dead();
            }
        }

        private _dead() : void {
            currentScene.removeChild(this);
            this.update();
        }
    }
}