import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { Functor } from '../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Traversable$Mu } from '../../../../com/mojang/datafixers/kinds/Traversable$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Traversable<T extends K1, Mu extends Traversable$Mu> extends Functor<T, Mu>, Object {
    flip<F extends K1, A extends unknown>(arg0: Applicative<F, any>, arg1: App<T, App<F, A>>): App<F, App<T, A>>;
    traverse<F extends K1, B extends unknown, A extends unknown>(arg0: Applicative<F, any>, arg1: (param0: A) => App<F, B>, arg2: App<T, A>): App<F, App<T, B>>;
}