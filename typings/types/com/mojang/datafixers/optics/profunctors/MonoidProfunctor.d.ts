import type { FunctionType$Mu } from '../../../../../com/mojang/datafixers/FunctionType$Mu.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Procompose$Mu } from '../../../../../com/mojang/datafixers/optics/Procompose$Mu.d.ts'
import type { MonoidProfunctor$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/MonoidProfunctor$Mu.d.ts'
import type { Profunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MonoidProfunctor<P extends K2, Mu extends MonoidProfunctor$Mu> extends Profunctor<P, Mu>, Object {
    compose<A extends Object | number | string | boolean, C extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<P, B, C>, arg1: () => App2<P, A, B>): App2<P, A, C>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: () => App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    lmap<C extends Object | number | string | boolean, B extends Object | number | string | boolean, A extends Object | number | string | boolean>(arg0: App2<P, A, B>, arg1: (param0: C) => A): App2<P, C, B>;
    plus<A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Procompose$Mu<P, P>, A, B>): App2<P, A, B>;
    rmap<A extends Object | number | string | boolean, D extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<P, A, B>, arg1: (param0: B) => D): App2<P, A, D>;
    zero<A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<FunctionType$Mu, A, B>): App2<P, A, B>;
}