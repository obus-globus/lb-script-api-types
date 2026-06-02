import type { BoundType } from '../../../../com/google/common/collect/BoundType.d.ts'
import type { Cut } from '../../../../com/google/common/collect/Cut.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Cut$AboveAll extends Cut<Comparable<Object>> {
    private constructor()
    compareTo(o: Cut<Comparable<Object>>): number;
    describeAsLowerBound(sb: StringBuilder): void;
    describeAsUpperBound(sb: StringBuilder): void;
    endpoint(): Comparable<Object>;
    greatestValueBelow(domain: DiscreteDomain<Comparable<Object>>): Comparable<Object>;
    hashCode(): number;
    isLessThan(value: Comparable<Object>): boolean;
    leastValueAbove(domain: DiscreteDomain<Comparable<Object>>): Comparable<Object>;
    // private readResolve(): Object;
    toString(): string;
    typeAsLowerBound(): BoundType;
    typeAsUpperBound(): BoundType;
    withLowerBoundType(boundType: BoundType, domain: DiscreteDomain<Comparable<Object>>): Cut<Comparable<Object>>;
    withUpperBoundType(boundType: BoundType, domain: DiscreteDomain<Comparable<Object>>): Cut<Comparable<Object>>;
}