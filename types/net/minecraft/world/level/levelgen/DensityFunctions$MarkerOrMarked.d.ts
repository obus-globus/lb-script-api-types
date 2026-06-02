import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$Marker$Type } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Marker$Type.d.ts'
export interface DensityFunctions$MarkerOrMarked extends Object, DensityFunction{
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    cube(): DensityFunction;
    halfNegative(): DensityFunction;
    invert(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    type(): DensityFunctions$Marker$Type;
    wrapped(): DensityFunction;
}