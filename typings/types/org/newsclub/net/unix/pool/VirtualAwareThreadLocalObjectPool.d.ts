import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConcurrentQueueObjectPool } from '../../../../../org/newsclub/net/unix/pool/ConcurrentQueueObjectPool.d.ts'
import type { ObjectPool } from '../../../../../org/newsclub/net/unix/pool/ObjectPool.d.ts'
import type { ObjectPool$Lease } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
import type { ObjectPool$ObjectSanitizer } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$ObjectSanitizer.d.ts'
import type { ObjectPool$ObjectSupplier } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$ObjectSupplier.d.ts'
import type { ThreadLocalObjectPool } from '../../../../../org/newsclub/net/unix/pool/ThreadLocalObjectPool.d.ts'
export class VirtualAwareThreadLocalObjectPool<O extends unknown> extends Object implements ObjectPool<O> {
    static newThreadLocalPool(paramarg0: () => Object | null, paramarg1: (param0: Object | null) => boolean): ObjectPool<Object>;
    static unpooledLease(paramarg0: Object | null): ObjectPool$Lease<Object>;
    constructor(arg0: () => O, arg1: (param0: O) => boolean)
    // private cqPool: ConcurrentQueueObjectPool<O>;
    // private tlPool: ThreadLocalObjectPool<O>;
    take(): ObjectPool$Lease<O>;
}