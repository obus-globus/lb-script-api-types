import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { ProfunctorFunctorWrapper$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/ProfunctorFunctorWrapper$Mu.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfunctorFunctorWrapper<P extends K2, F extends K1, G extends K1, A extends unknown, B extends unknown> extends Object implements App2<ProfunctorFunctorWrapper$Mu<P, F, G>, A, B> {
    static unbox(paramarg0: App2<ProfunctorFunctorWrapper$Mu<K2, K1, K1>, Object, Object>): ProfunctorFunctorWrapper<K2, K1, K1, Object, Object>;
    constructor(arg0: App2<P, App<F, A>, App<G, B>>)
    // private value: App2<P, App<F, A>, App<G, B>>;
    value(): App2<P, App<F, A>, App<G, B>>;
}