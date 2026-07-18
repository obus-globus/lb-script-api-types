import type { ByteReadChannel } from '../../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ReadableByteChannel } from '../../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { RawSource } from '../../../../../../kotlinx/io/RawSource.d.ts'
export class ReadingKt extends Object {
    static asSource(self: ReadableByteChannel): RawSource;
    static toByteReadChannel(self: ReadableByteChannel, context: CoroutineContext): ByteReadChannel;
}