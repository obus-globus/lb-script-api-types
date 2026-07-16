import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WorldGenRegion } from '../../../../../net/minecraft/server/level/WorldGenRegion.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { NoiseColumn } from '../../../../../net/minecraft/world/level/NoiseColumn.d.ts'
import type { StructureManager } from '../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeManager } from '../../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { BiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkGenerator } from '../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { Aquifer$FluidPicker } from '../../../../../net/minecraft/world/level/levelgen/Aquifer$FluidPicker.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { NoiseChunk } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk.d.ts'
import type { NoiseGeneratorSettings } from '../../../../../net/minecraft/world/level/levelgen/NoiseGeneratorSettings.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { WorldGenerationContext } from '../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { Blender } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender.d.ts'
import type { MutableObject } from '../../../../../org/apache/commons/lang3/mutable/MutableObject.d.ts'
export class NoiseBasedChunkGenerator extends ChunkGenerator {
    static CODEC: MapCodec<NoiseBasedChunkGenerator>;
    constructor(biomeSource: BiomeSource, settings: Holder<NoiseGeneratorSettings>)
    // private cachedSeaLevel: number;
    // private globalFluidPicker: () => Aquifer$FluidPicker;
    // private settings: Holder<NoiseGeneratorSettings>;
    addDebugScreenInfo(result: string[], randomState: RandomState, feetPos: BlockPos): void;
    applyCarvers(region: WorldGenRegion, seed: number, randomState: RandomState, biomeManager: BiomeManager, structureManager: StructureManager, chunk: ChunkAccess): void;
    buildSurface(region: WorldGenRegion, structureManager: StructureManager, randomState: RandomState, protoChunk: ChunkAccess): void;
    buildSurface(protoChunk: ChunkAccess, context: WorldGenerationContext, randomState: RandomState, structureManager: StructureManager, biomeManager: BiomeManager, blender: Blender, possibleBiomes: Holder<Biome>[]): void;
    codec(): MapCodec<ChunkGenerator>;
    createBiomes(randomState: RandomState, blender: Blender, structureManager: StructureManager, protoChunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    // private createNoiseChunk(chunk: ChunkAccess, structureManager: StructureManager, blender: Blender, randomState: RandomState): NoiseChunk;
    // private debugPreliminarySurfaceLevel(noiseChunk: NoiseChunk, posX: number, posY: number, posZ: number, state: BlockState): BlockState;
    // private doCreateBiomes(blender: Blender, randomState: RandomState, structureManager: StructureManager, protoChunk: ChunkAccess): void;
    // private doFill(blender: Blender, structureManager: StructureManager, randomState: RandomState, centerChunk: ChunkAccess, cellMinY: number, cellCountY: number): ChunkAccess;
    fillFromNoise(blender: Blender, randomState: RandomState, structureManager: StructureManager, centerChunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    generatorSettings(): Holder<NoiseGeneratorSettings>;
    getBaseColumn(x: number, z: number, heightAccessor: LevelHeightAccessor, randomState: RandomState): NoiseColumn;
    getBaseHeight(x: number, z: number, type: Heightmap$Types, heightAccessor: LevelHeightAccessor, randomState: RandomState): number;
    getGenDepth(): number;
    getInterpolatedNoiseValue(randomState: RandomState, context: DensityFunction$FunctionContext): number;
    getMinY(): number;
    getSeaLevel(): number;
    // private iterateNoiseColumn(heightAccessor: LevelHeightAccessor, randomState: RandomState, blockX: number, blockZ: number, columnReference: MutableObject<NoiseColumn>, tester: (param0: BlockState) => boolean): OptionalInt;
    spawnOriginalMobs(worldGenRegion: WorldGenRegion): void;
    stable(expectedPreset: ResourceKey<NoiseGeneratorSettings>): boolean;
}