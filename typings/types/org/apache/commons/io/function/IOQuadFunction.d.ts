import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export interface IOQuadFunction<T extends unknown, U extends unknown, V extends unknown, W extends unknown, R extends unknown> extends Object {
    andThen<X extends unknown>(arg0: (param0: R) => X): (param0: T, param1: U, param2: V, param3: W) => X;
    apply(arg0: T, arg1: U, arg2: V, arg3: W): R;
}