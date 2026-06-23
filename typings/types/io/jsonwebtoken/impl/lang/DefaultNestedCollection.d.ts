import type { DefaultCollectionMutator } from '../../../../io/jsonwebtoken/impl/lang/DefaultCollectionMutator.d.ts'
import type { NestedCollection } from '../../../../io/jsonwebtoken/lang/NestedCollection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultNestedCollection<E extends unknown, P extends unknown> extends DefaultCollectionMutator<E, NestedCollection<E, P>> implements NestedCollection<E, P> {
    constructor(arg0: P, arg1: E[])
    // private parent: P;
    and(): P;
}