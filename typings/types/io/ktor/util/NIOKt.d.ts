import type { ObjectPool } from '../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NIOKt extends Object {
    static copy(self: ByteBuffer, size: number): ByteBuffer;
    static copy(self: ByteBuffer, pool: ObjectPool<ByteBuffer>, size: number): ByteBuffer;
    static decodeString(self: ByteBuffer, charset: Charset): string;
    static moveTo(self: ByteBuffer, destination: ByteBuffer, limit: number): number;
    static moveToByteArray(self: ByteBuffer): number[];
}