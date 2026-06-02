import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectPool$Lease } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class ConcurrentQueueObjectPool$LeaseImpl extends Object implements ObjectPool$Lease<O> {
    constructor(null_: ConcurrentQueueObjectPool$LeaseImpl)
    // private obj: O;
    close(): void;
    discard(): void;
    get<O extends Object | number | string | boolean>(): O;
}