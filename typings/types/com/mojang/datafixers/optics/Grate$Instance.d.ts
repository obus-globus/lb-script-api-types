import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Grate$Mu } from '../../../../com/mojang/datafixers/optics/Grate$Mu.d.ts'
import type { Closed } from '../../../../com/mojang/datafixers/optics/profunctors/Closed.d.ts'
import type { Closed$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Closed$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Grate$Instance<A2 extends unknown, B2 extends unknown> extends Object implements Closed<Grate$Mu<A2, B2>, Closed$Mu> {
    constructor()
    closed<X extends unknown, A extends unknown, B extends unknown>(arg0: App2<Grate$Mu<A2, B2>, A, B>): App2<Grate$Mu<A2, B2>, FunctionType<X, A>, FunctionType<X, B>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<Grate$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Grate$Mu<A2, B2>, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Grate$Mu<A2, B2>, A, B>, App2<Grate$Mu<A2, B2>, C, D>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<Grate$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Grate$Mu<A2, B2>, C, D>;
}