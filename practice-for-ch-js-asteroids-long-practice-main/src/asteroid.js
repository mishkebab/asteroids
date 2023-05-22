
import MovingObject from "./moving_object";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static COLOR = 'Orange';
    static RADIUS = 25;


constructor(args) {
    super({pos: args['pos'], vel: Util.randomVec(), color: Asteroid.COLOR, radius: Asteroid.RADIUS})
}




};
export default Asteroid;

