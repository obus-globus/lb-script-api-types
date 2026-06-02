import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
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
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Traversal$Instance<A2 extends Object | number | string | boolean, B2 extends Object | number | string | boolean> extends Object implements TraversalP<Traversal$Mu<A2, B2>, TraversalP$Mu> {
    static unbox(paramarg0: App<Object, Object>): TraversalP<Object, Object>;
    constructor()
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Traversal$Mu<A2, B2>, A, B>, App2<Traversal$Mu<A2, B2>, C, D>>;
    first(arg0: App2<P, A, B>): App2<P, Pair<A, C>, Pair<B, C>>;
    left(arg0: App2<P, A, B>): App2<P, Either<A, C>, Either<B, C>>;
    toFP3(): FunctorProfunctor<Traversable$Mu, P, FunctorProfunctor$Mu<Traversable$Mu>>;
    traverse(arg0: Traversable<T, Object>, arg1: App2<P, A, B>): App2<P, App<T, A>, App<T, B>>;
    wander(arg0: Wander<S, T, A, B>, arg1: App2<Traversal$Mu<A2, B2>, A, B>): App2<Traversal$Mu<A2, B2>, S, T>;
}