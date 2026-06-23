import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { CocartesianLike$Mu } from '../../../../../com/mojang/datafixers/kinds/CocartesianLike$Mu.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Cocartesian$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/Cocartesian$Mu.d.ts'
import type { FunctorProfunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Profunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Cocartesian<P extends K2, Mu extends Cocartesian$Mu> extends Profunctor<P, Mu>, Object {
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    left<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<P, A, B>): App2<P, Either<A, C>, Either<B, C>>;
    lmap<C extends unknown, B extends unknown, A extends unknown>(arg0: App2<P, A, B>, arg1: (param0: C) => A): App2<P, C, B>;
    right<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<P, A, B>): App2<P, Either<C, A>, Either<C, B>>;
    rmap<A extends unknown, D extends unknown, B extends unknown>(arg0: App2<P, A, B>, arg1: (param0: B) => D): App2<P, A, D>;
    toFP(): FunctorProfunctor<CocartesianLike$Mu, P, FunctorProfunctor$Mu<CocartesianLike$Mu>>;
}