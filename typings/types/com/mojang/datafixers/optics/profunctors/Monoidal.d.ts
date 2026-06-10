import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Monoidal$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/Monoidal$Mu.d.ts'
import type { Profunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Monoidal<P extends K2, Mu extends Monoidal$Mu> extends Profunctor<P, Mu>, Object {
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: () => App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    empty(): App2<P, void, void>;
    lmap<C extends Object | number | string | boolean, B extends Object | number | string | boolean, A extends Object | number | string | boolean>(arg0: App2<P, A, B>, arg1: (param0: C) => A): App2<P, C, B>;
    par<A extends Object | number | string | boolean, C extends Object | number | string | boolean, B extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: App2<P, A, B>, arg1: () => App2<P, C, D>): App2<P, Pair<A, C>, Pair<B, D>>;
    rmap<A extends Object | number | string | boolean, D extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<P, A, B>, arg1: (param0: B) => D): App2<P, A, D>;
}