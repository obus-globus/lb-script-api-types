import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ObjectPool } from '../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class InputStreamAdaptersKt extends Object {
    static toByteReadChannel(self: InputStream, pool: ObjectPool<ByteBuffer>, context: CoroutineContext, parent: Job): ByteReadChannel;
}