import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { Traversal } from '../../../../com/mojang/datafixers/optics/Traversal.d.ts'
import type { TraversalP$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/TraversalP$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListTraversal<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object implements Traversal<A[], B[], A, B> {
    static unbox(paramarg0: App2<Object, Object, Object>): Traversal<Object, Object, Object, Object>;
    private constructor()
    eval(arg0: App<TraversalP$Mu, P>): FunctionType<App2<P, A, B>, App2<P, S, T>>;
    toString(): string;
    wander(arg0: Applicative<F, Object>, arg1: FunctionType<A, App<F, B>>): FunctionType<A[], App<F, B[]>>;
}