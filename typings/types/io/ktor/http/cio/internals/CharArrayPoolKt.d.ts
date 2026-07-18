import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharArrayPoolKt extends Object {
    static CHAR_ARRAY_POOL_SIZE: number;
    static CHAR_BUFFER_ARRAY_LENGTH: number;
    static getCharArrayPool(): ObjectPool<string[]>;
}