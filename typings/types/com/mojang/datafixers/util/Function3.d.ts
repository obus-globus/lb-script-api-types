import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function3<T1 extends unknown, T2 extends unknown, T3 extends unknown, R extends unknown> extends Object {
    apply(arg0: T1, arg1: T2, arg2: T3): R;
    curry(): (param0: T1) => (param0: T2, param1: T3) => R;
    curry2(): (param0: T1, param1: T2) => (param0: T3) => R;
}