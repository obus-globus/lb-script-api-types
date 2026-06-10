import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { CartesianLike$Mu } from '../../../../../com/mojang/datafixers/kinds/CartesianLike$Mu.d.ts'
import type { CocartesianLike$Mu } from '../../../../../com/mojang/datafixers/kinds/CocartesianLike$Mu.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { AffineP$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/AffineP$Mu.d.ts'
import type { Cartesian } from '../../../../../com/mojang/datafixers/optics/profunctors/Cartesian.d.ts'
import type { Cocartesian } from '../../../../../com/mojang/datafixers/optics/profunctors/Cocartesian.d.ts'
import type { FunctorProfunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AffineP<P extends K2, Mu extends AffineP$Mu> extends Cartesian<P, Mu>, Cocartesian<P, Mu>, Object{
    right<C extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<P, A, B>): App2<P, Either<C, A>, Either<C, B>>;
    second<C extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<P, A, B>): App2<P, Pair<C, A>, Pair<C, B>>;
    toFP(): FunctorProfunctor<CocartesianLike$Mu, P, FunctorProfunctor$Mu<CocartesianLike$Mu>>;
    toFP2(): FunctorProfunctor<CartesianLike$Mu, P, FunctorProfunctor$Mu<CartesianLike$Mu>>;
}