import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForgetC$Instance$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetC$Instance$Mu.d.ts'
import type { ReForgetC$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetC$Mu.d.ts'
import type { AffineP } from '../../../../com/mojang/datafixers/optics/profunctors/AffineP.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReForgetC$Instance<R extends unknown> extends Object implements App<ReForgetC$Instance$Mu<R>, ReForgetC$Mu<R>>, AffineP<ReForgetC$Mu<R>, ReForgetC$Instance$Mu<R>> {
    constructor()
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<ReForgetC$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForgetC$Mu<R>, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<ReForgetC$Mu<R>, A, B>, App2<ReForgetC$Mu<R>, C, D>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<ReForgetC$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForgetC$Mu<R>, C, D>;
    first<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<ReForgetC$Mu<R>, A, B>): App2<ReForgetC$Mu<R>, Pair<A, C>, Pair<B, C>>;
    left<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<ReForgetC$Mu<R>, A, B>): App2<ReForgetC$Mu<R>, Either<A, C>, Either<B, C>>;
    right<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<ReForgetC$Mu<R>, A, B>): App2<ReForgetC$Mu<R>, Either<C, A>, Either<C, B>>;
    second<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<ReForgetC$Mu<R>, A, B>): App2<ReForgetC$Mu<R>, Pair<C, A>, Pair<C, B>>;
}