import type { CollectionMutator } from '../../../../io/jsonwebtoken/lang/CollectionMutator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultCollectionMutator<E extends unknown, M extends CollectionMutator<E, M>> extends Object implements CollectionMutator<E, M> {
    constructor(arg0: E[])
    // private collection: E[];
    add(arg0: E[]): M;
    add(arg0: E): M;
    changed(): void;
    clear(): M;
    // private doAdd(arg0: E): boolean;
    getCollection(): E[];
    remove(arg0: E): M;
    self(): M;
}