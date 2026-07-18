import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class ChunkedTransferEncodingKt extends Object {
    static decodeChunked(self: CoroutineScope, input: ByteReadChannel): WriterJob;
    static decodeChunked(self: CoroutineScope, input: ByteReadChannel, contentLength: number): WriterJob;
    static decodeChunked(input: ByteReadChannel, out: ByteWriteChannel): void;
    static encodeChunked(output: ByteWriteChannel, coroutineContext: CoroutineContext): ReaderJob;
    static encodeChunked(output: ByteWriteChannel, input: ByteReadChannel): void;
}