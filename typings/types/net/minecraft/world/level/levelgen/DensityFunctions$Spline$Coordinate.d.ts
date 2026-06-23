import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Float2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { BoundedFloatFunction } from '../../../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$Spline$Point } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Spline$Point.d.ts'
export class DensityFunctions$Spline$Coordinate extends Record implements BoundedFloatFunction<DensityFunctions$Spline$Point> {
    static CODEC: Codec<DensityFunctions$Spline$Coordinate>;
    static IDENTITY: BoundedFloatFunction<number>;
    static createUnlimited(paramfunction: (param0: number) => number): BoundedFloatFunction<number>;
    constructor(function_: Holder<DensityFunction>)
    // private function: Holder<DensityFunction>;
    apply(point: DensityFunctions$Spline$Point): number;
    comap<C2 extends unknown>(function_: (param0: C2) => DensityFunctions$Spline$Point): BoundedFloatFunction<C2>;
    equals(o: Object | null): boolean;
    function(): Holder<DensityFunction>;
    hashCode(): number;
    mapAll(visitor: DensityFunction$Visitor): DensityFunctions$Spline$Coordinate;
    maxValue(): number;
    minValue(): number;
    toString(): string;
}