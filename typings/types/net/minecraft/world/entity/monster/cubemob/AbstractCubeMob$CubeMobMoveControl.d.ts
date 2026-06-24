import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { AbstractCubeMob } from '../../../../../../net/minecraft/world/entity/monster/cubemob/AbstractCubeMob.d.ts'
export class AbstractCubeMob$CubeMobMoveControl<T extends AbstractCubeMob> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(cubeMob: T)
    // private isAggressive: boolean;
    // private jumpDelay: number;
    // private yRot: number;
    setDirection(yRot: number, isAggressive: boolean): void;
    setWantedMovement(speedModifier: number): void;
    tick(): void;
}