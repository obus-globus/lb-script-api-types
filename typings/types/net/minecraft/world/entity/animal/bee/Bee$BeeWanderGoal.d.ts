import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Bee$BeeWanderGoal extends Goal {
    constructor(null_: Bee)
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private findPos(): Vec3;
    // private getWanderThreshold(): number;
    start(): void;
}