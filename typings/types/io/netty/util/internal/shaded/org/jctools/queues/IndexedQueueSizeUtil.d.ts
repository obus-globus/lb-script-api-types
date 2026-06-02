import type { IndexedQueueSizeUtil$IndexedQueue } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/IndexedQueueSizeUtil$IndexedQueue.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class IndexedQueueSizeUtil extends Object {
    static IGNORE_PARITY_DIVISOR: number;
    static PLAIN_DIVISOR: number;
    static isEmpty(paramarg0: IndexedQueueSizeUtil$IndexedQueue): boolean;
    static sanitizedSize(paramarg0: number, paramarg1: number): number;
    static size(paramarg0: IndexedQueueSizeUtil$IndexedQueue, paramarg1: number): number;
    constructor()
}