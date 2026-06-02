import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export interface NaturalSpawner$SpawnPredicate extends Object{
    test(type: EntityType<Object>, blockPos: BlockPos, levelChunk: ChunkAccess): boolean;
}