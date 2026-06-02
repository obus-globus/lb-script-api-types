import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Optic } from '../../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { Traversal$Mu } from '../../../../com/mojang/datafixers/optics/Traversal$Mu.d.ts'
import type { Wander } from '../../../../com/mojang/datafixers/optics/Wander.d.ts'
import type { TraversalP$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/TraversalP$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Traversal<S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App2<Traversal$Mu<A, B>, S, T>, Optic<TraversalP$Mu, S, T, A, B>, Wander<S, T, A, B>, Object{
    eval(arg0: App<TraversalP$Mu, P>): FunctionType<App2<P, A, B>, App2<P, S, T>>;
    upCast(arg0: TypeToken<K1>[], arg1: TypeToken<Proof2>): Optional<Optic<Proof2, S, T, A, B>>;
}