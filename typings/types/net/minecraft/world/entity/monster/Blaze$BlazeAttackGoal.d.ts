import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Blaze } from '../../../../../net/minecraft/world/entity/monster/Blaze.d.ts'
export class Blaze$BlazeAttackGoal extends Goal {
    constructor(blaze: Blaze)
    // private attackStep: number;
    // private attackTime: number;
    // private blaze: Blaze;
    // private lastSeen: number;
    canUse(): boolean;
    // private getFollowDistance(): number;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}