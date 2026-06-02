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
export class NoiseChunk$FlatCache extends Object implements DensityFunctions$MarkerOrMarked, NoiseChunk$NoiseChunkDensityFunction {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    private constructor(null_: NoiseChunk$FlatCache, noiseFiller: DensityFunction, fill: boolean)
    // private noiseFiller: DensityFunction;
    // private sizeXZ: number;
    // private values: number[];
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    type(): DensityFunctions$Marker$Type;
    wrapped(): DensityFunction;
}