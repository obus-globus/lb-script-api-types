import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Control } from '../../../../../../net/minecraft/world/entity/ai/control/Control.d.ts'
export class BodyRotationControl extends Object implements Control {
    constructor(mob: Mob)
    // private headStableTime: number;
    // private lastStableYHeadRot: number;
    // private mob: Mob;
    clientTick(): void;
    // private isMoving(): boolean;
    // private notCarryingMobPassengers(): boolean;
    // private rotateBodyIfNecessary(): void;
    // private rotateHeadIfNecessary(): void;
    // private rotateHeadTowardsFront(): void;
    rotateTowards(fromAngle: number, toAngle: number, maxRot: number): number;
}