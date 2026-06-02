import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Function8 } from '../../../com/mojang/datafixers/util/Function8.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Products$P8<F extends K1, T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean, T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, T5 extends Object | number | string | boolean, T6 extends Object | number | string | boolean, T7 extends Object | number | string | boolean, T8 extends Object | number | string | boolean> extends Object {
    constructor(arg0: App<F, T1>, arg1: App<F, T2>, arg2: App<F, T3>, arg3: App<F, T4>, arg4: App<F, T5>, arg5: App<F, T6>, arg6: App<F, T7>, arg7: App<F, T8>)
    // private t1: App<F, T1>;
    // private t2: App<F, T2>;
    // private t3: App<F, T3>;
    // private t4: App<F, T4>;
    // private t5: App<F, T5>;
    // private t6: App<F, T6>;
    // private t7: App<F, T7>;
    // private t8: App<F, T8>;
    apply(arg0: Applicative<F, Object>, arg1: App<F, Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): App<F, R>;
    apply(arg0: Applicative<F, Object>, arg1: Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>): App<F, R>;
    t1(): App<F, T1>;
    t2(): App<F, T2>;
    t3(): App<F, T3>;
    t4(): App<F, T4>;
    t5(): App<F, T5>;
    t6(): App<F, T6>;
    t7(): App<F, T7>;
    t8(): App<F, T8>;
}