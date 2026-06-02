import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$SimpleFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$SimpleFunction.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
export interface DensityFunctions$BeardifierOrMarker extends Object, DensityFunction$SimpleFunction{
    codec(): KeyDispatchDataCodec<DensityFunction>;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
}