import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ReadQueue } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/ReadQueue.d.ts'
import type { WriteQueue } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/WriteQueue.d.ts'
export class DoubleBufferedQueue$QueueImpl<E extends unknown> extends Object implements ReadQueue<E>, WriteQueue<E> {
    constructor()
    constructor(arg0: number)
    // private elements: E[];
    // private readIndex: number;
    // private writeIndex: number;
    clear(): void;
    dequeue(): E;
    enqueue(arg0: E): void;
    ensureCapacity(arg0: number): void;
    // private grow(arg0: number): void;
    isEmpty(): boolean;
    // private resize(arg0: number): void;
    size(): number;
}