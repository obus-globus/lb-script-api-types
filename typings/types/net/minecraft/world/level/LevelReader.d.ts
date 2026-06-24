import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkView } from '../../../../net/caffeinemc/mods/lithium/common/world/ChunkView.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup } from '../../../../net/minecraft/core/HolderLookup.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EnvironmentAttributeReader } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeReader.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { BlockAndLightGetter } from '../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipContext } from '../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { CollisionGetter } from '../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { LightLayer } from '../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { SignalGetter } from '../../../../net/minecraft/world/level/SignalGetter.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeManager } from '../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { BiomeManager$NoiseBiomeSource } from '../../../../net/minecraft/world/level/biome/BiomeManager$NoiseBiomeSource.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { DimensionType } from '../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { LevelLightEngine } from '../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface LevelReader extends Object, ChunkView, BlockAndLightGetter, CollisionGetter, SignalGetter, BiomeManager$NoiseBiomeSource{
    // private borderCollision(source: Entity, box: AABB): VoxelShape;
    canSeeSky(pos: BlockPos): boolean;
    canSeeSkyFromBelowWater(pos: BlockPos): boolean;
    clipIncludingBorder(c: ClipContext): BlockHitResult;
    collidesWithSuffocatingBlock(source: Entity, box: AABB): boolean;
    containsAnyLiquid(box: AABB): boolean;
    dimensionType(): DimensionType;
    enabledFeatures(): FeatureFlagSet;
    environmentAttributes(): EnvironmentAttributeReader;
    findFreePosition(source: Entity, allowedCenters: VoxelShape, preferredCenter: Vec3, sizeX: number, sizeY: number, sizeZ: number): Optional<Vec3>;
    findSupportingBlock(source: Entity, box: AABB): Optional<BlockPos>;
    getBestNeighborSignal(pos: BlockPos): number;
    getBestOwnOrNeighbourSignal(pos: BlockPos): number;
    getBiome(pos: BlockPos): Holder<Biome>;
    getBiomeFabric(arg0: BlockPos): Holder<Object>;
    getBiomeManager(): BiomeManager;
    getBlockAndLiquidCollisions(source: Entity, box: AABB): VoxelShape[];
    getBlockCollisions(source: Entity, box: AABB): VoxelShape[];
    getBlockCollisionsFromContext(source: CollisionContext, box: AABB): VoxelShape[];
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockState(pos: BlockPos): BlockState;
    getBlockStatesIfLoaded(box: AABB): Stream<BlockState>;
    getBrightness(layer: LightLayer, pos: BlockPos): number;
    getChunk(chunkX: number, chunkZ: number): ChunkAccess;
    getChunk(chunkX: number, chunkZ: number, status: ChunkStatus): ChunkAccess;
    getChunk(chunkX: number, chunkZ: number, targetStatus: ChunkStatus, loadOrGenerate: boolean): ChunkAccess;
    getChunk(pos: BlockPos): ChunkAccess;
    getChunkForCollisions(chunkX: number, chunkZ: number): BlockGetter;
    getCollisions(source: Entity, box: AABB): VoxelShape[];
    getControlInputSignal(pos: BlockPos, direction: Direction, onlyDiodes: boolean): number;
    getDirectSignal(pos: BlockPos, direction: Direction): number;
    getDirectSignalTo(pos: BlockPos): number;
    getEffectiveSkyBrightness(pos: BlockPos): number;
    getFluidState(pos: BlockPos): FluidState;
    getHeight(): number;
    getHeight(type: Heightmap$Types, x: number, z: number): number;
    getHeight(type: Heightmap$Types, pos: BlockPos): number;
    getHeightmapPos(type: Heightmap$Types, pos: BlockPos): BlockPos;
    getLightEngine(): LevelLightEngine;
    getLightLevelDependentMagicValue(pos: BlockPos): number;
    getMaxLocalRawBrightness(pos: BlockPos): number;
    getMaxLocalRawBrightness(pos: BlockPos, skyDarkening: number): number;
    getMinY(): number;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getPathfindingCostFromLightLevels(pos: BlockPos): number;
    getPreMoveCollisions(source: Entity, box: AABB, oldPos: Vec3): VoxelShape[];
    getRawBrightness(pos: BlockPos, darkening: number): number;
    getSeaLevel(): number;
    getSignal(pos: BlockPos, direction: Direction): number;
    getSkyDarken(): number;
    getUncachedNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getWorldBorder(): WorldBorder;
    hasBiomes(): boolean;
    hasChunk(chunkX: number, chunkZ: number): boolean;
    hasChunkAt(blockX: number, blockZ: number): boolean;
    hasChunkAt(pos: BlockPos): boolean;
    hasChunksAt(x0: number, z0: number, x1: number, z1: number): boolean;
    hasChunksAt(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): boolean;
    hasChunksAt(pos0: BlockPos, pos1: BlockPos): boolean;
    hasNeighborSignal(blockPos: BlockPos): boolean;
    hasSignal(pos: BlockPos, direction: Direction): boolean;
    holderLookup<T extends unknown>(key: ResourceKey<T[]>): HolderLookup<T>;
    isClientSide(): boolean;
    isEmptyBlock(pos: BlockPos): boolean;
    isUnobstructed(ignore: Entity): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    isUnobstructed(state: BlockState, pos: BlockPos, context: CollisionContext): boolean;
    isWaterAt(pos: BlockPos): boolean;
    lithium$getLoadedChunk(arg0: number, arg1: number): ChunkAccess;
    noBlockCollision(entity: Entity, aabb: AABB): boolean;
    noBlockCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noBorderCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(source: Entity): boolean;
    noCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noCollision(aabb: AABB): boolean;
    noEntityCollision(entity: Entity, aabb: AABB): boolean;
    registryAccess(): RegistryAccess;
}