import type { JumpGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/JumpGoal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxPounceGoal extends JumpGoal {
    constructor(null_: Fox)
    canContinueToUse(): boolean;
    canUse(): boolean;
    isInterruptable(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}