import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSortedSet$SerializedForm<E extends unknown> extends Object implements Serializable {
    constructor(comparator: (param0: E, param1: E) => number, elements: Object[])
    // private comparator: (param0: E, param1: E) => number;
    // private elements: Object[];
    readResolve(): Object;
}