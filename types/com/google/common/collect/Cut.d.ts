import type { BoundType } from '../../../../com/google/common/collect/BoundType.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class Cut<C extends Comparable<Object>> extends Object implements Serializable, Comparable<Cut<C>> {
    constructor(endpoint: C)
    // private endpoint: C;
    canonical(domain: DiscreteDomain<C>): Cut<C>;
    compareTo(that: Cut<C>): number;
    describeAsLowerBound(sb: StringBuilder): void;
    describeAsUpperBound(sb: StringBuilder): void;
    endpoint(): C;
    equals(obj: Object | null): boolean;
    greatestValueBelow(domain: DiscreteDomain<C>): C;
    hashCode(): number;
    isLessThan(value: C): boolean;
    leastValueAbove(domain: DiscreteDomain<C>): C;
    typeAsLowerBound(): BoundType;
    typeAsUpperBound(): BoundType;
    withLowerBoundType(boundType: BoundType, domain: DiscreteDomain<C>): Cut<C>;
    withUpperBoundType(boundType: BoundType, domain: DiscreteDomain<C>): Cut<C>;
}