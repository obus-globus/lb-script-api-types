import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
import type { Fox$FoxBehaviorGoal } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox$FoxBehaviorGoal.d.ts'
export class Fox$PerchAndSearchGoal extends Fox$FoxBehaviorGoal {
    constructor(null_: Fox)
    // private lookTime: number;
    // private looksRemaining: number;
    // private relX: number;
    // private relZ: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private resetLook(): void;
    start(): void;
    stop(): void;
    tick(): void;
}