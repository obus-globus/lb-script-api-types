import type { MoveControl } from '../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Vex } from '../../../../../net/minecraft/world/entity/monster/Vex.d.ts'
export class Vex$VexMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(null_: Vex$VexMoveControl, vex: Vex)
    tick(): void;
}