import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MinMaxPriorityQueue$Builder<B extends Object | number | string | boolean> extends Object {
    private constructor(comparator: (param0: B) => kotlin.Boolean)
    // private comparator: (param0: B) => kotlin.Boolean;
    // private expectedSize: number;
    // private maximumSize: number;
    create(): T[];
    create(initialContents: T[]): T[];
    expectedSize(expectedSize: number): MinMaxPriorityQueue$Builder<B>;
    maximumSize(maximumSize: number): MinMaxPriorityQueue$Builder<B>;
    // private ordering(): Ordering<T>;
}