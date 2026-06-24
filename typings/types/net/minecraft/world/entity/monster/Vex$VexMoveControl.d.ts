import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoveControl } from '../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Vex } from '../../../../../net/minecraft/world/entity/monster/Vex.d.ts'
export class Vex$VexMoveControl<T extends Mob> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(null_: Vex, vex: T)
    tick(): void;
}