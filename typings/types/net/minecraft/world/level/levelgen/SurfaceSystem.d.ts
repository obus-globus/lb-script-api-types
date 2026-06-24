import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeManager } from '../../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockColumn } from '../../../../../net/minecraft/world/level/chunk/BlockColumn.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { NoiseChunk } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { WorldGenerationContext } from '../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { CarvingContext } from '../../../../../net/minecraft/world/level/levelgen/carver/CarvingContext.d.ts'
import type { NormalNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise.d.ts'
export class SurfaceSystem extends Object {
    constructor(randomState: RandomState, defaultBlock: BlockState, seaLevel: number, noiseRandom: PositionalRandomFactory)
    // private badlandsPillarNoise: NormalNoise;
    // private badlandsPillarRoofNoise: NormalNoise;
    // private badlandsSurfaceNoise: NormalNoise;
    // private clayBands: BlockState[];
    // private clayBandsOffsetNoise: NormalNoise;
    // private defaultBlock: BlockState;
    // private icebergPillarNoise: NormalNoise;
    // private icebergPillarRoofNoise: NormalNoise;
    // private icebergSurfaceNoise: NormalNoise;
    // private noiseRandom: PositionalRandomFactory;
    readonly seaLevel: number;
    // private surfaceNoise: NormalNoise;
    // private surfaceSecondaryNoise: NormalNoise;
    buildSurface(randomState: RandomState, biomeManager: BiomeManager, useLegacyRandom: boolean, generationContext: WorldGenerationContext, protoChunk: ChunkAccess, noiseChunk: NoiseChunk, ruleSource: SurfaceRules$RuleSource, possibleBiomes: Holder<Biome>[]): void;
    // private erodedBadlandsExtension(column: BlockColumn, blockX: number, blockZ: number, height: number, protoChunk: LevelHeightAccessor): void;
    // private frozenOceanExtension(minSurfaceLevel: number, surfaceBiome: Biome, column: BlockColumn, blockPos: BlockPos$MutableBlockPos, blockX: number, blockZ: number, height: number): void;
    getBand(worldX: number, y: number, worldZ: number): BlockState;
    getSeaLevel(): number;
    getSurfaceDepth(blockX: number, blockZ: number): number;
    getSurfaceSecondary(blockX: number, blockZ: number): number;
    // private isStone(state: BlockState): boolean;
    topMaterial(ruleSource: SurfaceRules$RuleSource, carvingContext: CarvingContext, biomeGetter: (param0: BlockPos) => Holder<Biome>, chunk: ChunkAccess, noiseChunk: NoiseChunk, pos: BlockPos, underFluid: boolean): Optional<BlockState>;
}