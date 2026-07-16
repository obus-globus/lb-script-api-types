import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { BoundType } from '../../../../com/google/common/collect/BoundType.d.ts'
import type { Cut } from '../../../../com/google/common/collect/Cut.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Range<C extends Comparable<Object>> extends Object implements Predicate<C>, Serializable {
    static all<C extends Comparable<Object>>(): Range<C>;
    static atLeast<C extends Comparable<Object>>(paramendpoint: C): Range<C>;
    static atMost<C extends Comparable<Object>>(paramendpoint: C): Range<C>;
    static closed<C extends Comparable<Object>>(paramlower: C, paramupper: C): Range<C>;
    static closedOpen<C extends Comparable<Object>>(paramlower: C, paramupper: C): Range<C>;
    static downTo<C extends Comparable<Object>>(paramendpoint: C, paramboundType: BoundType): Range<C>;
    static encloseAll<C extends Comparable<Object>>(paramvalues: C[]): Range<C>;
    static greaterThan<C extends Comparable<Object>>(paramendpoint: C): Range<C>;
    static lessThan<C extends Comparable<Object>>(paramendpoint: C): Range<C>;
    static open<C extends Comparable<Object>>(paramlower: C, paramupper: C): Range<C>;
    static openClosed<C extends Comparable<Object>>(paramlower: C, paramupper: C): Range<C>;
    static range<C extends Comparable<Object>>(paramlower: C, paramlowerType: BoundType, paramupper: C, paramupperType: BoundType): Range<C>;
    static singleton<C extends Comparable<Object>>(paramvalue: C): Range<C>;
    static upTo<C extends Comparable<Object>>(paramendpoint: C, paramboundType: BoundType): Range<C>;
    private constructor(lowerBound: Cut<C>, upperBound: Cut<C>)
    // private lowerBound: Cut<C>;
    // private upperBound: Cut<C>;
    apply(input: C): boolean;
    canonical(domain: DiscreteDomain<C>): Range<C>;
    contains(value: C): boolean;
    containsAll(values: C[]): boolean;
    encloses(other: Range<C>): boolean;
    equals(object: Object | null): boolean;
    gap(otherRange: Range<C>): Range<C>;
    hasLowerBound(): boolean;
    hasUpperBound(): boolean;
    hashCode(): number;
    intersection(connectedRange: Range<C>): Range<C>;
    isConnected(other: Range<C>): boolean;
    isEmpty(): boolean;
    lowerBound(): Cut<C>;
    lowerBoundType(): BoundType;
    lowerEndpoint(): C;
    readResolve(): Object;
    span(other: Range<C>): Range<C>;
    test(input: C): boolean;
    toString(): string;
    upperBound(): Cut<C>;
    upperBoundType(): BoundType;
    upperEndpoint(): C;
}