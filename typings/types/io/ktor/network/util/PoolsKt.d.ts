import type { ObjectPool } from '../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PoolsKt extends Object {
    static DEFAULT_BYTE_BUFFER_BUFFER_SIZE: number;
    static DEFAULT_BYTE_BUFFER_POOL_SIZE: number;
    static getDefaultByteBufferPool(): ObjectPool<ByteBuffer>;
    static getDefaultDatagramByteBufferPool(): ObjectPool<ByteBuffer>;
}