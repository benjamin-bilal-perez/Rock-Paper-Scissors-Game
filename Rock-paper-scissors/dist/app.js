import { Enemy } from "./enemy.js";
import { User } from "./user.js";
import { Game } from "./game.js";
class App {
    main() {
        let user = new User();
        let enemy = new Enemy();
        let game = new Game(user, enemy);
        game.start();
    }
}
let app = new App();
app.main();
//# sourceMappingURL=app.js.map