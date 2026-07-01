import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConcurrentQueueObjectPool } from '../../../../../org/newsclub/net/unix/pool/ConcurrentQueueObjectPool.d.ts'
import type { ObjectPool$Lease } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class ConcurrentQueueObjectPool$LeaseImpl extends Object implements ObjectPool$Lease<O> {
    constructor(null_: ConcurrentQueueObjectPool<Object>, arg1: Object)
    // private obj: O;
    close(): void;
    discard(): void;
    get<O extends unknown>(): O;
}