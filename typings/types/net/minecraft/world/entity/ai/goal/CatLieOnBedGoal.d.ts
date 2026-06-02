import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { MoveToBlockGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MoveToBlockGoal.d.ts'
import type { Cat } from '../../../../../../net/minecraft/world/entity/animal/feline/Cat.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
export class CatLieOnBedGoal extends MoveToBlockGoal {
    constructor(cat: Cat, speedModifier: number, searchRange: number)
    // private cat: Cat;
    canUse(): boolean;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    nextStartTick(mob: PathfinderMob): number;
    start(): void;
    stop(): void;
    tick(): void;
}