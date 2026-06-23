import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Maps$ValueDifferenceImpl<V extends unknown> extends Object implements MapDifference$ValueDifference<V> {
    private constructor(left: V, right: V)
    // private left: V;
    // private right: V;
    equals(object: Object | null): boolean;
    hashCode(): number;
    leftValue(): V;
    rightValue(): V;
    toString(): string;
}