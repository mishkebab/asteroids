import MovingObject from "./moving_object";
import Asteroid from "./asteroid";
import GameView from "./game_view";
import Game from "./game";

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;



const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1600, 700);
window.ctx = ctx;

const new_game_view = new GameView(ctx);
new_game_view.start();

