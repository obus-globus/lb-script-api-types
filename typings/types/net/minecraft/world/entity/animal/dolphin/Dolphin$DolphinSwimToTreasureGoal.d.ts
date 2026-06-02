import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Dolphin } from '../../../../../../net/minecraft/world/entity/animal/dolphin/Dolphin.d.ts'
export class Dolphin$DolphinSwimToTreasureGoal extends Goal {
    constructor(dolphin: Dolphin)
    // private dolphin: Dolphin;
    // private stuck: boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isInterruptable(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}