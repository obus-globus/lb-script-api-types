import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { ServerLevelAccessor } from '../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
export interface SpawnPlacements$SpawnPredicate<T extends Entity> extends Object{
    test(type: EntityType<T>, level: ServerLevelAccessor, spawnReason: EntitySpawnReason, pos: BlockPos, random: RandomSource): boolean;
}