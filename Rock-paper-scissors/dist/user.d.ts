declare class User {
    private _choice;
    private _lifePoints;
    choose(e: Event): void;
    get choice(): string;
    get lifePoints(): number;
    set lifePoints(lifePoints: number);
}
export { User };
