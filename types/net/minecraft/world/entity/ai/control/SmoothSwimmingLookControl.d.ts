import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookControl } from '../../../../../../net/minecraft/world/entity/ai/control/LookControl.d.ts'
export class SmoothSwimmingLookControl extends LookControl {
    constructor(mob: Mob, maxYRotFromCenter: number)
    // private maxYRotFromCenter: number;
    tick(): void;
}