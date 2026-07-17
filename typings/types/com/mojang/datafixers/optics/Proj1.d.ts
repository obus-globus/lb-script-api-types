import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Lens } from '../../../../com/mojang/datafixers/optics/Lens.d.ts'
import type { Cartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian$Mu.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Proj1<F extends unknown, G extends unknown, F2 extends unknown> extends Object implements Lens<Pair<F, G>, Pair<F2, G>, F, F2> {
    static INSTANCE: Proj1<Object, Object, Object>;
    private constructor()
    eval<P extends K2>(arg0: App<Cartesian$Mu, P>): FunctionType<App2<P, F, F2>, App2<P, Pair<F, G>, Pair<F2, G>>>;
    toString(): string;
    update(arg0: F2, arg1: Pair<F, G>): Pair<F2, G>;
    view(arg0: Pair<F, G>): F;
}