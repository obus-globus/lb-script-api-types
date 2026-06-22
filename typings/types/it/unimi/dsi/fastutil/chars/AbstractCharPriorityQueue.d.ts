import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractCharPriorityQueue extends AbstractPriorityQueue<string> implements CharPriorityQueue, Serializable {
    constructor()
    comparator(): (param0: string, param1: string) => number;
    dequeue(): string;
    dequeueChar(): string;
    enqueue(arg0: string): void;
    first(): string;
    firstChar(): string;
    last(): string;
    lastChar(): string;
}