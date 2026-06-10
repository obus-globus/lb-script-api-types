import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ForgetE$Instance$Mu } from '../../../../com/mojang/datafixers/optics/ForgetE$Instance$Mu.d.ts'
import type { ForgetE$Mu } from '../../../../com/mojang/datafixers/optics/ForgetE$Mu.d.ts'
import type { AffineP } from '../../../../com/mojang/datafixers/optics/profunctors/AffineP.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ForgetE$Instance<R extends Object | number | string | boolean> extends Object implements App<ForgetE$Instance$Mu<R>, ForgetE$Mu<R>>, AffineP<ForgetE$Mu<R>, ForgetE$Instance$Mu<R>> {
    constructor()
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<ForgetE$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ForgetE$Mu<R>, C, D>;
    dimap<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<ForgetE$Mu<R>, A, B>, App2<ForgetE$Mu<R>, C, D>>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: () => App2<ForgetE$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<ForgetE$Mu<R>, C, D>;
    first<A extends Object | number | string | boolean, C extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<ForgetE$Mu<R>, A, B>): App2<ForgetE$Mu<R>, Pair<A, C>, Pair<B, C>>;
    left<A extends Object | number | string | boolean, C extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<ForgetE$Mu<R>, A, B>): App2<ForgetE$Mu<R>, Either<A, C>, Either<B, C>>;
    right<C extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<ForgetE$Mu<R>, A, B>): App2<ForgetE$Mu<R>, Either<C, A>, Either<C, B>>;
    second<C extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<ForgetE$Mu<R>, A, B>): App2<ForgetE$Mu<R>, Pair<C, A>, Pair<C, B>>;
}