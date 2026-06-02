import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { JumpGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/JumpGoal.d.ts'
import type { Dolphin } from '../../../../../../net/minecraft/world/entity/animal/dolphin/Dolphin.d.ts'
export class DolphinJumpGoal extends JumpGoal {
    constructor(dolphin: Dolphin, interval: number)
    // private breached: boolean;
    // private dolphin: Dolphin;
    // private interval: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isInterruptable(): boolean;
    start(): void;
    stop(): void;
    // private surfaceIsClear(dolphinPos: BlockPos, stepX: number, stepZ: number, currentStep: number): boolean;
    tick(): void;
    // private waterIsClear(dolphinPos: BlockPos, stepX: number, stepZ: number, currentStep: number): boolean;
}