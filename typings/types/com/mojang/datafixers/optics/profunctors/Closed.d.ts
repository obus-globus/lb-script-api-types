import type { FunctionType } from '../../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Closed$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/Closed$Mu.d.ts'
import type { Profunctor } from '../../../../../com/mojang/datafixers/optics/profunctors/Profunctor.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Closed<P extends K2, Mu extends Closed$Mu> extends Profunctor<P, Mu>, Object{
    closed(arg0: App2<P, A, B>): App2<P, FunctionType<X, A>, FunctionType<X, B>>;
    dimap(arg0: App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    dimap(arg0: () => App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<P, C, D>;
    lmap(arg0: App2<P, A, B>, arg1: (param0: C) => A): App2<P, C, B>;
    rmap(arg0: App2<P, A, B>, arg1: (param0: B) => D): App2<P, A, D>;
}