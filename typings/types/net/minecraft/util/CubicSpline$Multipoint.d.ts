import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../net/minecraft/util/CubicSpline.d.ts'
import type { CubicSpline$Builder } from '../../../net/minecraft/util/CubicSpline$Builder.d.ts'
import type { CubicSpline$CoordinateVisitor } from '../../../net/minecraft/util/CubicSpline$CoordinateVisitor.d.ts'
export class CubicSpline$Multipoint<C extends unknown, I extends BoundedFloatFunction<C>> extends Record implements CubicSpline<C, I> {
    static IDENTITY: BoundedFloatFunction<number>;
    static builder(paramcoordinate: Object | null): CubicSpline$Builder<Object, any>;
    static builder(paramcoordinate: Object | null, paramvalueTransformer: BoundedFloatFunction<number>): CubicSpline$Builder<Object, any>;
    static codec(paramcoordinateCodec: Codec<Object>): Codec<CubicSpline<Object, any>>;
    static constant(paramvalue: number): CubicSpline<Object, any>;
    // private coordinate: I;
    // private derivatives: number[];
    // private locations: number[];
    // private maxValue: number;
    // private minValue: number;
    // private values: CubicSpline<C, I>[];
    apply(c: C): number;
    coordinate(): I;
    derivatives(): number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    locations(): number[];
    mapAll(visitor: CubicSpline$CoordinateVisitor<I>): CubicSpline<C, I>;
    maxValue(): number;
    minValue(): number;
    parityString(): string;
    toString(): string;
    // private toString(arr: number[]): string;
    values(): CubicSpline<C, I>[];
}