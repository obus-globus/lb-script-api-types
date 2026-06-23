import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { BoundType } from '../../../../com/google/common/collect/BoundType.d.ts'
import type { Cut } from '../../../../com/google/common/collect/Cut.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Range<C extends Comparable<Object>> extends Object implements Predicate<C>, Serializable {
    static all(): Range<any>;
    static atLeast(paramendpoint: Object | null): Range<any>;
    static atMost(paramendpoint: Object | null): Range<any>;
    static closed(paramlower: Object | null, paramupper: Object | null): Range<any>;
    static closedOpen(paramlower: Object | null, paramupper: Object | null): Range<any>;
    static downTo(paramendpoint: Object | null, paramboundType: BoundType): Range<any>;
    static encloseAll(paramvalues: (Object | null)[]): Range<any>;
    static greaterThan(paramendpoint: Object | null): Range<any>;
    static lessThan(paramendpoint: Object | null): Range<any>;
    static open(paramlower: Object | null, paramupper: Object | null): Range<any>;
    static openClosed(paramlower: Object | null, paramupper: Object | null): Range<any>;
    static range(paramlower: Object | null, paramlowerType: BoundType, paramupper: Object | null, paramupperType: BoundType): Range<any>;
    static singleton(paramvalue: Object | null): Range<any>;
    static upTo(paramendpoint: Object | null, paramboundType: BoundType): Range<any>;
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