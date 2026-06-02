import type { Products$P2 } from '../../../com/mojang/datafixers/Products$P2.d.ts'
import type { Products$P3 } from '../../../com/mojang/datafixers/Products$P3.d.ts'
import type { Products$P5 } from '../../../com/mojang/datafixers/Products$P5.d.ts'
import type { Products$P6 } from '../../../com/mojang/datafixers/Products$P6.d.ts'
import type { Products$P7 } from '../../../com/mojang/datafixers/Products$P7.d.ts'
import type { Products$P8 } from '../../../com/mojang/datafixers/Products$P8.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Function4 } from '../../../com/mojang/datafixers/util/Function4.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Products$P4<F extends K1, T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean, T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean> extends Object {
    constructor(arg0: App<F, T1>, arg1: App<F, T2>, arg2: App<F, T3>, arg3: App<F, T4>)
    // private t1: App<F, T1>;
    // private t2: App<F, T2>;
    // private t3: App<F, T3>;
    // private t4: App<F, T4>;
    and(arg0: Products$P2<F, T5, T6>): Products$P6<F, T1, T2, T3, T4, T5, T6>;
    and(arg0: Products$P3<F, T5, T6, T7>): Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
    and(arg0: Products$P4<F, T5, T6, T7, T8>): Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
    and(arg0: App<F, T5>): Products$P5<F, T1, T2, T3, T4, T5>;
    apply(arg0: Applicative<F, Object>, arg1: App<F, Function4<T1, T2, T3, T4, R>>): App<F, R>;
    apply(arg0: Applicative<F, Object>, arg1: Function4<T1, T2, T3, T4, R>): App<F, R>;
    t1(): App<F, T1>;
    t2(): App<F, T2>;
    t3(): App<F, T3>;
    t4(): App<F, T4>;
}