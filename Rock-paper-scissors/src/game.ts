import { User } from "./user.js";
import { Enemy } from "./enemy.js";

class Game {
    private _user: User;
    private _enemy: Enemy;
    
    private _rockIcon: HTMLElement = document.getElementById('rock');
    private _paperIcon: HTMLElement = document.getElementById('paper');
    private _scissorsIcon: HTMLElement = document.getElementById('scissors');
    
    private _playAgainIcon: HTMLElement = document.getElementById('play-again');
    
    private _userChoiceOutput: HTMLElement = document.getElementById('userchoice');
    private _enemyChoiceOutput: HTMLElement = document.getElementById('enemychoice');

    private _resultOutput: HTMLElement = document.getElementById('result');

    private _enemyAnimation: HTMLElement = document.getElementById('computeranimation');

    private _enemyScoreOutput: HTMLElement = document.getElementById('enemy-life-points');
    private _userScoreOutput: HTMLElement = document.getElementById('user-life-points');


    constructor(_user: User, _enemy: Enemy) {
        this._user = _user;
        this._enemy = _enemy;
    }

    start() {
        this._rockIcon.addEventListener('click', (e: Event) => this.choicesSolver(e));
        this._paperIcon.addEventListener('click', (e: Event) => this.choicesSolver(e));
        this._scissorsIcon.addEventListener('click', (e: Event) => this.choicesSolver(e));

        this._playAgainIcon.addEventListener('click', this.restart.bind(this));
        
        this.enemyAnimation();
    }
    
    enemyAnimation() {
        this._enemyAnimation.style.animation = "enemy-normal-animation " + (this._enemy.lifePoints + 0.1) + "s linear";
        this._enemyAnimation.style.animationIterationCount = "infinite";
    }
    
    shakeEnemy() {
        this._enemyChoiceOutput.style.animation = "shake 0.5s linear";
        this._enemyChoiceOutput.style.animationIterationCount = "infinite";
    }
    shakeUser() {
        this._userChoiceOutput.style.animation = "shake 0.5s linear";
        this._userChoiceOutput.style.animationIterationCount = "infinite";
    }
    

    choicesSolver(e: Event) {
        this._user.choose(e);

        (this._userChoiceOutput as HTMLImageElement).src = `/imgs/${this._user.choice.toString()}.png`;

        this._enemy.choose();
        (this._enemyChoiceOutput as HTMLImageElement).src = `/imgs/${"computer-" + this._enemy.choice.toString()}.png`;
       
        if (this._user.choice == this._enemy.choice) {
            this._resultOutput.innerHTML = "It's a tie";
            this._resultOutput.style.color = "DarkGoldenRod";
            this.shakeEnemy();
            this.shakeUser();
        } else if (this._user.choice == "rock" && this._enemy.choice == "scissors") {
            this._resultOutput.innerHTML = "You win!";
            this._resultOutput.style.color = "Green";
            this._enemy.lifePoints--;
            this._enemyScoreOutput.innerHTML = this._enemy.lifePoints.toString();
            this.shakeEnemy();
            if (this.isOver()) {
                this.playAgain();
            }
        } else if (this._user.choice == "rock" && this._enemy.choice == "paper") {
            this._resultOutput.innerHTML = "You lose...";
            this._resultOutput.style.color = "Red";
            this._user.lifePoints--;
            this._userScoreOutput.innerHTML = this._user.lifePoints.toString();
            this.shakeUser();
            if (this.isOver()) {
                this.playAgain();
            }
        } else if (this._user.choice == "paper" && this._enemy.choice == "rock") {
            this._resultOutput.innerHTML = "You win!";
            this._resultOutput.style.color = "Green";
            this._enemy.lifePoints--;
            this._enemyScoreOutput.innerHTML = this._enemy.lifePoints.toString();
            this.shakeEnemy();
            if (this.isOver()) {
                this.playAgain();
            }
        } else if (this._user.choice == "paper" && this._enemy.choice == "scissors") {
            this._resultOutput.innerHTML = "You lose...";
            this._resultOutput.style.color = "Red";
            this._user.lifePoints--;
            this._userScoreOutput.innerHTML = this._user.lifePoints.toString();
            this.shakeUser();
            if (this.isOver()) {
                this.playAgain();
            }
        } else if (this._user.choice == "scissors" && this._enemy.choice == "paper") {
            this._resultOutput.innerHTML = "You win!";
            this._resultOutput.style.color = "Green";
            this._enemy.lifePoints--;
            this._enemyScoreOutput.innerHTML = this._enemy.lifePoints.toString();
            this.shakeEnemy();
            if (this.isOver()) {
                this.playAgain();
            }
        } else if (this._user.choice == "scissors" && this._enemy.choice == "rock") {
            this._resultOutput.innerHTML = "You lose...";
            this._resultOutput.style.color = "Red";
            this._user.lifePoints--;
            this._userScoreOutput.innerHTML = this._user.lifePoints.toString();
            this.shakeUser();
            if (this.isOver()) {
                this.playAgain();
            }
        }

        this.enemyAnimation();

        if (this._enemy.lifePoints == 5) {
            (this._enemyAnimation as HTMLImageElement).src = `/imgs/evilComputerSad.png`;
        }

        if (this._enemy.lifePoints == 3) {
            (this._enemyAnimation as HTMLImageElement).src = `/imgs/evilComputerVerySad.png`;
        }
        

        setTimeout(this.deleteShake.bind(this), 500);
    }

    deleteShake() {
        this._enemyChoiceOutput.style.animation = "shake 0.0s linear";
        this._enemyChoiceOutput.style.animationIterationCount = "infinite";

        this._userChoiceOutput.style.animation = "shake 0.0s linear";
        this._userChoiceOutput.style.animationIterationCount = "infinite";
    }

    isOver(): boolean {
        if (this._user.lifePoints == 0 || this._enemy.lifePoints == 0) {
            return true;
        }
        return false;
    }

    playAgain() {
        this._userChoiceOutput.hidden = true;
        this._enemyChoiceOutput.hidden = true;

        this._rockIcon.hidden = true;
        this._paperIcon.hidden = true;
        this._scissorsIcon.hidden = true;

        if (this._enemy.lifePoints == 0) {
            this._resultOutput.innerHTML = "OHH NOO! YOU BEAT ME!";
        }

        if (this._user.lifePoints == 0) {
            (this._enemyAnimation as HTMLImageElement).src = `/imgs/evilComputerHappy.png`;
            this._resultOutput.innerHTML = "HAHAHA! I BEAT YOU!";
        }

        this._playAgainIcon.hidden = false;
    }

    restart() {
        this._user.lifePoints = 10;
        this._enemy.lifePoints = 10;

        (this._enemyAnimation as HTMLImageElement).src = `/imgs/evilComputerHappy.png`;

        (this._userChoiceOutput as HTMLImageElement).src = `/imgs/chooseAnOption.png`;
        (this._enemyChoiceOutput as HTMLImageElement).src = `/imgs/evilComputerReady.png`;

        this._userScoreOutput.innerHTML = this._user.lifePoints.toString();
        this._enemyScoreOutput.innerHTML = this._enemy.lifePoints.toString();

        this._resultOutput.innerHTML = "...";
        this._resultOutput.style.color = "#3914df";

        this._playAgainIcon.hidden = true;

        this._userChoiceOutput.hidden = false;
        this._enemyChoiceOutput.hidden = false;

        this._rockIcon.hidden = false;
        this._paperIcon.hidden = false;
        this._scissorsIcon.hidden = false;

        this.enemyAnimation();
    }
}

export { Game };