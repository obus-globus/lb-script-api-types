import type { ChunkAwareBlockCollisionSweeper } from '../../../../../../../net/caffeinemc/mods/lithium/common/entity/movement/ChunkAwareBlockCollisionSweeper.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class ChunkAwareBlockCollisionSweeperBlockPos extends ChunkAwareBlockCollisionSweeper<BlockPos$MutableBlockPos> {
    constructor(arg0: Level, arg1: Entity, arg2: AABB)
    computeNext(): BlockPos$MutableBlockPos;
}