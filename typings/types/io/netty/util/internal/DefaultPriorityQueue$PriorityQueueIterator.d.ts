import type { DefaultPriorityQueue$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { PriorityQueueNode } from '../../../../io/netty/util/internal/PriorityQueueNode.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class DefaultPriorityQueue$PriorityQueueIterator extends Object implements Iterator<T> {
    private constructor(null_: T[])
    constructor(null_: T[], arg1: DefaultPriorityQueue$1)
    // private index: number;
    forEachRemaining<T extends PriorityQueueNode>(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<T extends PriorityQueueNode>(): T;
    remove(): void;
}