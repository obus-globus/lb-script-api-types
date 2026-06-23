import type { Products$P2 } from '../../../com/mojang/datafixers/Products$P2.d.ts'
import type { Products$P3 } from '../../../com/mojang/datafixers/Products$P3.d.ts'
import type { Products$P4 } from '../../../com/mojang/datafixers/Products$P4.d.ts'
import type { Products$P5 } from '../../../com/mojang/datafixers/Products$P5.d.ts'
import type { Products$P6 } from '../../../com/mojang/datafixers/Products$P6.d.ts'
import type { Products$P7 } from '../../../com/mojang/datafixers/Products$P7.d.ts'
import type { Products$P8 } from '../../../com/mojang/datafixers/Products$P8.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Products$P1<F extends K1, T1 extends unknown> extends Object {
    constructor(arg0: App<F, T1>)
    // private t1: App<F, T1>;
    and<T2 extends unknown, T3 extends unknown>(arg0: Products$P2<F, T2, T3>): Products$P3<F, T1, T2, T3>;
    and<T2 extends unknown, T3 extends unknown, T4 extends unknown>(arg0: Products$P3<F, T2, T3, T4>): Products$P4<F, T1, T2, T3, T4>;
    and<T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown>(arg0: Products$P4<F, T2, T3, T4, T5>): Products$P5<F, T1, T2, T3, T4, T5>;
    and<T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown, T6 extends unknown>(arg0: Products$P5<F, T2, T3, T4, T5, T6>): Products$P6<F, T1, T2, T3, T4, T5, T6>;
    and<T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown, T6 extends unknown, T7 extends unknown>(arg0: Products$P6<F, T2, T3, T4, T5, T6, T7>): Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
    and<T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown>(arg0: Products$P7<F, T2, T3, T4, T5, T6, T7, T8>): Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
    and<T2 extends unknown>(arg0: App<F, T2>): Products$P2<F, T1, T2>;
    apply<R extends unknown>(arg0: Applicative<F, any>, arg1: App<F, (param0: T1) => R>): App<F, R>;
    apply<R extends unknown>(arg0: Applicative<F, any>, arg1: (param0: T1) => R): App<F, R>;
    t1(): App<F, T1>;
}