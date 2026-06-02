import type { Function3 } from '../../../../com/mojang/datafixers/util/Function3.d.ts'
import type { Function4 } from '../../../../com/mojang/datafixers/util/Function4.d.ts'
import type { Function5 } from '../../../../com/mojang/datafixers/util/Function5.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function6<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean, T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, T5 extends Object | number | string | boolean, T6 extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R;
    curry(): (param0: T1) => Function5<T2, T3, T4, T5, T6, R>;
    curry2(): (param0: T1, param1: T2) => Function4<T3, T4, T5, T6, R>;
    curry3(): Function3<T1, T2, T3, Function3<T4, T5, T6, R>>;
    curry4(): Function4<T1, T2, T3, T4, (param0: T5, param1: T6) => R>;
    curry5(): Function5<T1, T2, T3, T4, T5, (param0: T6) => R>;
}