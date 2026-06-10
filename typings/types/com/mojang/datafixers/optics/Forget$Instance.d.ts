import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { CartesianLike$Mu } from '../../../../com/mojang/datafixers/kinds/CartesianLike$Mu.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Forget$Instance$Mu } from '../../../../com/mojang/datafixers/optics/Forget$Instance$Mu.d.ts'
import type { Forget$Mu } from '../../../../com/mojang/datafixers/optics/Forget$Mu.d.ts'
import type { Cartesian } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian.d.ts'
import type { Cartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian$Mu.d.ts'
import type { FunctorProfunctor } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { ReCocartesian } from '../../../../com/mojang/datafixers/optics/profunctors/ReCocartesian.d.ts'
import type { ReCocartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/ReCocartesian$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Forget$Instance<R extends Object | number | string | boolean> extends Object implements App<Forget$Instance$Mu<R>, Forget$Mu<R>>, Cartesian<Forget$Mu<R>, Forget$Instance$Mu<R>>, ReCocartesian<Forget$Mu<R>, Forget$Instance$Mu<R>> {
    static unbox(paramarg0: App<Cartesian$Mu, K2>): Cartesian<K2, Cartesian$Mu>;
    static unbox(paramarg0: App<ReCocartesian$Mu, K2>): ReCocartesian<K2, ReCocartesian$Mu>;
    constructor()
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Forget$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Forget$Mu<R>, C, D>;
    dimap<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Forget$Mu<R>, A, B>, App2<Forget$Mu<R>, C, D>>;
    dimap<C extends Object | number | string | boolean, D extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: () => App2<Forget$Mu<R>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Forget$Mu<R>, C, D>;
    first<A extends Object | number | string | boolean, C extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Forget$Mu<R>, A, B>): App2<Forget$Mu<R>, Pair<A, C>, Pair<B, C>>;
    second<C extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: App2<Forget$Mu<R>, A, B>): App2<Forget$Mu<R>, Pair<C, A>, Pair<C, B>>;
    toFP2(): FunctorProfunctor<CartesianLike$Mu, Forget$Mu<R>, FunctorProfunctor$Mu<CartesianLike$Mu>>;
    unleft<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean>(arg0: App2<Forget$Mu<R>, Either<A, C>, Either<B, C>>): App2<Forget$Mu<R>, A, B>;
    unright<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean>(arg0: App2<Forget$Mu<R>, Either<C, A>, Either<C, B>>): App2<Forget$Mu<R>, A, B>;
}