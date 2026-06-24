import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
export class FlyingMoveControl<T extends Mob> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(mob: T, maxTurn: number, hoversInPlace: boolean)
    // private hoversInPlace: boolean;
    // private maxTurn: number;
    tick(): void;
}