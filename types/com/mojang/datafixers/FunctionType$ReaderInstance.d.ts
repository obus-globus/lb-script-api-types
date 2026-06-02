import type { FunctionType$ReaderInstance$Mu } from '../../../com/mojang/datafixers/FunctionType$ReaderInstance$Mu.d.ts'
import type { FunctionType$ReaderMu } from '../../../com/mojang/datafixers/FunctionType$ReaderMu.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Representable } from '../../../com/mojang/datafixers/kinds/Representable.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FunctionType$ReaderInstance<R extends Object | number | string | boolean> extends Object implements Representable<FunctionType$ReaderMu<R>, R, FunctionType$ReaderInstance$Mu<R>> {
    static unbox(paramarg0: App<Object, Object>): Representable<Object, Object, Object>;
    constructor()
    from(arg0: App<FunctionType$ReaderMu<R>, B>): App<FunctionType$ReaderMu<R>, B>;
    map(arg0: (param0: T) => R2, arg1: App<FunctionType$ReaderMu<R>, T>): App<FunctionType$ReaderMu<R>, R2>;
    to(arg0: App<FunctionType$ReaderMu<R>, B>): App<FunctionType$ReaderMu<R>, B>;
}