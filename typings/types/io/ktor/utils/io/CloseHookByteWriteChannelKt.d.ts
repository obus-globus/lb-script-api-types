import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CloseHookByteWriteChannelKt extends Object {
    static onClose(self: ByteWriteChannel, onClose: () => void): ByteWriteChannel;
}