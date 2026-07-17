import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Lens } from '../../../../com/mojang/datafixers/optics/Lens.d.ts'
import type { Cartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian$Mu.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Proj2<F extends unknown, G extends unknown, G2 extends unknown> extends Object implements Lens<Pair<F, G>, Pair<F, G2>, G, G2> {
    static INSTANCE: Proj2<Object, Object, Object>;
    private constructor()
    eval<P extends K2>(arg0: App<Cartesian$Mu, P>): FunctionType<App2<P, G, G2>, App2<P, Pair<F, G>, Pair<F, G2>>>;
    toString(): string;
    update(arg0: G2, arg1: Pair<F, G>): Pair<F, G2>;
    view(arg0: Pair<F, G>): G;
}