import type { Function3 } from '../../../../com/mojang/datafixers/util/Function3.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function4<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean, T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R;
    curry(): (param0: T1) => Function3<T2, T3, T4, R>;
    curry2(): (param0: T1, param1: T2) => BiFunction<T3, T4, R>;
    curry3(): Function3<T1, T2, T3, (param0: T4) => R>;
}