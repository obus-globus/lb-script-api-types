import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BiFunction<T extends unknown, U extends unknown, R extends unknown> extends Object {
    andThen<V extends unknown>(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: T, arg1: U): R;
}