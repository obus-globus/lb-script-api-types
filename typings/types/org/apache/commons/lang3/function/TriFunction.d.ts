import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TriFunction<T extends unknown, U extends unknown, V extends unknown, R extends unknown> extends Object {
    andThen<W extends unknown>(arg0: (param0: R) => W): (param0: T, param1: U, param2: V) => W;
    apply(arg0: T, arg1: U, arg2: V): R;
}