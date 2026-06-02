import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Control } from '../../../../../../net/minecraft/world/entity/ai/control/Control.d.ts'
export class JumpControl extends Object implements Control {
    constructor(mob: Mob)
    // private jump: boolean;
    // private mob: Mob;
    jump(): void;
    rotateTowards(fromAngle: number, toAngle: number, maxRot: number): number;
    tick(): void;
}