import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteArrayPoolKt extends Object {
    static getByteArrayPool(): ObjectPool<number[]>;
}