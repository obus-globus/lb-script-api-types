import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Procompose$Mu } from '../../../../com/mojang/datafixers/optics/Procompose$Mu.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Procompose<F extends K2, G extends K2, A extends unknown, B extends unknown, C extends unknown> extends Object implements App2<Procompose$Mu<F, G>, A, B> {
    static unbox<F extends K2, G extends K2, A extends unknown, B extends unknown>(paramarg0: App2<Procompose$Mu<F, G>, A, B>): Procompose<F, G, A, B, Object>;
    constructor(arg0: () => App2<F, A, C>, arg1: App2<G, C, B>)
    // private first: () => App2<F, A, C>;
    // private second: App2<G, C, B>;
    first(): () => App2<F, A, C>;
    second(): App2<G, C, B>;
}