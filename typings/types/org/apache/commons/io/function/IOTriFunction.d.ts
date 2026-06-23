import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export interface IOTriFunction<T extends unknown, U extends unknown, V extends unknown, R extends unknown> extends Object {
    andThen<W extends unknown>(arg0: (param0: R) => W): (param0: T, param1: U, param2: V) => W;
    apply(arg0: T, arg1: U, arg2: V): R;
}