import type { PriorityQueueNode } from '../../../../io/netty/util/internal/PriorityQueueNode.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class DefaultPriorityQueue$PriorityQueueIterator extends Object implements Iterator<T> {
    constructor(null_: PriorityQueueNode[], arg1: any)
    // private index: number;
    forEachRemaining<T extends PriorityQueueNode>(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<T extends PriorityQueueNode>(): T;
    remove(): void;
}