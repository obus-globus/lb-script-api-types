import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Adapter$Mu } from '../../../../com/mojang/datafixers/optics/Adapter$Mu.d.ts'
import type { Profunctor } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Profunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Adapter$Instance<A2 extends unknown, B2 extends unknown> extends Object implements Profunctor<Adapter$Mu<A2, B2>, Profunctor$Mu> {
    static unbox<P extends K2, Proof extends Profunctor$Mu>(paramarg0: App<Proof, P>): Profunctor<P, Proof>;
    constructor()
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<Adapter$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Adapter$Mu<A2, B2>, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Adapter$Mu<A2, B2>, A, B>, App2<Adapter$Mu<A2, B2>, C, D>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<Adapter$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Adapter$Mu<A2, B2>, C, D>;
    lmap<C extends unknown, B extends unknown, A extends unknown>(arg0: App2<Adapter$Mu<A2, B2>, A, B>, arg1: (param0: C) => A): App2<Adapter$Mu<A2, B2>, C, B>;
    rmap<A extends unknown, D extends unknown, B extends unknown>(arg0: App2<Adapter$Mu<A2, B2>, A, B>, arg1: (param0: B) => D): App2<Adapter$Mu<A2, B2>, A, D>;
}