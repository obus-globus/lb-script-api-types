import type { JavaMap } from '../../../JavaMap.d.ts'
import type { AbstractIterator } from '../../../com/google/common/collect/AbstractIterator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SequencedPriorityIterator<T extends unknown> extends AbstractIterator<T> {
    constructor()
    // private highestPrio: number;
    // private highestPrioQueue: T[];
    // private queuesByPriority: JavaMap<any, any>;
    add(data: T, priority: number): void;
    computeNext(): T;
    // private switchCacheToNextHighestPrioQueue(): void;
}