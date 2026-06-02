import type { BoundType } from '../../../../com/google/common/collect/BoundType.d.ts'
import type { Cut } from '../../../../com/google/common/collect/Cut.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Cut$AboveValue<C extends Comparable<Object>> extends Cut<C> {
    constructor(endpoint: C)
    canonical(domain: DiscreteDomain<C>): Cut<C>;
    describeAsLowerBound(sb: StringBuilder): void;
    describeAsUpperBound(sb: StringBuilder): void;
    greatestValueBelow(domain: DiscreteDomain<C>): C;
    hashCode(): number;
    isLessThan(value: C): boolean;
    leastValueAbove(domain: DiscreteDomain<C>): C;
    toString(): string;
    typeAsLowerBound(): BoundType;
    typeAsUpperBound(): BoundType;
    withLowerBoundType(boundType: BoundType, domain: DiscreteDomain<C>): Cut<C>;
    withUpperBoundType(boundType: BoundType, domain: DiscreteDomain<C>): Cut<C>;
}