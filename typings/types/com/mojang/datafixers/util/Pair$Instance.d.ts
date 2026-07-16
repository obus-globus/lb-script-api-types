import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { CartesianLike } from '../../../../com/mojang/datafixers/kinds/CartesianLike.d.ts'
import type { CartesianLike$Mu } from '../../../../com/mojang/datafixers/kinds/CartesianLike$Mu.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Traversable } from '../../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Traversable$Mu } from '../../../../com/mojang/datafixers/kinds/Traversable$Mu.d.ts'
import type { Pair$Instance$Mu } from '../../../../com/mojang/datafixers/util/Pair$Instance$Mu.d.ts'
import type { Pair$Mu } from '../../../../com/mojang/datafixers/util/Pair$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair$Instance<S2 extends unknown> extends Object implements CartesianLike<Pair$Mu<S2>, S2, Pair$Instance$Mu<S2>>, Traversable<Pair$Mu<S2>, Pair$Instance$Mu<S2>> {
    static unbox<F extends K1, C extends unknown, Mu extends CartesianLike$Mu>(paramarg0: App<Mu, F>): CartesianLike<F, C, Mu>;
    static unbox<F extends K1, Mu extends Traversable$Mu>(paramarg0: App<Mu, F>): Traversable<F, Mu>;
    constructor()
    flip<F extends K1, A extends unknown>(arg0: Applicative<F, any>, arg1: App<Pair$Mu<S2>, App<F, A>>): App<F, App<Pair$Mu<S2>, A>>;
    from<A extends unknown>(arg0: App<Pair$Mu<S2>, A>): App<Pair$Mu<S2>, A>;
    map<R extends unknown, T extends unknown>(arg0: (param0: T) => R, arg1: App<Pair$Mu<S2>, T>): App<Pair$Mu<S2>, R>;
    to<A extends unknown>(arg0: App<Pair$Mu<S2>, A>): App<Pair$Mu<S2>, A>;
    traverse<F extends K1, B extends unknown, A extends unknown>(arg0: Applicative<F, any>, arg1: (param0: A) => App<F, B>, arg2: App<Pair$Mu<S2>, A>): App<F, App<Pair$Mu<S2>, B>>;
}