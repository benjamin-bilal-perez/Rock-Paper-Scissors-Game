import { Enemy } from "./enemy.js";
import { User } from "./user.js";
import { Game } from "./game.js";

class App {
  main() {
    let user: User = new User();
    let enemy: Enemy = new Enemy();
    let game: Game = new Game(user, enemy);
    game.start();
  }
}

let app: App = new App();
app.main();