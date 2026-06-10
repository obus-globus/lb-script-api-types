import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FailableFunction } from '../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
export interface FailableBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, R extends Object | number | string | boolean, E extends Throwable> extends Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: T, arg1: U): R;
}