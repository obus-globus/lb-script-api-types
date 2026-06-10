import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Traversable } from '../../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Traversable$Mu } from '../../../../com/mojang/datafixers/kinds/Traversable$Mu.d.ts'
import type { Traversal$Mu } from '../../../../com/mojang/datafixers/optics/Traversal$Mu.d.ts'
import type { Wander } from '../../../../com/mojang/datafixers/optics/Wander.d.ts'
import type { FunctorProfunctor } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { TraversalP } from '../../../../com/mojang/datafixers/optics/profunctors/TraversalP.d.ts'
import type { TraversalP$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/TraversalP$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Traversal$Instance<A2 extends Object | number | string | boolean, B2 extends Object | number | string | boolean> extends Object implements TraversalP<Traversal$Mu<A2, B2>, TraversalP$Mu> {
    static unbox(paramarg0: App<TraversalP$Mu, K2>): TraversalP<K2, TraversalP$Mu>;
    constructor()
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Traversal$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Traversal$Mu<A2, B2>, C, D>;
    dimap<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Traversal$Mu<A2, B2>, A, B>, App2<Traversal$Mu<A2, B2>, C, D>>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: () => App2<Traversal$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Traversal$Mu<A2, B2>, C, D>;
    first<A extends Object | number | string | boolean, C extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Traversal$Mu<A2, B2>, A, B>): App2<Traversal$Mu<A2, B2>, Pair<A, C>, Pair<B, C>>;
    left<A extends Object | number | string | boolean, C extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Traversal$Mu<A2, B2>, A, B>): App2<Traversal$Mu<A2, B2>, Either<A, C>, Either<B, C>>;
    toFP3(): FunctorProfunctor<Traversable$Mu, Traversal$Mu<A2, B2>, FunctorProfunctor$Mu<Traversable$Mu>>;
    traverse<T extends K1, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: Traversable<T, Object>, arg1: App2<Traversal$Mu<A2, B2>, A, B>): App2<Traversal$Mu<A2, B2>, App<T, A>, App<T, B>>;
    wander<S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: Wander<S, T, A, B>, arg1: App2<Traversal$Mu<A2, B2>, A, B>): App2<Traversal$Mu<A2, B2>, S, T>;
}