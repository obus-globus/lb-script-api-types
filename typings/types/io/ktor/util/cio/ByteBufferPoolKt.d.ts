import type { ObjectPool } from '../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteBufferPoolKt extends Object {
    static DEFAULT_BUFFER_SIZE: number;
    static DEFAULT_KTOR_POOL_SIZE: number;
    static getKtorDefaultDirectPool(): ObjectPool<ByteBuffer>;
    static getKtorDefaultPool(): ObjectPool<ByteBuffer>;
}