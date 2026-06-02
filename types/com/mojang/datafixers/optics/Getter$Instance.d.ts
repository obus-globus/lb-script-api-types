import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Getter$Mu } from '../../../../com/mojang/datafixers/optics/Getter$Mu.d.ts'
import type { GetterP } from '../../../../com/mojang/datafixers/optics/profunctors/GetterP.d.ts'
import type { GetterP$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/GetterP$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Getter$Instance<A2 extends Object | number | string | boolean, B2 extends Object | number | string | boolean> extends Object implements GetterP<Getter$Mu<A2, B2>, GetterP$Mu> {
    static unbox(paramarg0: App<Object, Object>): GetterP<Object, Object>;
    constructor()
    cimap(arg0: (param0: C) => A, arg1: (param0: D) => B): FunctionType<() => App2<Getter$Mu<A2, B2>, A, B>, App2<Getter$Mu<A2, B2>, C, D>>;
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<Getter$Mu<A2, B2>, A, B>, App2<Getter$Mu<A2, B2>, C, D>>;
    secondPhantom(arg0: App2<P, C, B>): App2<P, C, A>;
}