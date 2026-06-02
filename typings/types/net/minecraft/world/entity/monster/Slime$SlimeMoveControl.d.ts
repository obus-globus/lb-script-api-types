import type { MoveControl } from '../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Slime } from '../../../../../net/minecraft/world/entity/monster/Slime.d.ts'
export class Slime$SlimeMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(slime: Slime)
    // private isAggressive: boolean;
    // private jumpDelay: number;
    // private slime: Slime;
    // private yRot: number;
    setDirection(yRot: number, isAggressive: boolean): void;
    setWantedMovement(speedModifier: number): void;
    tick(): void;
}