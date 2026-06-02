import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export abstract class DoorInteractGoal extends Goal {
    constructor(mob: Mob)
    // private doorOpenDirX: number;
    // private doorOpenDirZ: number;
    // private doorPos: BlockPos;
    // private hasDoor: boolean;
    // private mob: Mob;
    // private passed: boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isOpen(): boolean;
    requiresUpdateEveryTick(): boolean;
    setOpen(open: boolean): void;
    start(): void;
    tick(): void;
}