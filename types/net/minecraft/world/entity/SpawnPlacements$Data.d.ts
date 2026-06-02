import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { SpawnPlacementType } from '../../../../net/minecraft/world/entity/SpawnPlacementType.d.ts'
import type { SpawnPlacements$SpawnPredicate } from '../../../../net/minecraft/world/entity/SpawnPlacements$SpawnPredicate.d.ts'
import type { ServerLevelAccessor } from '../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class SpawnPlacements$Data extends Record {
    private constructor(heightMap: Heightmap$Types, placement: SpawnPlacementType, predicate: (param0: EntityType<Object>, param1: ServerLevelAccessor, param2: EntitySpawnReason, param3: BlockPos, param4: RandomSource) => kotlin.Boolean)
    // private heightMap: Heightmap$Types;
    // private placement: SpawnPlacementType;
    // private predicate: (param0: EntityType<Object>, param1: ServerLevelAccessor, param2: EntitySpawnReason, param3: BlockPos, param4: RandomSource) => kotlin.Boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heightMap(): Heightmap$Types;
    placement(): SpawnPlacementType;
    predicate(): (param0: EntityType<Object>, param1: ServerLevelAccessor, param2: EntitySpawnReason, param3: BlockPos, param4: RandomSource) => kotlin.Boolean;
    toString(): string;
}