import type { Products$P10 } from '../../../com/mojang/datafixers/Products$P10.d.ts'
import type { Products$P11 } from '../../../com/mojang/datafixers/Products$P11.d.ts'
import type { Products$P12 } from '../../../com/mojang/datafixers/Products$P12.d.ts'
import type { Products$P13 } from '../../../com/mojang/datafixers/Products$P13.d.ts'
import type { Products$P14 } from '../../../com/mojang/datafixers/Products$P14.d.ts'
import type { Products$P15 } from '../../../com/mojang/datafixers/Products$P15.d.ts'
import type { Products$P16 } from '../../../com/mojang/datafixers/Products$P16.d.ts'
import type { Products$P2 } from '../../../com/mojang/datafixers/Products$P2.d.ts'
import type { Products$P3 } from '../../../com/mojang/datafixers/Products$P3.d.ts'
import type { Products$P5 } from '../../../com/mojang/datafixers/Products$P5.d.ts'
import type { Products$P6 } from '../../../com/mojang/datafixers/Products$P6.d.ts'
import type { Products$P7 } from '../../../com/mojang/datafixers/Products$P7.d.ts'
import type { Products$P8 } from '../../../com/mojang/datafixers/Products$P8.d.ts'
import type { Products$P9 } from '../../../com/mojang/datafixers/Products$P9.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Function4 } from '../../../com/mojang/datafixers/util/Function4.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Products$P4<F extends K1, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown> extends Record {
    constructor(t1: App<F, T1>, t2: App<F, T2>, t3: App<F, T3>, t4: App<F, T4>)
    // private t1: App<F, T1>;
    // private t2: App<F, T2>;
    // private t3: App<F, T3>;
    // private t4: App<F, T4>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown, T11 extends unknown, T12 extends unknown, T13 extends unknown, T14 extends unknown>(arg0: Products$P10<F, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>): Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown, T11 extends unknown, T12 extends unknown, T13 extends unknown, T14 extends unknown, T15 extends unknown>(arg0: Products$P11<F, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>): Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown, T11 extends unknown, T12 extends unknown, T13 extends unknown, T14 extends unknown, T15 extends unknown, T16 extends unknown>(arg0: Products$P12<F, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>): Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
    and<T5 extends unknown, T6 extends unknown>(arg0: Products$P2<F, T5, T6>): Products$P6<F, T1, T2, T3, T4, T5, T6>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown>(arg0: Products$P3<F, T5, T6, T7>): Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown>(arg0: Products$P4<F, T5, T6, T7, T8>): Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown>(arg0: Products$P5<F, T5, T6, T7, T8, T9>): Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown>(arg0: Products$P6<F, T5, T6, T7, T8, T9, T10>): Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown, T11 extends unknown>(arg0: Products$P7<F, T5, T6, T7, T8, T9, T10, T11>): Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown, T11 extends unknown, T12 extends unknown>(arg0: Products$P8<F, T5, T6, T7, T8, T9, T10, T11, T12>): Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
    and<T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown, T11 extends unknown, T12 extends unknown, T13 extends unknown>(arg0: Products$P9<F, T5, T6, T7, T8, T9, T10, T11, T12, T13>): Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
    and<T5 extends unknown>(arg0: App<F, T5>): Products$P5<F, T1, T2, T3, T4, T5>;
    apply<R extends unknown>(arg0: Applicative<F, any>, arg1: App<F, Function4<T1, T2, T3, T4, R>>): App<F, R>;
    apply<R extends unknown>(arg0: Applicative<F, any>, arg1: Function4<T1, T2, T3, T4, R>): App<F, R>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    t1(): App<F, T1>;
    t2(): App<F, T2>;
    t3(): App<F, T3>;
    t4(): App<F, T4>;
    toString(): string;
}