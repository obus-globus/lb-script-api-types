import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Adapter$Mu } from '../../../../com/mojang/datafixers/optics/Adapter$Mu.d.ts'
import type { Profunctor } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Profunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Adapter$Instance<A2 extends Object | number | string | boolean, B2 extends Object | number | string | boolean> extends Object implements Profunctor<Adapter$Mu<A2, B2>, Profunctor$Mu> {
    static unbox(paramarg0: App<Object, Object>): Profunctor<Object, Object>;
    constructor()
    dimap(arg0: App2<Adapter$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Adapter$Mu<A2, B2>, C, D>;
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Adapter$Mu<A2, B2>, A, B>, App2<Adapter$Mu<A2, B2>, C, D>>;
    dimap(arg0: () => App2<Adapter$Mu<A2, B2>, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<Adapter$Mu<A2, B2>, C, D>;
    dimap(arg0: App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    dimap(arg0: () => App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    lmap(arg0: App2<P, A, B>, arg1: (param0: C) => A): App2<P, C, B>;
    rmap(arg0: App2<P, A, B>, arg1: (param0: B) => D): App2<P, A, D>;
}