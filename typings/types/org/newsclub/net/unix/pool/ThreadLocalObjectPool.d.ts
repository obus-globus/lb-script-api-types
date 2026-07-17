import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectPool } from '../../../../../org/newsclub/net/unix/pool/ObjectPool.d.ts'
import type { ObjectPool$Lease } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
import type { ObjectPool$ObjectSanitizer } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$ObjectSanitizer.d.ts'
import type { ObjectPool$ObjectSupplier } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$ObjectSupplier.d.ts'
export class ThreadLocalObjectPool<O extends unknown> extends Object implements ObjectPool<O> {
    constructor(arg0: () => O, arg1: (param0: O) => boolean)
    // private leaseImpl: ObjectPool$Lease<O>;
    // private sanitizer: (param0: O) => boolean;
    // private tl: ThreadLocal<O>;
    take(): ObjectPool$Lease<O>;
}