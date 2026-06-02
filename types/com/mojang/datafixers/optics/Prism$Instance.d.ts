import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { CocartesianLike$Mu } from '../../../../com/mojang/datafixers/kinds/CocartesianLike$Mu.d.ts'
import type { Prism$Mu } from '../../../../com/mojang/datafixers/optics/Prism$Mu.d.ts'
import type { Cocartesian } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian.d.ts'
import type { Cocartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian$Mu.d.ts'
import type { FunctorProfunctor } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Prism$Instance<A2 extends Object | number | string | boolean, B2 extends Object | number | string | boolean> extends Object implements Cocartesian<Prism$Mu<A2, B2>, Cocartesian$Mu> {
    static unbox(paramarg0: App<Object, Object>): Cocartesian<Object, Object>;
    constructor()
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Prism$Mu<A2, B2>, A, B>, App2<Prism$Mu<A2, B2>, C, D>>;
    left(arg0: App2<Prism$Mu<A2, B2>, A, B>): App2<Prism$Mu<A2, B2>, Either<A, C>, Either<B, C>>;
    right(arg0: App2<Prism$Mu<A2, B2>, A, B>): App2<Prism$Mu<A2, B2>, Either<C, A>, Either<C, B>>;
    right(arg0: App2<P, A, B>): App2<P, Either<C, A>, Either<C, B>>;
    toFP(): FunctorProfunctor<CocartesianLike$Mu, P, FunctorProfunctor$Mu<CocartesianLike$Mu>>;
}