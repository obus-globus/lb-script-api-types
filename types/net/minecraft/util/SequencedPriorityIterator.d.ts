import type { AbstractIterator } from '../../../com/google/common/collect/AbstractIterator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SequencedPriorityIterator<T extends Object | number | string | boolean> extends AbstractIterator<T> {
    constructor()
    // private highestPrio: number;
    // private highestPrioQueue: T[];
    // private queuesByPriority: Int2ObjectMap<T[]>;
    add(data: T, priority: number): void;
    computeNext(): T;
    // private switchCacheToNextHighestPrioQueue(): void;
}