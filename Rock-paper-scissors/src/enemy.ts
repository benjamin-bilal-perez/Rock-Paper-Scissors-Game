class Enemy {
    private _choice: string;
    private _lifePoints: number = 10;

    choose() {
        let options: Array<string> = ["rock", "paper", "scissors"];
        let num: number = Math.round(Math.random() * (2));
        this._choice = options[num];
    }


    get choice(): string {
        return this._choice;
    }

    get lifePoints(): number {
        return this._lifePoints;
    }
    set lifePoints(lifePoints: number) {
        this._lifePoints = lifePoints;
    }
}

export { Enemy };