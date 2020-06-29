declare class Enemy {
    private _choice;
    private _lifePoints;
    choose(): void;
    get choice(): string;
    get lifePoints(): number;
    set lifePoints(lifePoints: number);
}
export { Enemy };
