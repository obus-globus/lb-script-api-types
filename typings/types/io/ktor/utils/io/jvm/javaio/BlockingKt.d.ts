import type { ByteReadChannel } from '../../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../../../kotlinx/coroutines/Job.d.ts'
export class BlockingKt extends Object {
    static toInputStream(self: ByteReadChannel, parent: Job | null): InputStream;
    static toOutputStream(self: ByteWriteChannel): OutputStream;
}