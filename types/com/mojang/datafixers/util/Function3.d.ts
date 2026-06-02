import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function3<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean, T3 extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    apply(arg0: T1, arg1: T2, arg2: T3): R;
    curry(): (param0: T1) => (param0: T2, param1: T3) => R;
    curry2(): (param0: T1, param1: T2) => (param0: T3) => R;
}