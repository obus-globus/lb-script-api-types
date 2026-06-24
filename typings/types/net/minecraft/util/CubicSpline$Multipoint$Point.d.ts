import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../net/minecraft/util/CubicSpline.d.ts'
export class CubicSpline$Multipoint$Point<I extends BoundedFloatFunction<Object>> extends Record {
    static codec(paramsubSplineCodec: Codec<CubicSpline<Object>>): Codec<CubicSpline$Multipoint$Point<any>>;
    private constructor(location: number, value: CubicSpline<I>, derivative: number)
    // private derivative: number;
    // private location: number;
    // private value: CubicSpline<I>;
    derivative(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    location(): number;
    toString(): string;
    value(): CubicSpline<I>;
}