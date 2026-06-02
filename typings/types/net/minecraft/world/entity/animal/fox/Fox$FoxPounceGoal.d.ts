import type { JumpGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/JumpGoal.d.ts'
export class Fox$FoxPounceGoal extends JumpGoal {
    constructor(null_: Fox$FoxPounceGoal)
    canContinueToUse(): boolean;
    canUse(): boolean;
    isInterruptable(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}