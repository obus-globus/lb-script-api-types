import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConsumingQueueIterator<T extends unknown> extends AbstractIterator<T> {
    constructor(queue: T[])
    // private queue: T[];
    computeNext(): T;
}