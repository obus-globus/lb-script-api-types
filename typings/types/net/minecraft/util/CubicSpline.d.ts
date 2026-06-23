import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline$CoordinateVisitor } from '../../../net/minecraft/util/CubicSpline$CoordinateVisitor.d.ts'
export interface CubicSpline<C extends unknown, I extends BoundedFloatFunction<C>> extends Object, BoundedFloatFunction<C> {
    comap<C2 extends unknown>(function_: (param0: C2) => C): BoundedFloatFunction<C2>;
    mapAll(visitor: CubicSpline$CoordinateVisitor<I>): CubicSpline<C, I>;
    parityString(): string;
}