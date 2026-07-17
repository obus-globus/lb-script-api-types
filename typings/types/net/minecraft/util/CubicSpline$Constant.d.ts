import type { Record } from '../../../java/lang/Record.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CubicSpline } from '../../../net/minecraft/util/CubicSpline.d.ts'
export class CubicSpline$Constant<I extends unknown> extends Record implements CubicSpline<I> {
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