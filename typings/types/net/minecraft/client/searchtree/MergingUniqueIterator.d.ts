import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { PeekingIterator } from '../../../../com/google/common/collect/PeekingIterator.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class MergingUniqueIterator<T extends Object | number | string | boolean> extends AbstractIterator<T> {
    constructor(firstIterator: Iterator<T>, secondIterator: Iterator<T>, comparator: (param0: Object) => boolean)
    // private comparator: (param0: Object) => boolean;
    // private firstIterator: PeekingIterator<T>;
    // private secondIterator: PeekingIterator<T>;
    computeNext(): T;
}