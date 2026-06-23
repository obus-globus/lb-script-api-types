import type { Function3 } from '../../../../com/mojang/datafixers/util/Function3.d.ts'
import type { Function4 } from '../../../../com/mojang/datafixers/util/Function4.d.ts'
import type { Function5 } from '../../../../com/mojang/datafixers/util/Function5.d.ts'
import type { Function6 } from '../../../../com/mojang/datafixers/util/Function6.d.ts'
import type { Function7 } from '../../../../com/mojang/datafixers/util/Function7.d.ts'
import type { Function8 } from '../../../../com/mojang/datafixers/util/Function8.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function9<T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, R extends unknown> extends Object {
    apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R;
    curry(): (param0: T1) => Function8<T2, T3, T4, T5, T6, T7, T8, T9, R>;
    curry2(): (param0: T1, param1: T2) => Function7<T3, T4, T5, T6, T7, T8, T9, R>;
    curry3(): Function3<T1, T2, T3, Function6<T4, T5, T6, T7, T8, T9, R>>;
    curry4(): Function4<T1, T2, T3, T4, Function5<T5, T6, T7, T8, T9, R>>;
    curry5(): Function5<T1, T2, T3, T4, T5, Function4<T6, T7, T8, T9, R>>;
    curry6(): Function6<T1, T2, T3, T4, T5, T6, Function3<T7, T8, T9, R>>;
    curry7(): Function7<T1, T2, T3, T4, T5, T6, T7, (param0: T8, param1: T9) => R>;
    curry8(): Function8<T1, T2, T3, T4, T5, T6, T7, T8, (param0: T9) => R>;
}