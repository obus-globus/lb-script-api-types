import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { CocartesianLike$Mu } from '../../../../com/mojang/datafixers/kinds/CocartesianLike$Mu.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { ReForgetE$Instance$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetE$Instance$Mu.d.ts'
import type { ReForgetE$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetE$Mu.d.ts'
import type { Cocartesian } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian.d.ts'
import type { Cocartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian$Mu.d.ts'
import type { FunctorProfunctor } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReForgetE$Instance<R extends unknown> extends Object implements App<ReForgetE$Instance$Mu<R>, ReForgetE$Mu<R>>, Cocartesian<ReForgetE$Mu<R>, ReForgetE$Instance$Mu<R>> {
    static unbox(paramarg0: App<Cocartesian$Mu, K2>): Cocartesian<K2, Cocartesian$Mu>;
    constructor()
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<ReForgetE$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForgetE$Mu<R>, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<ReForgetE$Mu<R>, A, B>, App2<ReForgetE$Mu<R>, C, D>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<ReForgetE$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForgetE$Mu<R>, C, D>;
    left<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<ReForgetE$Mu<R>, A, B>): App2<ReForgetE$Mu<R>, Either<A, C>, Either<B, C>>;
    right<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<ReForgetE$Mu<R>, A, B>): App2<ReForgetE$Mu<R>, Either<C, A>, Either<C, B>>;
    toFP(): FunctorProfunctor<CocartesianLike$Mu, ReForgetE$Mu<R>, FunctorProfunctor$Mu<CocartesianLike$Mu>>;
}