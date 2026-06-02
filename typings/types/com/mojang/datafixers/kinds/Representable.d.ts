import type { FunctionType$ReaderMu } from '../../../../com/mojang/datafixers/FunctionType$ReaderMu.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Functor } from '../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Representable$Mu } from '../../../../com/mojang/datafixers/kinds/Representable$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Representable<T extends K1, C extends Object | number | string | boolean, Mu extends Representable$Mu> extends Functor<T, Mu>, Object{
    from(arg0: App<FunctionType$ReaderMu<C>, A>): App<T, A>;
    to(arg0: App<T, A>): App<FunctionType$ReaderMu<C>, A>;
}