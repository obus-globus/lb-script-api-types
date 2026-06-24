import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
import type { Fox$FoxBehaviorGoal } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox$FoxBehaviorGoal.d.ts'
export class Fox$SleepGoal extends Fox$FoxBehaviorGoal {
    constructor(null_: Fox)
    // private countdown: number;
    canContinueToUse(): boolean;
    // private canSleep(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
}