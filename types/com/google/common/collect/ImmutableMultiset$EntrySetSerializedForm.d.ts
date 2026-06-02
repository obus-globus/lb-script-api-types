import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMultiset$EntrySetSerializedForm<E extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(multiset: E[])
    // private multiset: E[];
    readResolve(): Object;
}