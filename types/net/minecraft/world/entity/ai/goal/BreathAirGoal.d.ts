import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
export class BreathAirGoal extends Goal {
    constructor(mob: PathfinderMob)
    // private mob: PathfinderMob;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private findAirPosition(): void;
    // private givesAir(level: LevelReader, pos: BlockPos): boolean;
    isInterruptable(): boolean;
    start(): void;
    tick(): void;
}