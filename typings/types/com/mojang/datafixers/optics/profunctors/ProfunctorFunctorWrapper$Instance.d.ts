import type { FunctionType } from '../../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Functor } from '../../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { K1 } from '../../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Profunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Profunctor$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/Profunctor$Mu.d.ts'
import type { ProfunctorFunctorWrapper$Instance$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/ProfunctorFunctorWrapper$Instance$Mu.d.ts'
import type { ProfunctorFunctorWrapper$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/ProfunctorFunctorWrapper$Mu.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfunctorFunctorWrapper$Instance<P extends K2, F extends K1, G extends K1> extends Object implements App<ProfunctorFunctorWrapper$Instance$Mu, ProfunctorFunctorWrapper$Mu<P, F, G>>, Profunctor<ProfunctorFunctorWrapper$Mu<P, F, G>, ProfunctorFunctorWrapper$Instance$Mu> {
    static unbox(paramarg0: App<Profunctor$Mu, K2>): Profunctor<K2, Profunctor$Mu>;
    constructor(arg0: App<Profunctor$Mu, P>, arg1: Functor<F, any>, arg2: Functor<G, any>)
    // private fFunctor: Functor<F, any>;
    // private gFunctor: Functor<G, any>;
    // private profunctor: Profunctor<P, Profunctor$Mu>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<ProfunctorFunctorWrapper$Mu<P, F, G>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ProfunctorFunctorWrapper$Mu<P, F, G>, C, D>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<ProfunctorFunctorWrapper$Mu<P, F, G>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ProfunctorFunctorWrapper$Mu<P, F, G>, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<ProfunctorFunctorWrapper$Mu<P, F, G>, A, B>, App2<ProfunctorFunctorWrapper$Mu<P, F, G>, C, D>>;
    lmap<C extends unknown, B extends unknown, A extends unknown>(arg0: App2<ProfunctorFunctorWrapper$Mu<P, F, G>, A, B>, arg1: (param0: C) => A): App2<ProfunctorFunctorWrapper$Mu<P, F, G>, C, B>;
    rmap<A extends unknown, D extends unknown, B extends unknown>(arg0: App2<ProfunctorFunctorWrapper$Mu<P, F, G>, A, B>, arg1: (param0: B) => D): App2<ProfunctorFunctorWrapper$Mu<P, F, G>, A, D>;
}