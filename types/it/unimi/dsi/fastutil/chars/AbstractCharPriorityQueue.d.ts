import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { CharPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractCharPriorityQueue extends AbstractPriorityQueue<string> implements CharPriorityQueue, Serializable {
    constructor()
    dequeue(): string;
    enqueue(arg0: string): void;
    first(): string;
    last(): string;
    lastChar(): string;
}