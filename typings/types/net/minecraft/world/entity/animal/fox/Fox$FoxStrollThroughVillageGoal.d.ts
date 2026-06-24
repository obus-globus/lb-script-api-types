import type { StrollThroughVillageGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/StrollThroughVillageGoal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxStrollThroughVillageGoal extends StrollThroughVillageGoal {
    constructor(null_: Fox, searchRadius: number, interval: number)
    canContinueToUse(): boolean;
    // private canFoxMove(): boolean;
    canUse(): boolean;
    start(): void;
}