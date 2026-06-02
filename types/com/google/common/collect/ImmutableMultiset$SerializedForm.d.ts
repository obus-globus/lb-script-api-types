import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMultiset$SerializedForm extends Object implements Serializable {
    constructor(multiset: (Object | null)[])
    // private counts: number[];
    // private elements: Object[];
    readResolve(): Object;
}