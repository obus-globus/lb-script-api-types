import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Traversable } from '../../../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Traversable$Mu } from '../../../../../com/mojang/datafixers/kinds/Traversable$Mu.d.ts'
import type { Wander } from '../../../../../com/mojang/datafixers/optics/Wander.d.ts'
import type { AffineP } from '../../../../../com/mojang/datafixers/optics/profunctors/AffineP.d.ts'
import type { FunctorProfunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { TraversalP$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/TraversalP$Mu.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TraversalP<P extends K2, Mu extends TraversalP$Mu> extends AffineP<P, Mu>, Object{
    first<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<P, A, B>): App2<P, Pair<A, C>, Pair<B, C>>;
    left<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<P, A, B>): App2<P, Either<A, C>, Either<B, C>>;
    toFP3(): FunctorProfunctor<Traversable$Mu, P, FunctorProfunctor$Mu<Traversable$Mu>>;
    traverse<T extends K1, A extends unknown, B extends unknown>(arg0: Traversable<T, any>, arg1: App2<P, A, B>): App2<P, App<T, A>, App<T, B>>;
    wander<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(arg0: Wander<S, T, A, B>, arg1: App2<P, A, B>): App2<P, S, T>;
}