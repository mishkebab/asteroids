import Game from "./game";
class GameView {
    constructor(ctx){
        this.ctx = ctx
        this.game = new Game();
    };

    start() {
        let funct = this
        setInterval( function() {
            funct.game.moveObjects();
            funct.game.draw(funct.ctx);
        }, 20);
    }

};

export default GameView;