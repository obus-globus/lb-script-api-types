import type { EmptyContiguousSet$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class EmptyContiguousSet$SerializedForm<C extends Comparable<Object>> extends Object implements Serializable {
    constructor(arg0: DiscreteDomain<Comparable<Object>>, arg1: EmptyContiguousSet$1)
    private constructor(domain: DiscreteDomain<C>)
    // private domain: DiscreteDomain<C>;
    // private readResolve(): Object;
}