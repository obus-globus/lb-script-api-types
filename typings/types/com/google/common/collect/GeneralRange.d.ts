import type { BoundType } from '../../../../com/google/common/collect/BoundType.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GeneralRange<T extends unknown> extends Object implements Serializable {
    private constructor(comparator: (param0: Object) => boolean, hasLowerBound: boolean, lowerEndpoint: T, lowerBoundType: BoundType, hasUpperBound: boolean, upperEndpoint: T, upperBoundType: BoundType)
    // private comparator: (param0: Object) => boolean;
    // private hasLowerBound: boolean;
    // private hasUpperBound: boolean;
    // private lowerBoundType: BoundType;
    // private lowerEndpoint: T;
    // private reverse: GeneralRange<T>;
    // private upperBoundType: BoundType;
    // private upperEndpoint: T;
    comparator(): (param0: Object) => boolean;
    contains(t: T): boolean;
    equals(obj: Object | null): boolean;
    getLowerBoundType(): BoundType;
    getLowerEndpoint(): T;
    getUpperBoundType(): BoundType;
    getUpperEndpoint(): T;
    hasLowerBound(): boolean;
    hasUpperBound(): boolean;
    hashCode(): number;
    intersect(other: GeneralRange<T>): GeneralRange<T>;
    isEmpty(): boolean;
    reverse(): GeneralRange<T>;
    toString(): string;
    tooHigh(t: T): boolean;
    tooLow(t: T): boolean;
}