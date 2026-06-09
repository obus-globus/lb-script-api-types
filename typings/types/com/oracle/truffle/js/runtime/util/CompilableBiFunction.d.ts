import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CompilableBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, R extends Object | number | string | boolean> extends BiFunction<T, U, R>, Object {
    andThen(arg0: (param0: R) => V): (param0: T, param1: U) => V;
}