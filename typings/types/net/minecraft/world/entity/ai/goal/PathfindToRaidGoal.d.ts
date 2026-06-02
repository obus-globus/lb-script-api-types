import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Raid } from '../../../../../../net/minecraft/world/entity/raid/Raid.d.ts'
import type { Raider } from '../../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class PathfindToRaidGoal<T extends Raider> extends Goal {
    constructor(mob: T)
    // private mob: T;
    // private recruitmentTick: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private recruitNearby(raid: Raid): void;
    tick(): void;
}