import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { CartesianLike } from '../../../../com/mojang/datafixers/kinds/CartesianLike.d.ts'
import type { Traversable } from '../../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Pair$Instance$Mu } from '../../../../com/mojang/datafixers/util/Pair$Instance$Mu.d.ts'
import type { Pair$Mu } from '../../../../com/mojang/datafixers/util/Pair$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair$Instance<S2 extends Object | number | string | boolean> extends Object implements CartesianLike<Pair$Mu<S2>, S2, Pair$Instance$Mu<S2>>, Traversable<Pair$Mu<S2>, Pair$Instance$Mu<S2>> {
    static unbox(paramarg0: App<Object, Object>): CartesianLike<Object, Object, Object>;
    static unbox(paramarg0: App<Object, Object>): Traversable<Object, Object>;
    constructor()
    flip(arg0: Applicative<F, Object>, arg1: App<T, App<F, A>>): App<F, App<T, A>>;
    from(arg0: App<Pair$Mu<S2>, A>): App<Pair$Mu<S2>, A>;
    map(arg0: (param0: T) => R, arg1: App<Pair$Mu<S2>, T>): App<Pair$Mu<S2>, R>;
    to(arg0: App<Pair$Mu<S2>, A>): App<Pair$Mu<S2>, A>;
    traverse(arg0: Applicative<F, Object>, arg1: (param0: A) => App<F, B>, arg2: App<T, A>): App<F, App<T, B>>;
    traverse(arg0: Applicative<F, Object>, arg1: (param0: A) => App<F, B>, arg2: App<Pair$Mu<S2>, A>): App<F, App<Pair$Mu<S2>, B>>;
}