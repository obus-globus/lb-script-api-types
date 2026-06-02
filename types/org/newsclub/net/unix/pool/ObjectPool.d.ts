import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectPool$Lease } from '../../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export interface ObjectPool<O extends Object | number | string | boolean> extends Object{
    take(): ObjectPool$Lease<O>;
}