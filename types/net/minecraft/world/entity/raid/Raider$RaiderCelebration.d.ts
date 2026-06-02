import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Raider } from '../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class Raider$RaiderCelebration extends Goal {
    constructor(null_: Raider$RaiderCelebration, mob: Raider)
    // private mob: Raider;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}