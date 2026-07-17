import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Aquifer } from '../../../../../net/minecraft/world/level/levelgen/Aquifer.d.ts'
import type { Aquifer$FluidPicker } from '../../../../../net/minecraft/world/level/levelgen/Aquifer$FluidPicker.d.ts'
import type { Aquifer$FluidStatus } from '../../../../../net/minecraft/world/level/levelgen/Aquifer$FluidStatus.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { NoiseChunk } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk.d.ts'
import type { NoiseRouter } from '../../../../../net/minecraft/world/level/levelgen/NoiseRouter.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
import type { MutableDouble } from '../../../../../org/apache/commons/lang3/mutable/MutableDouble.d.ts'
export class Aquifer$NoiseBasedAquifer extends Object implements Aquifer {
    private constructor(noiseChunk: NoiseChunk, pos: ChunkPos, router: NoiseRouter, positionalRandomFactory: PositionalRandomFactory, minBlockY: number, yBlockSize: number, globalFluidPicker: Aquifer$FluidPicker)
    // private aquiferCache: Aquifer$FluidStatus[];
    // private aquiferLocationCache: number[];
    // private barrierNoise: DensityFunction;
    // private depth: DensityFunction;
    // private erosion: DensityFunction;
    // private fluidLevelFloodednessNoise: DensityFunction;
    // private fluidLevelSpreadNoise: DensityFunction;
    // private globalFluidPicker: Aquifer$FluidPicker;
    // private gridSizeX: number;
    // private gridSizeZ: number;
    // private lavaNoise: DensityFunction;
    // private minGridX: number;
    // private minGridY: number;
    // private minGridZ: number;
    // private noiseChunk: NoiseChunk;
    // private positionalRandomFactory: PositionalRandomFactory;
    // private shouldScheduleFluidUpdate: boolean;
    // private skipSamplingAboveY: number;
    // private adjustSurfaceLevel(preliminarySurfaceLevel: number): number;
    // private calculatePressure(context: DensityFunction$FunctionContext, barrierNoiseValue: MutableDouble, statusClosest1: Aquifer$FluidStatus, statusClosest2: Aquifer$FluidStatus): number;
    // private computeFluid(x: number, y: number, z: number): Aquifer$FluidStatus;
    // private computeFluidType(x: number, y: number, z: number, globalFluid: Aquifer$FluidStatus, fluidSurfaceLevel: number): BlockState;
    // private computeRandomizedFluidSurfaceLevel(x: number, y: number, z: number, lowestPreliminarySurface: number): number;
    computeSubstance(context: DensityFunction$FunctionContext, density: number): BlockState;
    // private computeSurfaceLevel(x: number, y: number, z: number, globalFluid: Aquifer$FluidStatus, lowestPreliminarySurface: number, surfaceAtCenterIsUnderGlobalFluidLevel: boolean): number;
    // private getAquiferStatus(index: number): Aquifer$FluidStatus;
    // private getIndex(gridX: number, gridY: number, gridZ: number): number;
    shouldScheduleFluidUpdate(): boolean;
}