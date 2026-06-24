import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Squid } from '../../../../../../net/minecraft/world/entity/animal/squid/Squid.d.ts'
export class Squid$SquidFleeGoal extends Goal {
    private constructor(null_: Squid)
    // private fleeTicks: number;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    tick(): void;
}