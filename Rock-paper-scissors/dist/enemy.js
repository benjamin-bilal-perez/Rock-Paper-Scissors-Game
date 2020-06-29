class Enemy {
    constructor() {
        this._lifePoints = 10;
    }
    choose() {
        let options = ["rock", "paper", "scissors"];
        let num = Math.round(Math.random() * (2));
        this._choice = options[num];
    }
    get choice() {
        return this._choice;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    set lifePoints(lifePoints) {
        this._lifePoints = lifePoints;
    }
}
export { Enemy };
//# sourceMappingURL=enemy.js.map