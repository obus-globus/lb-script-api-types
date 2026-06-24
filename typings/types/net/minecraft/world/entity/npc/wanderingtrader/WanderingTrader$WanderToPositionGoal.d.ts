import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { WanderingTrader } from '../../../../../../net/minecraft/world/entity/npc/wanderingtrader/WanderingTrader.d.ts'
export class WanderingTrader$WanderToPositionGoal extends Goal {
    constructor(null_: WanderingTrader, trader: WanderingTrader, stopDistance: number, speedModifier: number)
    // private speedModifier: number;
    // private stopDistance: number;
    // private trader: WanderingTrader;
    canUse(): boolean;
    // private isTooFarAway(pos: BlockPos, distance: number): boolean;
    stop(): void;
    tick(): void;
}