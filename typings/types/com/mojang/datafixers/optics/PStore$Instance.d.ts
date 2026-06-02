import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Functor } from '../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { PStore$Instance$Mu } from '../../../../com/mojang/datafixers/optics/PStore$Instance$Mu.d.ts'
import type { PStore$Mu } from '../../../../com/mojang/datafixers/optics/PStore$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PStore$Instance<I extends Object | number | string | boolean, J extends Object | number | string | boolean> extends Object implements Functor<PStore$Mu<I, J>, PStore$Instance$Mu<I, J>> {
    static unbox(paramarg0: App<Object, Object>): Functor<Object, Object>;
    constructor()
    map(arg0: (param0: T) => R, arg1: App<PStore$Mu<I, J>, T>): App<PStore$Mu<I, J>, R>;
}