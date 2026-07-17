import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { CocartesianLike$Mu } from '../../../../com/mojang/datafixers/kinds/CocartesianLike$Mu.d.ts'
import type { ReForget$Instance$Mu } from '../../../../com/mojang/datafixers/optics/ReForget$Instance$Mu.d.ts'
import type { ReForget$Mu } from '../../../../com/mojang/datafixers/optics/ReForget$Mu.d.ts'
import type { Cocartesian } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian.d.ts'
import type { FunctorProfunctor } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { ReCartesian } from '../../../../com/mojang/datafixers/optics/profunctors/ReCartesian.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReForget$Instance<R extends unknown> extends Object implements App<ReForget$Instance$Mu<R>, ReForget$Mu<R>>, Cocartesian<ReForget$Mu<R>, ReForget$Instance$Mu<R>>, ReCartesian<ReForget$Mu<R>, ReForget$Instance$Mu<R>> {
    constructor()
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<ReForget$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForget$Mu<R>, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<ReForget$Mu<R>, A, B>, App2<ReForget$Mu<R>, C, D>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<ReForget$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForget$Mu<R>, C, D>;
    left<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<ReForget$Mu<R>, A, B>): App2<ReForget$Mu<R>, Either<A, C>, Either<B, C>>;
    right<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<ReForget$Mu<R>, A, B>): App2<ReForget$Mu<R>, Either<C, A>, Either<C, B>>;
    toFP(): FunctorProfunctor<CocartesianLike$Mu, ReForget$Mu<R>, FunctorProfunctor$Mu<CocartesianLike$Mu>>;
    unfirst<A extends unknown, B extends unknown, C extends unknown>(arg0: App2<ReForget$Mu<R>, Pair<A, C>, Pair<B, C>>): App2<ReForget$Mu<R>, A, B>;
    unsecond<A extends unknown, B extends unknown, C extends unknown>(arg0: App2<ReForget$Mu<R>, Pair<C, A>, Pair<C, B>>): App2<ReForget$Mu<R>, A, B>;
}