import type { MoveControl } from '../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Guardian } from '../../../../../net/minecraft/world/entity/monster/Guardian.d.ts'
export class Guardian$GuardianMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(guardian: Guardian)
    // private guardian: Guardian;
    tick(): void;
}