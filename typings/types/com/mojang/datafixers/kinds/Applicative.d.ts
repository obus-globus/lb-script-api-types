import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative$Mu } from '../../../../com/mojang/datafixers/kinds/Applicative$Mu.d.ts'
import type { Functor } from '../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Function10 } from '../../../../com/mojang/datafixers/util/Function10.d.ts'
import type { Function11 } from '../../../../com/mojang/datafixers/util/Function11.d.ts'
import type { Function12 } from '../../../../com/mojang/datafixers/util/Function12.d.ts'
import type { Function13 } from '../../../../com/mojang/datafixers/util/Function13.d.ts'
import type { Function14 } from '../../../../com/mojang/datafixers/util/Function14.d.ts'
import type { Function15 } from '../../../../com/mojang/datafixers/util/Function15.d.ts'
import type { Function16 } from '../../../../com/mojang/datafixers/util/Function16.d.ts'
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
export interface Applicative<F extends K1, Mu extends Applicative$Mu> extends Functor<F, Mu>, Object {
    ap(arg0: App<F, (param0: A) => R>, arg1: App<F, A>): App<F, R>;
    ap(arg0: (param0: A) => R, arg1: App<F, A>): App<F, R>;
    ap10(arg0: App<F, Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>, arg10: App<F, T10>): App<F, R>;
    ap11(arg0: App<F, Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>, arg10: App<F, T10>, arg11: App<F, T11>): App<F, R>;
    ap12(arg0: App<F, Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>, arg10: App<F, T10>, arg11: App<F, T11>, arg12: App<F, T12>): App<F, R>;
    ap13(arg0: App<F, Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>, arg10: App<F, T10>, arg11: App<F, T11>, arg12: App<F, T12>, arg13: App<F, T13>): App<F, R>;
    ap14(arg0: App<F, Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>, arg10: App<F, T10>, arg11: App<F, T11>, arg12: App<F, T12>, arg13: App<F, T13>, arg14: App<F, T14>): App<F, R>;
    ap15(arg0: App<F, Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>, arg10: App<F, T10>, arg11: App<F, T11>, arg12: App<F, T12>, arg13: App<F, T13>, arg14: App<F, T14>, arg15: App<F, T15>): App<F, R>;
    ap16(arg0: App<F, Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>, arg10: App<F, T10>, arg11: App<F, T11>, arg12: App<F, T12>, arg13: App<F, T13>, arg14: App<F, T14>, arg15: App<F, T15>, arg16: App<F, T16>): App<F, R>;
    ap2(arg0: App<F, (param0: A, param1: B) => R>, arg1: App<F, A>, arg2: App<F, B>): App<F, R>;
    ap3(arg0: App<F, Function3<T1, T2, T3, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>): App<F, R>;
    ap4(arg0: App<F, Function4<T1, T2, T3, T4, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>): App<F, R>;
    ap5(arg0: App<F, Function5<T1, T2, T3, T4, T5, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>): App<F, R>;
    ap6(arg0: App<F, Function6<T1, T2, T3, T4, T5, T6, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>): App<F, R>;
    ap7(arg0: App<F, Function7<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>): App<F, R>;
    ap8(arg0: App<F, Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>): App<F, R>;
    ap9(arg0: App<F, Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>): App<F, R>;
    apply2(arg0: (param0: A, param1: B) => R, arg1: App<F, A>, arg2: App<F, B>): App<F, R>;
    apply3(arg0: Function3<T1, T2, T3, R>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>): App<F, R>;
    apply4(arg0: Function4<T1, T2, T3, T4, R>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>): App<F, R>;
    apply5(arg0: Function5<T1, T2, T3, T4, T5, R>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>): App<F, R>;
    apply6(arg0: Function6<T1, T2, T3, T4, T5, T6, R>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>): App<F, R>;
    apply7(arg0: Function7<T1, T2, T3, T4, T5, T6, T7, R>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>): App<F, R>;
    apply8(arg0: Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>): App<F, R>;
    apply9(arg0: Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: App<F, T1>, arg2: App<F, T2>, arg3: App<F, T3>, arg4: App<F, T4>, arg5: App<F, T5>, arg6: App<F, T6>, arg7: App<F, T7>, arg8: App<F, T8>, arg9: App<F, T9>): App<F, R>;
    lift1(arg0: App<F, (param0: A) => R>): (param0: App<F, A>) => App<F, R>;
    lift2(arg0: App<F, (param0: A, param1: B) => R>): (param0: App<F, A>, param1: App<F, B>) => App<F, R>;
    lift3(arg0: App<F, Function3<T1, T2, T3, R>>): Function3<App<F, T1>, App<F, T2>, App<F, T3>, App<F, R>>;
    lift4(arg0: App<F, Function4<T1, T2, T3, T4, R>>): Function4<App<F, T1>, App<F, T2>, App<F, T3>, App<F, T4>, App<F, R>>;
    lift5(arg0: App<F, Function5<T1, T2, T3, T4, T5, R>>): Function5<App<F, T1>, App<F, T2>, App<F, T3>, App<F, T4>, App<F, T5>, App<F, R>>;
    lift6(arg0: App<F, Function6<T1, T2, T3, T4, T5, T6, R>>): Function6<App<F, T1>, App<F, T2>, App<F, T3>, App<F, T4>, App<F, T5>, App<F, T6>, App<F, R>>;
    lift7(arg0: App<F, Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Function7<App<F, T1>, App<F, T2>, App<F, T3>, App<F, T4>, App<F, T5>, App<F, T6>, App<F, T7>, App<F, R>>;
    lift8(arg0: App<F, Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Function8<App<F, T1>, App<F, T2>, App<F, T3>, App<F, T4>, App<F, T5>, App<F, T6>, App<F, T7>, App<F, T8>, App<F, R>>;
    lift9(arg0: App<F, Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Function9<App<F, T1>, App<F, T2>, App<F, T3>, App<F, T4>, App<F, T5>, App<F, T6>, App<F, T7>, App<F, T8>, App<F, T9>, App<F, R>>;
    point<A extends Object | number | string | boolean>(arg0: A): App<F, A>;
}