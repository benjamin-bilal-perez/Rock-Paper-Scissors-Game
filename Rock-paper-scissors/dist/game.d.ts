import { User } from "./user.js";
import { Enemy } from "./enemy.js";
declare class Game {
    private _user;
    private _enemy;
    private _rockIcon;
    private _paperIcon;
    private _scissorsIcon;
    private _playAgainIcon;
    private _userChoiceOutput;
    private _enemyChoiceOutput;
    private _resultOutput;
    private _enemyAnimation;
    private _enemyScoreOutput;
    private _userScoreOutput;
    constructor(_user: User, _enemy: Enemy);
    start(): void;
    enemyAnimation(): void;
    shakeEnemy(): void;
    shakeUser(): void;
    choicesSolver(e: Event): void;
    deleteShake(): void;
    isOver(): boolean;
    playAgain(): void;
    restart(): void;
}
export { Game };
