import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Creaking } from '../../../../../../net/minecraft/world/entity/monster/creaking/Creaking.d.ts'
export class Creaking$CreakingMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(null_: Creaking$CreakingMoveControl, creaking: Creaking)
    tick(): void;
}