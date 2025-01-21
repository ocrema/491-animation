class myentity {
    
    constructor() {
        this.x = 200;
        this.y = 200;
        this.animState = 0;
    }

    update() {
        this.animState += .1;
        this.animState %= 5;
    }
    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./spritesheet.png"), 205 * Math.floor(this.animState),0, 200,330, 0,0, 200,330);
    }
}