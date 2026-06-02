import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class EmptyContiguousSet$SerializedForm<C extends Comparable<Object>> extends Object implements Serializable {
    private constructor(domain: DiscreteDomain<C>)
    // private domain: DiscreteDomain<C>;
    // private readResolve(): Object;
}