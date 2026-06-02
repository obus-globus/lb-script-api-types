import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
export class SmoothSwimmingMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(mob: Mob, maxTurnX: number, maxTurnY: number, inWaterSpeedModifier: number, outsideWaterSpeedModifier: number, applyGravity: boolean)
    // private applyGravity: boolean;
    // private inWaterSpeedModifier: number;
    // private maxTurnX: number;
    // private maxTurnY: number;
    // private outsideWaterSpeedModifier: number;
    tick(): void;
}