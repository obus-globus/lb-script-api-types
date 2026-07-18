import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ObjectPool } from '../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Checksum } from '../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
export class DeflaterKt extends Object {
    static GZIP_MAGIC: number;
    static deflated(self: ByteReadChannel, gzip: boolean, pool: ObjectPool<ByteBuffer>, coroutineContext: CoroutineContext): ByteReadChannel;
    static deflated(self: ByteWriteChannel, gzip: boolean, pool: ObjectPool<ByteBuffer>, coroutineContext: CoroutineContext): ByteWriteChannel;
    static getGZIP_HEADER_PADDING(): number[];
    static updateKeepPosition(self: Checksum, buffer: ByteBuffer): void;
}