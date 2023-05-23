import Asteroid from "./asteroid";

class Game {
    static DIM_X = 1600;
    static DIM_Y = 700;
    static NUM_ASTEROIDS = 10;
    
    constructor() {
        this.asteroids = this.addAsteroids();
        
    };

    addAsteroids() {
        const asteroids = [];
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            let ast = new Asteroid({pos: this.randomPosition(), game: this});
            asteroids.push(ast);
        };
        return asteroids;
    };

    randomPosition() {
        let x = Math.floor(Math.random() * Game.DIM_X);
        let y = Math.floor(Math.random() * Game.DIM_Y);
        return [x, y];
    };

    draw(ctx) {
        ctx.clearRect(0, 0, 1600, 700);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1600, 700);
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].draw(ctx);          
        };
    };

    moveObjects() {
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].move();          
        };
    };

    wrap(pos) {
        row = pos[0]
        col = pos[1]
        if (row === 0) {
            return [1600, col];
        } else if (row === 1600) {
            return [0, col];
        } else if (col === 700) {
            return [row, 0];
        } else if (col === 0) {
            return [row, 700];
        } else {
            return [row, col];
        }
    }
};


export default Game;
