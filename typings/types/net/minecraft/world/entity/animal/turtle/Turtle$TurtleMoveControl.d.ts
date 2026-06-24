import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Turtle } from '../../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
export class Turtle$TurtleMoveControl<T extends Turtle> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(turtle: T)
    tick(): void;
    // private updateSpeed(): void;
}