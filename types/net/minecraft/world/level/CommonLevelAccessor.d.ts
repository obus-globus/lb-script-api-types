import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup } from '../../../../net/minecraft/core/HolderLookup.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { EntityGetter } from '../../../../net/minecraft/world/level/EntityGetter.d.ts'
import type { LevelReader } from '../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { LevelSimulatedRW } from '../../../../net/minecraft/world/level/LevelSimulatedRW.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface CommonLevelAccessor extends Object, EntityGetter, LevelReader, LevelSimulatedRW{
    canSeeSkyFromBelowWater(pos: BlockPos): boolean;
    containsAnyLiquid(box: AABB): boolean;
    getBiome(pos: BlockPos): Holder<Biome>;
    getBiomeFabric(arg0: BlockPos): Holder<Object>;
    getBlockEntity(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockStatesIfLoaded(box: AABB): Stream<BlockState>;
    getChunk(chunkX: number, chunkZ: number): ChunkAccess;
    getChunk(chunkX: number, chunkZ: number, status: ChunkStatus): ChunkAccess;
    getChunk(pos: BlockPos): ChunkAccess;
    getChunkForCollisions(chunkX: number, chunkZ: number): BlockGetter;
    getEffectiveSkyBrightness(pos: BlockPos): number;
    getEntities(except: Entity, bb: AABB): Entity[];
    getEntitiesOfClass(baseClass: Class<T>, bb: AABB): T[];
    getEntitiesOfClass(baseClass: Class<T>, bb: AABB, selector: (param0: T) => kotlin.Boolean): T[];
    getEntityCollisions(source: Entity, testArea: AABB): VoxelShape[];
    getEntityCollisions(source: Entity, testArea: AABB): VoxelShape[];
    getHeight(): number;
    getHeight(type: Heightmap$Types, pos: BlockPos): number;
    getHeightmapPos(type: Heightmap$Types, pos: BlockPos): BlockPos;
    getHeightmapPos(type: Heightmap$Types, pos: BlockPos): BlockPos;
    getLightLevelDependentMagicValue(pos: BlockPos): number;
    getMaxLocalRawBrightness(pos: BlockPos): number;
    getMaxLocalRawBrightness(pos: BlockPos, skyDarkening: number): number;
    getMinY(): number;
    getNearestPlayer(x: number, y: number, z: number, range: number, predicate: (param0: Entity) => kotlin.Boolean): Player;
    getNearestPlayer(x: number, y: number, z: number, maxDist: number, filterOutCreative: boolean): Player;
    getNearestPlayer(source: Entity, maxDist: number): Player;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getPathfindingCostFromLightLevels(pos: BlockPos): number;
    getPlayerByUUID(uuid: UUID): Player;
    hasBiomes(): boolean;
    hasChunkAt(blockX: number, blockZ: number): boolean;
    hasChunkAt(pos: BlockPos): boolean;
    hasChunksAt(x0: number, z0: number, x1: number, z1: number): boolean;
    hasChunksAt(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): boolean;
    hasChunksAt(pos0: BlockPos, pos1: BlockPos): boolean;
    hasNearbyAlivePlayer(x: number, y: number, z: number, range: number): boolean;
    holderLookup(key: ResourceKey<T[]>): HolderLookup<T>;
    isEmptyBlock(pos: BlockPos): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    isWaterAt(pos: BlockPos): boolean;
    lithium$getLoadedChunk(arg0: number, arg1: number): ChunkAccess;
}