import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Functor } from '../../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Traversable } from '../../../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Traversable$Mu } from '../../../../../com/mojang/datafixers/kinds/Traversable$Mu.d.ts'
import type { FunctorProfunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Mapping$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/Mapping$Mu.d.ts'
import type { TraversalP } from '../../../../../com/mojang/datafixers/optics/profunctors/TraversalP.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Mapping<P extends K2, Mu extends Mapping$Mu> extends TraversalP<P, Mu>, Object{
    first(arg0: App2<P, A, B>): App2<P, Pair<A, C>, Pair<B, C>>;
    left(arg0: App2<P, A, B>): App2<P, Either<A, C>, Either<B, C>>;
    mapping(arg0: Functor<F, Object>, arg1: App2<P, A, B>): App2<P, App<F, A>, App<F, B>>;
    toFP3(): FunctorProfunctor<Traversable$Mu, P, FunctorProfunctor$Mu<Traversable$Mu>>;
    traverse(arg0: Traversable<T, Object>, arg1: App2<P, A, B>): App2<P, App<T, A>, App<T, B>>;
}