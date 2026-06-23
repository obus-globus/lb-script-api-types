import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { CocartesianLike$Mu } from '../../../../com/mojang/datafixers/kinds/CocartesianLike$Mu.d.ts'
import type { Functor } from '../../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Traversable } from '../../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Either$Mu } from '../../../../com/mojang/datafixers/util/Either$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CocartesianLike<T extends K1, C extends Object | number | string | boolean, Mu extends CocartesianLike$Mu> extends Functor<T, Mu>, Traversable<T, Mu>, Object {
    flip<F extends K1, A extends Object | number | string | boolean>(arg0: Applicative<F, any>, arg1: App<T, App<F, A>>): App<F, App<T, A>>;
    from<A extends Object | number | string | boolean>(arg0: App<Either$Mu<C>, A>): App<T, A>;
    to<A extends Object | number | string | boolean>(arg0: App<T, A>): App<Either$Mu<C>, A>;
    traverse<F extends K1, B extends Object | number | string | boolean, A extends Object | number | string | boolean>(arg0: Applicative<F, any>, arg1: (param0: A) => App<F, B>, arg2: App<T, A>): App<F, App<T, B>>;
}