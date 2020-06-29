class User {
    constructor() {
        this._lifePoints = 10;
    }
    choose(e) {
        this._choice = e.target.id;
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
export { User };
//# sourceMappingURL=user.js.map