import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectPool } from '../../../../../org/newsclub/net/unix/pool/ObjectPool.d.ts'
import type { ObjectPool$Lease } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
import type { ObjectPool$ObjectSanitizer } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$ObjectSanitizer.d.ts'
import type { ObjectPool$ObjectSupplier } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$ObjectSupplier.d.ts'
export class ConcurrentQueueObjectPool<O extends unknown> extends Object implements ObjectPool<O> {
    static newThreadLocalPool<O extends unknown>(paramarg0: () => O, paramarg1: (param0: O) => boolean): ObjectPool<O>;
    static unpooledLease<O extends unknown>(paramarg0: O): ObjectPool$Lease<O>;
    constructor(arg0: () => O, arg1: (param0: O) => boolean, arg2: number)
    // private count: AtomicInteger;
    // private maxCapacity: number;
    // private queue: O[];
    // private sanitizer: (param0: O) => boolean;
    // private supplier: () => O;
    take(): ObjectPool$Lease<O>;
}