import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { CountedByteWriteChannel } from '../../../../io/ktor/utils/io/CountedByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CountedByteWriteChannelKt extends Object {
    static counted(self: ByteWriteChannel): CountedByteWriteChannel;
}