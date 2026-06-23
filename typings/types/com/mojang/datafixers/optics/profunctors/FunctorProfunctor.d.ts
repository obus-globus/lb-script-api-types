import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Kind2 } from '../../../../../com/mojang/datafixers/kinds/Kind2.d.ts'
import type { FunctorProfunctor$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FunctorProfunctor<T extends K1, P extends K2, Mu extends FunctorProfunctor$Mu<T>> extends Kind2<P, Mu>, Object{
    distribute<F extends K1, A extends unknown, B extends unknown>(arg0: App<T, F>, arg1: App2<P, A, B>): App2<P, App<F, A>, App<F, B>>;
}