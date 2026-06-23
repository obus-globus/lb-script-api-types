import type { Function3 } from '../../../../com/mojang/datafixers/util/Function3.d.ts'
import type { Function4 } from '../../../../com/mojang/datafixers/util/Function4.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function5<T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown, R extends unknown> extends Object {
    apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R;
    curry(): (param0: T1) => Function4<T2, T3, T4, T5, R>;
    curry2(): (param0: T1, param1: T2) => Function3<T3, T4, T5, R>;
    curry3(): Function3<T1, T2, T3, (param0: T4, param1: T5) => R>;
    curry4(): Function4<T1, T2, T3, T4, (param0: T5) => R>;
}