import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Float2FloatFunction } from '../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../net/minecraft/util/CubicSpline.d.ts'
import type { CubicSpline$Builder } from '../../../net/minecraft/util/CubicSpline$Builder.d.ts'
export class CubicSpline$Constant<I extends unknown> extends Record implements CubicSpline<I> {
    static asSampler<C extends unknown, I extends BoundedFloatFunction<C>>(paramspline: CubicSpline<I>): BoundedFloatFunction<C>;
    static builder<I extends BoundedFloatFunction<Object>>(paramcoordinate: I): CubicSpline$Builder<I>;
    static builder<I extends BoundedFloatFunction<Object>>(paramcoordinate: I, paramvalueTransformer: (param0: number) => number): CubicSpline$Builder<I>;
    static codec<I extends BoundedFloatFunction<Object>>(paramcoordinateCodec: Codec<I>): Codec<CubicSpline<I>>;
    static constant<I extends unknown>(paramvalue: number): CubicSpline<I>;
    static sample<C extends unknown, I extends BoundedFloatFunction<C>>(paramspline: CubicSpline<I>, paramcoordinate: C): number;
    constructor(value: number)
    // private value: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mapCoordinates(mapper: (param0: I) => I): CubicSpline<I>;
    maxValue(): number;
    minValue(): number;
    parityString(): string;
    toString(): string;
    value(): number;
}