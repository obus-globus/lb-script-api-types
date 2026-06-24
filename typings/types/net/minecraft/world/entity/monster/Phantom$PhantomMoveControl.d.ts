import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoveControl } from '../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Phantom } from '../../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
export class Phantom$PhantomMoveControl<T extends Mob> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(null_: Phantom, mob: T)
    // private speed: number;
    tick(): void;
}