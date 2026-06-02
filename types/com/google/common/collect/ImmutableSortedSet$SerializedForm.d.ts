import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSortedSet$SerializedForm<E extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(comparator: (param0: E) => kotlin.Boolean, elements: Object[])
    // private comparator: (param0: E) => kotlin.Boolean;
    // private elements: Object[];
    readResolve(): Object;
}