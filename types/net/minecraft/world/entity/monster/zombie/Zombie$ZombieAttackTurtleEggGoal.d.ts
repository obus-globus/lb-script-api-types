import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { RemoveBlockGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/RemoveBlockGoal.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
export class Zombie$ZombieAttackTurtleEggGoal extends RemoveBlockGoal {
    constructor(null_: Zombie$ZombieAttackTurtleEggGoal, mob: PathfinderMob, speedModifier: number, verticalSearchRange: number)
    acceptedDistance(): number;
    playBreakSound(level: Level, pos: BlockPos): void;
    playDestroyProgressSound(level: LevelAccessor, pos: BlockPos): void;
}