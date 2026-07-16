import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MinMaxPriorityQueue$Builder<B extends unknown> extends Object {
    constructor(arg0: (param0: Object, param1: Object) => number, arg1: any)
    // private comparator: (param0: B, param1: B) => number;
    // private expectedSize: number;
    // private maximumSize: number;
    create<T extends B>(): T[];
    create<T extends B>(initialContents: T[]): T[];
    expectedSize(expectedSize: number): MinMaxPriorityQueue$Builder<B>;
    maximumSize(maximumSize: number): MinMaxPriorityQueue$Builder<B>;
    // private ordering<T extends B>(): Ordering<T>;
}