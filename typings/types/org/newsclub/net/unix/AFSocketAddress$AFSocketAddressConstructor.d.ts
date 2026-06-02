import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export interface AFSocketAddress$AFSocketAddressConstructor<T extends AFSocketAddress> extends Object{
    newAFSocketAddress(arg0: number, arg1: number[], arg2: ObjectPool$Lease<ByteBuffer>): T;
}