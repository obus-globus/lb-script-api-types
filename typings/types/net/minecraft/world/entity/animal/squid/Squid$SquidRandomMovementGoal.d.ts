import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Squid } from '../../../../../../net/minecraft/world/entity/animal/squid/Squid.d.ts'
export class Squid$SquidRandomMovementGoal extends Goal {
    constructor(squid: Squid)
    // private squid: Squid;
    canUse(): boolean;
    tick(): void;
}