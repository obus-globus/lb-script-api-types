import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { Aquifer } from '../../../../../net/minecraft/world/level/levelgen/Aquifer.d.ts'
import type { Aquifer$FluidPicker } from '../../../../../net/minecraft/world/level/levelgen/Aquifer$FluidPicker.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunctions$BeardifierOrMarker } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$BeardifierOrMarker.d.ts'
import type { NoiseChunk$BlockStateFiller } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk$BlockStateFiller.d.ts'
import type { NoiseChunk$CacheAllInCell } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk$CacheAllInCell.d.ts'
import type { NoiseChunk$FlatCache } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk$FlatCache.d.ts'
import type { NoiseChunk$NoiseInterpolator } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk$NoiseInterpolator.d.ts'
import type { NoiseGeneratorSettings } from '../../../../../net/minecraft/world/level/levelgen/NoiseGeneratorSettings.d.ts'
import type { NoiseRouter } from '../../../../../net/minecraft/world/level/levelgen/NoiseRouter.d.ts'
import type { NoiseSettings } from '../../../../../net/minecraft/world/level/levelgen/NoiseSettings.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { Blender } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender.d.ts'
import type { Blender$BlendingOutput } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender$BlendingOutput.d.ts'
export class NoiseChunk extends Object implements DensityFunction$ContextProvider, DensityFunction$FunctionContext {
    static forChunk(paramchunk: ChunkAccess, paramrandomState: RandomState, parambeardifier: DensityFunctions$BeardifierOrMarker, paramsettings: NoiseGeneratorSettings, paramglobalFluidPicker: Aquifer$FluidPicker, paramblender: Blender): NoiseChunk;
    constructor(cellCountXZ: number, randomState: RandomState, chunkMinBlockX: number, chunkMinBlockZ: number, noiseSettings: NoiseSettings, beardifier: DensityFunctions$BeardifierOrMarker, settings: NoiseGeneratorSettings, globalFluidPicker: Aquifer$FluidPicker, blender: Blender)
    // private aquifer: Aquifer;
    // private arrayIndex: number;
    // private arrayInterpolationCounter: number;
    // private beardifier: DensityFunctions$BeardifierOrMarker;
    // private blendAlpha: NoiseChunk$FlatCache;
    // private blendOffset: NoiseChunk$FlatCache;
    // private blender: Blender;
    // private blockStateRule: (param0: DensityFunction$FunctionContext) => BlockState;
    // private cellCaches: NoiseChunk$CacheAllInCell[];
    // private cellCountXZ: number;
    // private cellCountY: number;
    // private cellHeight: number;
    // private cellNoiseMinY: number;
    // private cellStartBlockX: number;
    // private cellStartBlockY: number;
    // private cellStartBlockZ: number;
    // private cellWidth: number;
    // private fillingCell: boolean;
    // private firstCellX: number;
    // private firstCellZ: number;
    // private firstNoiseX: number;
    // private firstNoiseZ: number;
    // private fullNoiseDensity: DensityFunction;
    // private inCellX: number;
    // private inCellY: number;
    // private inCellZ: number;
    // private interpolating: boolean;
    // private interpolationCounter: number;
    // private interpolators: NoiseChunk$NoiseInterpolator[];
    // private lastBlendingDataPos: number;
    // private lastBlendingOutput: Blender$BlendingOutput;
    // private noiseSizeXZ: number;
    // private preliminarySurfaceLevel: DensityFunction;
    // private preliminarySurfaceLevelCache: JavaMap<any, any>;
    // private seed: number;
    // private sliceFillingContextProvider: DensityFunction$ContextProvider;
    // private wrapped: JavaMap<DensityFunction, DensityFunction>;
    advanceCellX(cellXIndex: number): void;
    aquifer(): Aquifer;
    blockX(): number;
    blockY(): number;
    blockZ(): number;
    cachedClimateSampler(noises: NoiseRouter, spawnTarget: Climate$ParameterPoint[]): Climate$Sampler;
    cellHeight(): number;
    cellWidth(): number;
    // private computePreliminarySurfaceLevel(key: number): number;
    fillAllDirectly(output: number[], function_: DensityFunction): void;
    // private fillSlice(slice0: boolean, cellX: number): void;
    forIndex(cellIndex: number): NoiseChunk;
    getInterpolatedDensity(): number;
    getInterpolatedState(): BlockState;
    // private getOrComputeBlendingOutput(blockX: number, blockZ: number): Blender$BlendingOutput;
    initializeForFirstCellX(): void;
    maxPreliminarySurfaceLevel(minBlockX: number, minBlockZ: number, maxBlockX: number, maxBlockZ: number): number;
    preliminarySurfaceLevel(sampleX: number, sampleZ: number): number;
    selectCellYZ(cellYIndex: number, cellZIndex: number): void;
    stopInterpolation(): void;
    swapSlices(): void;
    updateForX(posX: number, factorX: number): void;
    updateForY(posY: number, factorY: number): void;
    updateForZ(posZ: number, factorZ: number): void;
    wrap(function_: DensityFunction): DensityFunction;
    // private wrapNew(function_: DensityFunction): DensityFunction;
}