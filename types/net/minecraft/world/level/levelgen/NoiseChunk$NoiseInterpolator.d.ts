import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$Marker$Type } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Marker$Type.d.ts'
import type { DensityFunctions$MarkerOrMarked } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$MarkerOrMarked.d.ts'
import type { NoiseChunk$NoiseChunkDensityFunction } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk$NoiseChunkDensityFunction.d.ts'
export class NoiseChunk$NoiseInterpolator extends Object implements DensityFunctions$MarkerOrMarked, NoiseChunk$NoiseChunkDensityFunction {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    private constructor(null_: NoiseChunk$NoiseInterpolator, noiseFiller: DensityFunction)
    // private noise000: number;
    // private noise001: number;
    // private noise010: number;
    // private noise011: number;
    // private noise100: number;
    // private noise101: number;
    // private noise110: number;
    // private noise111: number;
    // private noiseFiller: DensityFunction;
    // private slice0: number[][];
    // private slice1: number[][];
    // private value: number;
    // private valueXZ00: number;
    // private valueXZ01: number;
    // private valueXZ10: number;
    // private valueXZ11: number;
    // private valueZ0: number;
    // private valueZ1: number;
    // private allocateSlice(cellCountY: number, cellCountZ: number): number[][];
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    // private selectCellYZ(cellYIndex: number, cellZIndex: number): void;
    // private swapSlices(): void;
    type(): DensityFunctions$Marker$Type;
    // private updateForX(factorX: number): void;
    // private updateForY(factorY: number): void;
    // private updateForZ(factorZ: number): void;
    wrapped(): DensityFunction;
}