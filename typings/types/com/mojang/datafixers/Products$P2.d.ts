import type { Products$P3 } from '../../../com/mojang/datafixers/Products$P3.d.ts'
import type { Products$P4 } from '../../../com/mojang/datafixers/Products$P4.d.ts'
import type { Products$P5 } from '../../../com/mojang/datafixers/Products$P5.d.ts'
import type { Products$P6 } from '../../../com/mojang/datafixers/Products$P6.d.ts'
import type { Products$P7 } from '../../../com/mojang/datafixers/Products$P7.d.ts'
import type { Products$P8 } from '../../../com/mojang/datafixers/Products$P8.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Products$P2<F extends K1, T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean> extends Object {
    constructor(arg0: App<F, T1>, arg1: App<F, T2>)
    // private t1: App<F, T1>;
    // private t2: App<F, T2>;
    and<T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean>(arg0: Products$P2<F, T3, T4>): Products$P4<F, T1, T2, T3, T4>;
    and<T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, T5 extends Object | number | string | boolean>(arg0: Products$P3<F, T3, T4, T5>): Products$P5<F, T1, T2, T3, T4, T5>;
    and<T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, T5 extends Object | number | string | boolean, T6 extends Object | number | string | boolean>(arg0: Products$P4<F, T3, T4, T5, T6>): Products$P6<F, T1, T2, T3, T4, T5, T6>;
    and<T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, T5 extends Object | number | string | boolean, T6 extends Object | number | string | boolean, T7 extends Object | number | string | boolean>(arg0: Products$P5<F, T3, T4, T5, T6, T7>): Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
    and<T3 extends Object | number | string | boolean, T4 extends Object | number | string | boolean, T5 extends Object | number | string | boolean, T6 extends Object | number | string | boolean, T7 extends Object | number | string | boolean, T8 extends Object | number | string | boolean>(arg0: Products$P6<F, T3, T4, T5, T6, T7, T8>): Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
    and<T3 extends Object | number | string | boolean>(arg0: App<F, T3>): Products$P3<F, T1, T2, T3>;
    apply<R extends Object | number | string | boolean>(arg0: Applicative<F, any>, arg1: App<F, (param0: T1, param1: T2) => R>): App<F, R>;
    apply<R extends Object | number | string | boolean>(arg0: Applicative<F, any>, arg1: (param0: T1, param1: T2) => R): App<F, R>;
    t1(): App<F, T1>;
    t2(): App<F, T2>;
}