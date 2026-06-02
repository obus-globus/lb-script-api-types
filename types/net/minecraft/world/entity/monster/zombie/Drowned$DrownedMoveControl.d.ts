import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Drowned } from '../../../../../../net/minecraft/world/entity/monster/zombie/Drowned.d.ts'
export class Drowned$DrownedMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(drowned: Drowned)
    // private drowned: Drowned;
    tick(): void;
}