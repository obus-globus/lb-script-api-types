import type { Iterators$MergingIterator$IndexedIterator } from '../../../../com/google/common/collect/Iterators$MergingIterator$IndexedIterator.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Iterators$MergingIterator<T extends unknown> extends UnmodifiableIterator<T> {
    constructor(iterators: Iterator<T>[], itemComparator: (param0: T, param1: T) => number)
    // private queue: Iterators$MergingIterator$IndexedIterator<T>[];
    hasNext(): boolean;
    next(): T;
}