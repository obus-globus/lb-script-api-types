import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
export class BlockingBridgeKt extends Object {
    static withBlockingOutputStream(self: ByteWriteChannel, dispatcher: CoroutineDispatcher, block: (param0: OutputStream) => void): void;
    static withBlockingWriter(self: ByteWriteChannel, charset: Charset, dispatcher: CoroutineDispatcher, block: (param0: Writer) => void): void;
}