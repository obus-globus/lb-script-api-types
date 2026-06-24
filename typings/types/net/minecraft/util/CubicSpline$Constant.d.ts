import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Float2FloatFunction } from '../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../net/minecraft/util/CubicSpline.d.ts'
import type { CubicSpline$Builder } from '../../../net/minecraft/util/CubicSpline$Builder.d.ts'
export class CubicSpline$Constant<I extends unknown> extends Record implements CubicSpline<I> {
    static asSampler(paramspline: CubicSpline<Object>): BoundedFloatFunction<Object>;
    static builder(paramcoordinate: Object | null): CubicSpline$Builder<any>;
    static builder(paramcoordinate: Object | null, paramvalueTransformer: (param0: number) => number): CubicSpline$Builder<any>;
    static codec(paramcoordinateCodec: Codec<Object>): Codec<CubicSpline<Object>>;
    static constant(paramvalue: number): CubicSpline<Object>;
    static sample(paramspline: CubicSpline<Object>, paramcoordinate: Object | null): number;
    constructor(value: number)
    // private value: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mapCoordinates(mapper: (param0: I) => Object | null): CubicSpline<I>;
    maxValue(): number;
    minValue(): number;
    parityString(): string;
    toString(): string;
    value(): number;
}