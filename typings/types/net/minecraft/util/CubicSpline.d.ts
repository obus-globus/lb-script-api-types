import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CubicSpline<I extends unknown> extends Object {
    mapCoordinates(mapper: (param0: I) => Object | null): CubicSpline<I>;
    maxValue(): number;
    minValue(): number;
    parityString(): string;
}