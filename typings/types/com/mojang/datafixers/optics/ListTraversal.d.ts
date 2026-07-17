import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Traversal } from '../../../../com/mojang/datafixers/optics/Traversal.d.ts'
import type { TraversalP$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/TraversalP$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListTraversal<A extends unknown, B extends unknown> extends Object implements Traversal<A[], B[], A, B> {
    private constructor()
    eval<P extends K2>(arg0: App<TraversalP$Mu, P>): FunctionType<App2<P, A, B>, App2<P, A[], B[]>>;
    toString(): string;
    wander<F extends K1>(arg0: Applicative<F, any>, arg1: FunctionType<A, App<F, B>>): FunctionType<A[], App<F, B[]>>;
}