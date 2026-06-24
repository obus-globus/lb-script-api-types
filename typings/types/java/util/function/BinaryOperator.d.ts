import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BinaryOperator<T extends unknown> extends BiFunction<T, T, T>, BiFunction<T, T, T>, Object {
    andThen<V extends unknown>(arg0: (param0: T) => V): (param0: T, param1: T) => V;
}