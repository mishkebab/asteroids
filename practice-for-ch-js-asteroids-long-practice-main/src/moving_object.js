import Game from "./game";

class MovingObject {
    constructor(args) {
        this.pos = args['pos'];
        this.vel = args['vel'];
        this.radius = args['radius'];
        this.color = args['color'];
        this.game = args['game']
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)
        ctx.stroke();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.pos = this.game.wrap(this.pos)
    }











}



export default MovingObject