import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Procompose } from '../../../../com/mojang/datafixers/optics/Procompose.d.ts'
import type { Procompose$Mu } from '../../../../com/mojang/datafixers/optics/Procompose$Mu.d.ts'
import type { Profunctor } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Profunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Procompose$ProfunctorInstance<F extends K2, G extends K2> extends Object implements Profunctor<Procompose$Mu<F, G>, Profunctor$Mu> {
    static unbox(paramarg0: App<Profunctor$Mu, K2>): Profunctor<K2, Profunctor$Mu>;
    constructor(arg0: Profunctor<F, Profunctor$Mu>, arg1: Profunctor<G, Profunctor$Mu>)
    // private p1: Profunctor<F, Profunctor$Mu>;
    // private p2: Profunctor<G, Profunctor$Mu>;
    // private cap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean, E extends Object | number | string | boolean>(arg0: Procompose<F, G, A, B, E>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Procompose$Mu<F, G>, C, D>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Procompose$Mu<F, G>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Procompose$Mu<F, G>, C, D>;
    dimap<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Procompose$Mu<F, G>, A, B>, App2<Procompose$Mu<F, G>, C, D>>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: () => App2<Procompose$Mu<F, G>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Procompose$Mu<F, G>, C, D>;
    lmap<C extends Object | number | string | boolean, B extends Object | number | string | boolean, A extends Object | number | string | boolean>(arg0: App2<Procompose$Mu<F, G>, A, B>, arg1: (param0: C) => A): App2<Procompose$Mu<F, G>, C, B>;
    rmap<A extends Object | number | string | boolean, D extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Procompose$Mu<F, G>, A, B>, arg1: (param0: B) => D): App2<Procompose$Mu<F, G>, A, D>;
}