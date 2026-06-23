import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectPool$Lease } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export interface ObjectPool<O extends unknown> extends Object{
    take(): ObjectPool$Lease<O>;
}