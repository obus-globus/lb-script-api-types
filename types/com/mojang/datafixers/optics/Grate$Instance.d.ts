import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Grate$Mu } from '../../../../com/mojang/datafixers/optics/Grate$Mu.d.ts'
import type { Closed } from '../../../../com/mojang/datafixers/optics/profunctors/Closed.d.ts'
import type { Closed$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Closed$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Grate$Instance<A2 extends Object | number | string | boolean, B2 extends Object | number | string | boolean> extends Object implements Closed<Grate$Mu<A2, B2>, Closed$Mu> {
    static unbox(paramarg0: App<Object, Object>): Closed<Object, Object>;
    constructor()
    closed(arg0: App2<Grate$Mu<A2, B2>, A, B>): App2<Grate$Mu<A2, B2>, FunctionType<X, A>, FunctionType<X, B>>;
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Grate$Mu<A2, B2>, A, B>, App2<Grate$Mu<A2, B2>, C, D>>;
}