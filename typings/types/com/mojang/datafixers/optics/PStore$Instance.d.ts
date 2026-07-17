import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Functor } from '../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { PStore$Instance$Mu } from '../../../../com/mojang/datafixers/optics/PStore$Instance$Mu.d.ts'
import type { PStore$Mu } from '../../../../com/mojang/datafixers/optics/PStore$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PStore$Instance<I extends unknown, J extends unknown> extends Object implements Functor<PStore$Mu<I, J>, PStore$Instance$Mu<I, J>> {
    constructor()
    map<R extends unknown, T extends unknown>(arg0: (param0: T) => R, arg1: App<PStore$Mu<I, J>, T>): App<PStore$Mu<I, J>, R>;
}