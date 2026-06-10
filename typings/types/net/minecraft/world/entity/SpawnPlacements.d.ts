import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { SpawnPlacementType } from '../../../../net/minecraft/world/entity/SpawnPlacementType.d.ts'
import type { SpawnPlacements$SpawnPredicate } from '../../../../net/minecraft/world/entity/SpawnPlacements$SpawnPredicate.d.ts'
import type { LevelReader } from '../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class SpawnPlacements extends Object {
    static checkSpawnRules(paramtype: EntityType<Entity>, paramlevel: ServerLevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static getHeightmapType(paramtype: EntityType<Object>): Heightmap$Types;
    static getPlacementType(paramtype: EntityType<Object>): SpawnPlacementType;
    static isSpawnPositionOk(paramtype: EntityType<Object>, paramlevel: LevelReader, paramblockPos: BlockPos): boolean;
    static register(paramtype: EntityType<Mob>, paramplacementType: SpawnPlacementType, paramheightmap: Heightmap$Types, paramspawnPredicate: (param0: EntityType<Mob>, param1: ServerLevelAccessor, param2: EntitySpawnReason, param3: BlockPos, param4: RandomSource) => boolean): void;
    constructor()
}