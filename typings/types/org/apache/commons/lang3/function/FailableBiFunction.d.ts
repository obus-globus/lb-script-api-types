import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FailableFunction } from '../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
export interface FailableBiFunction<T extends unknown, U extends unknown, R extends unknown, E extends Throwable> extends Object {
    andThen<V extends unknown>(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: T, arg1: U): R;
}