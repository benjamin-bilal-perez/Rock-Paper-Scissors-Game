class User {
    private _choice: string;
    private _lifePoints: number = 10;

    choose (e: Event) {
        this._choice = (e.target as HTMLTextAreaElement).id;
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

export { User };