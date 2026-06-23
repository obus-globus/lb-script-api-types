import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LevelReader } from '../../../../net/minecraft/world/level/LevelReader.d.ts'
export interface SpawnPlacementType extends Object{
    adjustSpawnPosition(level: LevelReader, candidate: BlockPos): BlockPos;
    isSpawnPositionOk(level: LevelReader, blockPos: BlockPos, type: EntityType<any>): boolean;
}