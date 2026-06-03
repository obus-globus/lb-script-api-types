import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForgetEP$Instance$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetEP$Instance$Mu.d.ts'
import type { ReForgetEP$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetEP$Mu.d.ts'
import type { AffineP } from '../../../../com/mojang/datafixers/optics/profunctors/AffineP.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReForgetEP$Instance<R extends Object | number | string | boolean> extends Object implements App<ReForgetEP$Instance$Mu<R>, ReForgetEP$Mu<R>>, AffineP<ReForgetEP$Mu<R>, ReForgetEP$Instance$Mu<R>> {
    constructor()
    dimap(arg0: App2<ReForgetEP$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForgetEP$Mu<R>, C, D>;
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<ReForgetEP$Mu<R>, A, B>, App2<ReForgetEP$Mu<R>, C, D>>;
    dimap(arg0: () => App2<ReForgetEP$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ReForgetEP$Mu<R>, C, D>;
    first(arg0: App2<ReForgetEP$Mu<R>, A, B>): App2<ReForgetEP$Mu<R>, Pair<A, C>, Pair<B, C>>;
    left(arg0: App2<ReForgetEP$Mu<R>, A, B>): App2<ReForgetEP$Mu<R>, Either<A, C>, Either<B, C>>;
    right(arg0: App2<ReForgetEP$Mu<R>, A, B>): App2<ReForgetEP$Mu<R>, Either<C, A>, Either<C, B>>;
    second(arg0: App2<ReForgetEP$Mu<R>, A, B>): App2<ReForgetEP$Mu<R>, Pair<C, A>, Pair<C, B>>;
}