import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Phantom } from '../../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
export class Phantom$PhantomAttackStrategyGoal extends Goal {
    private constructor(null_: Phantom)
    // private nextSweepTick: number;
    canUse(): boolean;
    // private setAnchorAboveTarget(): void;
    start(): void;
    stop(): void;
    tick(): void;
}