import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { WriterScope } from '../../../../io/ktor/utils/io/WriterScope.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class FileChannelsKt extends Object {
    static readChannel(self: File, start: number, endInclusive: number, coroutineContext: CoroutineContext): ByteReadChannel;
    static writeChannel(self: File, coroutineContext: CoroutineContext): ByteWriteChannel;
    static writeToScope(self: SeekableByteChannel, writerScope: WriterScope, start: number, endInclusive: number): void;
}