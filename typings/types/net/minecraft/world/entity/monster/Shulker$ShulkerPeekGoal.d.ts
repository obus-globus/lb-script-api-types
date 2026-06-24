import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Shulker } from '../../../../../net/minecraft/world/entity/monster/Shulker.d.ts'
export class Shulker$ShulkerPeekGoal extends Goal {
    private constructor(null_: Shulker)
    // private peekTime: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}