import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DoubleBufferedQueue$QueueImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/DoubleBufferedQueue$QueueImpl.d.ts'
import type { ReadQueue } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/ReadQueue.d.ts'
import type { WriteQueue } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/WriteQueue.d.ts'
export class DoubleBufferedQueue<E extends unknown> extends Object {
    constructor()
    // private read: DoubleBufferedQueue$QueueImpl<E>;
    // private write: DoubleBufferedQueue$QueueImpl<E>;
    flip(): boolean;
    read(): ReadQueue<E>;
    reset(): void;
    write(): WriteQueue<E>;
}