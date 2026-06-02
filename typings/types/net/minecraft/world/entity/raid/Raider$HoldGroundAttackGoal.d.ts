import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { AbstractIllager } from '../../../../../net/minecraft/world/entity/monster/illager/AbstractIllager.d.ts'
import type { Raider } from '../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class Raider$HoldGroundAttackGoal extends Goal {
    constructor(mob: AbstractIllager, hostileRadius: number)
    // private hostileRadiusSqr: number;
    // private mob: Raider;
    shoutTargeting: TargetingConditions;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}