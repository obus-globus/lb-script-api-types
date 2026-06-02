import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CubicSpline } from '../../../../../net/minecraft/util/CubicSpline.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$Spline$Coordinate } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Spline$Coordinate.d.ts'
import type { DensityFunctions$Spline$Point } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Spline$Point.d.ts'
export class DensityFunctions$Spline extends Record implements DensityFunction {
    static CODEC: Codec<Object>;
    static CODEC: KeyDispatchDataCodec<DensityFunctions$Spline>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    constructor(spline: CubicSpline<DensityFunctions$Spline$Point, DensityFunctions$Spline$Coordinate>)
    // private spline: CubicSpline<DensityFunctions$Spline$Point, DensityFunctions$Spline$Coordinate>;
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    cube(): DensityFunction;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    halfNegative(): DensityFunction;
    hashCode(): number;
    invert(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    quarterNegative(): DensityFunction;
    spline(): CubicSpline<DensityFunctions$Spline$Point, DensityFunctions$Spline$Coordinate>;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    toString(): string;
}