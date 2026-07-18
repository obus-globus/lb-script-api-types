import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RawSink } from '../../../../kotlinx/io/RawSink.d.ts'
export class ByteWriteChannelSinkKt extends Object {
    static asSink(self: ByteWriteChannel): RawSink;
}