import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export interface IOBiFunction<T extends unknown, U extends unknown, R extends unknown> extends Object {
    andThen<V extends unknown>(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: T, arg1: U): R;
    asBiFunction(): (param0: T, param1: U) => R;
}