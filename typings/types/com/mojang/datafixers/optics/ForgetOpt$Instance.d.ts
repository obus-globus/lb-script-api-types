import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ForgetOpt$Instance$Mu } from '../../../../com/mojang/datafixers/optics/ForgetOpt$Instance$Mu.d.ts'
import type { ForgetOpt$Mu } from '../../../../com/mojang/datafixers/optics/ForgetOpt$Mu.d.ts'
import type { AffineP } from '../../../../com/mojang/datafixers/optics/profunctors/AffineP.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ForgetOpt$Instance<R extends Object | number | string | boolean> extends Object implements App<ForgetOpt$Instance$Mu<R>, ForgetOpt$Mu<R>>, AffineP<ForgetOpt$Mu<R>, ForgetOpt$Instance$Mu<R>> {
    constructor()
    dimap(arg0: App2<ForgetOpt$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ForgetOpt$Mu<R>, C, D>;
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<ForgetOpt$Mu<R>, A, B>, App2<ForgetOpt$Mu<R>, C, D>>;
    dimap(arg0: () => App2<ForgetOpt$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ForgetOpt$Mu<R>, C, D>;
    first(arg0: App2<ForgetOpt$Mu<R>, A, B>): App2<ForgetOpt$Mu<R>, Pair<A, C>, Pair<B, C>>;
    left(arg0: App2<ForgetOpt$Mu<R>, A, B>): App2<ForgetOpt$Mu<R>, Either<A, C>, Either<B, C>>;
    right(arg0: App2<ForgetOpt$Mu<R>, A, B>): App2<ForgetOpt$Mu<R>, Either<C, A>, Either<C, B>>;
    second(arg0: App2<ForgetOpt$Mu<R>, A, B>): App2<ForgetOpt$Mu<R>, Pair<C, A>, Pair<C, B>>;
}