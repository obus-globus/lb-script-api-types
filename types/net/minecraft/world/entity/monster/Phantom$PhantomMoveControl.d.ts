import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoveControl } from '../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
export class Phantom$PhantomMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(null_: Phantom$PhantomMoveControl, mob: Mob)
    // private speed: number;
    tick(): void;
}