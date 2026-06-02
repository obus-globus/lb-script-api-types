import type { CollectionMutator } from '../../../io/jsonwebtoken/lang/CollectionMutator.d.ts'
import type { Conjunctor } from '../../../io/jsonwebtoken/lang/Conjunctor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface NestedCollection<E extends Object | number | string | boolean, P extends Object | number | string | boolean> extends CollectionMutator<E, NestedCollection<E, P>>, Conjunctor<P>, Object{
}