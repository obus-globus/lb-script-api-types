import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Function16 } from '../../../com/mojang/datafixers/util/Function16.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Products$P16<F extends K1, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown, T6 extends unknown, T7 extends unknown, T8 extends unknown, T9 extends unknown, T10 extends unknown, T11 extends unknown, T12 extends unknown, T13 extends unknown, T14 extends unknown, T15 extends unknown, T16 extends unknown> extends Record {
    constructor(t1: App<F, T1>, t2: App<F, T2>, t3: App<F, T3>, t4: App<F, T4>, t5: App<F, T5>, t6: App<F, T6>, t7: App<F, T7>, t8: App<F, T8>, t9: App<F, T9>, t10: App<F, T10>, t11: App<F, T11>, t12: App<F, T12>, t13: App<F, T13>, t14: App<F, T14>, t15: App<F, T15>, t16: App<F, T16>)
    // private t1: App<F, T1>;
    // private t10: App<F, T10>;
    // private t11: App<F, T11>;
    // private t12: App<F, T12>;
    // private t13: App<F, T13>;
    // private t14: App<F, T14>;
    // private t15: App<F, T15>;
    // private t16: App<F, T16>;
    // private t2: App<F, T2>;
    // private t3: App<F, T3>;
    // private t4: App<F, T4>;
    // private t5: App<F, T5>;
    // private t6: App<F, T6>;
    // private t7: App<F, T7>;
    // private t8: App<F, T8>;
    // private t9: App<F, T9>;
    apply<R extends unknown>(arg0: Applicative<F, any>, arg1: App<F, Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>): App<F, R>;
    apply<R extends unknown>(arg0: Applicative<F, any>, arg1: Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>): App<F, R>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    t1(): App<F, T1>;
    t10(): App<F, T10>;
    t11(): App<F, T11>;
    t12(): App<F, T12>;
    t13(): App<F, T13>;
    t14(): App<F, T14>;
    t15(): App<F, T15>;
    t16(): App<F, T16>;
    t2(): App<F, T2>;
    t3(): App<F, T3>;
    t4(): App<F, T4>;
    t5(): App<F, T5>;
    t6(): App<F, T6>;
    t7(): App<F, T7>;
    t8(): App<F, T8>;
    t9(): App<F, T9>;
    toString(): string;
}