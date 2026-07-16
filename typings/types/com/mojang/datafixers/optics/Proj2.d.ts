import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Lens } from '../../../../com/mojang/datafixers/optics/Lens.d.ts'
import type { Lens$Mu } from '../../../../com/mojang/datafixers/optics/Lens$Mu.d.ts'
import type { Lens$Mu2 } from '../../../../com/mojang/datafixers/optics/Lens$Mu2.d.ts'
import type { Cartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian$Mu.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Proj2<F extends unknown, G extends unknown, G2 extends unknown> extends Object implements Lens<Pair<F, G>, Pair<F, G2>, G, G2> {
    static INSTANCE: Proj2<Object, Object, Object>;
    static box<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Lens<S, T, A, B>): App2<Lens$Mu2<S, T>, B, A>;
    static unbox<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: App2<Lens$Mu<A, B>, S, T>): Lens<S, T, A, B>;
    static unbox2<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: App2<Lens$Mu2<S, T>, B, A>): Lens<S, T, A, B>;
    private constructor()
    eval<P extends K2>(arg0: App<Cartesian$Mu, P>): FunctionType<App2<P, G, G2>, App2<P, Pair<F, G>, Pair<F, G2>>>;
    toString(): string;
    update(arg0: G2, arg1: Pair<F, G>): Pair<F, G2>;
    view(arg0: Pair<F, G>): G;
}