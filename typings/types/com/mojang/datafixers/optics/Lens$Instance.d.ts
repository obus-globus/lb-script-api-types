import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { CartesianLike$Mu } from '../../../../com/mojang/datafixers/kinds/CartesianLike$Mu.d.ts'
import type { Lens$Mu } from '../../../../com/mojang/datafixers/optics/Lens$Mu.d.ts'
import type { Cartesian } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian.d.ts'
import type { Cartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian$Mu.d.ts'
import type { FunctorProfunctor } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Lens$Instance<A2 extends unknown, B2 extends unknown> extends Object implements Cartesian<Lens$Mu<A2, B2>, Cartesian$Mu> {
    constructor()
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<Lens$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Lens$Mu<A2, B2>, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Lens$Mu<A2, B2>, A, B>, App2<Lens$Mu<A2, B2>, C, D>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<Lens$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Lens$Mu<A2, B2>, C, D>;
    first<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<Lens$Mu<A2, B2>, A, B>): App2<Lens$Mu<A2, B2>, Pair<A, C>, Pair<B, C>>;
    second<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<Lens$Mu<A2, B2>, A, B>): App2<Lens$Mu<A2, B2>, Pair<C, A>, Pair<C, B>>;
    toFP2(): FunctorProfunctor<CartesianLike$Mu, Lens$Mu<A2, B2>, FunctorProfunctor$Mu<CartesianLike$Mu>>;
}