import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Interval } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/Interval.d.ts'
export class TreeNode$TreeNodeIterator extends Object implements Iterator<Interval<T>> {
    constructor(null_: TreeNode$TreeNodeIterator)
    // private currentInterval: Interval<T>;
    // private currentNode: Interval<T>[];
    // private iterator: Iterator<Interval<T>>;
    // private stack: Interval<T>[][];
    // private subtreeRoot: Interval<T>[];
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Interval<T>;
    remove(): void;
}