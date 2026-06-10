import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export interface IOBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: T, arg1: U): R;
    asBiFunction(): (param0: T, param1: U) => R;
}