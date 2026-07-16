import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSortedMultiset$SerializedForm<E extends unknown> extends Object implements Serializable {
    constructor(multiset: E[])
    // private comparator: (param0: E, param1: E) => number;
    // private counts: number[];
    // private elements: E[];
    readResolve(): Object;
}