import type { CollectionMutator } from '../../../io/jsonwebtoken/lang/CollectionMutator.d.ts'
import type { Conjunctor } from '../../../io/jsonwebtoken/lang/Conjunctor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface NestedCollection<E extends unknown, P extends unknown> extends CollectionMutator<E, NestedCollection<E, P>>, Conjunctor<P>, Object{
}