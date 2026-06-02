import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LocalMobCapCalculator } from '../../../../net/minecraft/world/level/LocalMobCapCalculator.d.ts'
import type { NaturalSpawner$AfterSpawnCallback } from '../../../../net/minecraft/world/level/NaturalSpawner$AfterSpawnCallback.d.ts'
import type { NaturalSpawner$ChunkGetter } from '../../../../net/minecraft/world/level/NaturalSpawner$ChunkGetter.d.ts'
import type { NaturalSpawner$SpawnPredicate } from '../../../../net/minecraft/world/level/NaturalSpawner$SpawnPredicate.d.ts'
import type { NaturalSpawner$SpawnState } from '../../../../net/minecraft/world/level/NaturalSpawner$SpawnState.d.ts'
import type { ServerLevelAccessor } from '../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructureManager } from '../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class NaturalSpawner extends Object {
    static INSCRIBED_SQUARE_SPAWN_DISTANCE_CHUNK: number;
    static SPAWN_DISTANCE_BLOCK: number;
    static SPAWN_DISTANCE_CHUNK: number;
    static createState(paramspawnableChunkCount: number, paramentities: Entity[], paramchunkGetter: (param0: number, param1: (param0: LevelChunk) => void) => void, paramlocalMobCapCalculator: LocalMobCapCalculator): NaturalSpawner$SpawnState;
    static getFilteredSpawningCategories(paramstate: NaturalSpawner$SpawnState, paramspawnFriendlies: boolean, paramspawnEnemies: boolean, paramspawnPersistent: boolean): MobCategory[];
    static isInNetherFortressBounds(parampos: BlockPos, paramlevel: ServerLevel, paramcategory: MobCategory, paramstructureManager: StructureManager): boolean;
    static isValidEmptySpawnBlock(paramlevel: BlockGetter, parampos: BlockPos, paramblockState: BlockState, paramfluidState: FluidState, paramtype: EntityType<Object>): boolean;
    static spawnCategoryForChunk(parammobCategory: MobCategory, paramlevel: ServerLevel, paramchunk: LevelChunk, paramextraTest: (param0: EntityType<Object>, param1: BlockPos, param2: ChunkAccess) => kotlin.Boolean, paramspawnCallback: (param0: Mob, param1: ChunkAccess) => void): void;
    static spawnCategoryForPosition(parammobCategory: MobCategory, paramlevel: ServerLevel, paramstart: BlockPos): void;
    static spawnCategoryForPosition(parammobCategory: MobCategory, paramlevel: ServerLevel, paramchunk: ChunkAccess, paramstart: BlockPos, paramextraTest: (param0: EntityType<Object>, param1: BlockPos, param2: ChunkAccess) => kotlin.Boolean, paramspawnCallback: (param0: Mob, param1: ChunkAccess) => void): void;
    static spawnForChunk(paramlevel: ServerLevel, paramchunk: LevelChunk, paramstate: NaturalSpawner$SpawnState, paramspawningCategories: MobCategory[]): void;
    static spawnMobsForChunkGeneration(paramlevel: ServerLevelAccessor, parambiome: Holder<Biome>, paramchunkPos: ChunkPos, paramrandom: RandomSource): void;
    private constructor()
}