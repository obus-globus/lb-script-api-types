import type { Function10 } from '../../../../com/mojang/datafixers/util/Function10.d.ts'
import type { Function3 } from '../../../../com/mojang/datafixers/util/Function3.d.ts'
import type { Function4 } from '../../../../com/mojang/datafixers/util/Function4.d.ts'
import type { Function5 } from '../../../../com/mojang/datafixers/util/Function5.d.ts'
import type { Function6 } from '../../../../com/mojang/datafixers/util/Function6.d.ts'
import type { Function7 } from '../../../../com/mojang/datafixers/util/Function7.d.ts'
import type { Function8 } from '../../../../com/mojang/datafixers/util/Function8.d.ts'
import type { Function9 } from '../../../../com/mojang/datafixers/util/Function9.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function11<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean, T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, T5 extends Object | number | string | boolean, T6 extends Object | number | string | boolean, T7 extends Object | number | string | boolean, T8 extends Object | number | string | boolean, T9 extends Object | number | string | boolean, T10 extends Object | number | string | boolean, T11 extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
    curry(): (param0: T1) => Function10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
    curry10(): Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, (param0: T11) => R>;
    curry2(): (param0: T1, param1: T2) => Function9<T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
    curry3(): Function3<T1, T2, T3, Function8<T4, T5, T6, T7, T8, T9, T10, T11, R>>;
    curry4(): Function4<T1, T2, T3, T4, Function7<T5, T6, T7, T8, T9, T10, T11, R>>;
    curry5(): Function5<T1, T2, T3, T4, T5, Function6<T6, T7, T8, T9, T10, T11, R>>;
    curry6(): Function6<T1, T2, T3, T4, T5, T6, Function5<T7, T8, T9, T10, T11, R>>;
    curry7(): Function7<T1, T2, T3, T4, T5, T6, T7, Function4<T8, T9, T10, T11, R>>;
    curry8(): Function8<T1, T2, T3, T4, T5, T6, T7, T8, Function3<T9, T10, T11, R>>;
    curry9(): Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, (param0: T10, param1: T11) => R>;
}