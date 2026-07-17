import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { NoiseChunk } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceSystem } from '../../../../../net/minecraft/world/level/levelgen/SurfaceSystem.d.ts'
import type { WorldGenerationContext } from '../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class SurfaceRules$Context extends Object {
    constructor(system: SurfaceSystem, randomState: RandomState, chunk: ChunkAccess, noiseChunk: NoiseChunk, biomeGetter: (param0: BlockPos) => Holder<Biome>, context: WorldGenerationContext, possibleBiomes: Holder<Biome>[])
    // private abovePreliminarySurface: SurfaceRules$Condition;
    // private biome: Holder<Biome>;
    // private biomeGetter: (param0: BlockPos) => Holder<Biome>;
    // private blockX: number;
    // private blockY: number;
    // private blockZ: number;
    // private chunk: ChunkAccess;
    // private context: WorldGenerationContext;
    // private hole: SurfaceRules$Condition;
    // private lastMinSurfaceLevelUpdate: number;
    // private lastPreliminarySurfaceCellOrigin: number;
    // private lastSurfaceDepth2Update: number;
    // private lastUpdateXZ: number;
    // private lastUpdateY: number;
    // private minSurfaceLevel: number;
    // private noiseChunk: NoiseChunk;
    // private noiseSamplers2d: JavaMap<ResourceKey<NormalNoise$NoiseParameters>, () => number>;
    // private noiseSamplers3d: JavaMap<ResourceKey<NormalNoise$NoiseParameters>, () => number>;
    // private pos: BlockPos$MutableBlockPos;
    // private possibleBiomes: Holder<Biome>[];
    // private preliminarySurfaceCache: number[];
    // private randomState: RandomState;
    // private steep: SurfaceRules$Condition;
    // private stoneDepthAbove: number;
    // private stoneDepthBelow: number;
    // private surfaceDepth: number;
    // private surfaceSecondary: number;
    // private system: SurfaceSystem;
    // private temperature: SurfaceRules$Condition;
    // private waterHeight: number;
    // private createNoiseSampler2d(noiseId: ResourceKey<NormalNoise$NoiseParameters>): () => number;
    // private createNoiseSampler3d(noiseId: ResourceKey<NormalNoise$NoiseParameters>): () => number;
    getBiome(): Holder<Biome>;
    getMinSurfaceLevel(): number;
    getNoiseSampler(noiseId: ResourceKey<NormalNoise$NoiseParameters>, is3d: boolean): () => number;
    getSeaLevel(): number;
    getSurfaceSecondary(): number;
    updateXZ(blockX: number, blockZ: number): void;
    updateY(stoneDepthAbove: number, stoneDepthBelow: number, waterHeight: number, blockY: number): void;
}