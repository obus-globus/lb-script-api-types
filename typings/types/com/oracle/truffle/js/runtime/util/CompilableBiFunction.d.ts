import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CompilableBiFunction<T extends unknown, U extends unknown, R extends unknown> extends BiFunction<T, U, R>, Object {
    andThen<V extends unknown>(arg0: (param0: R) => V): (param0: T, param1: U) => V;
}