import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteWriteChannelKt extends Object {
    static cancel(self: ByteChannel): void;
    static cancel(self: ByteWriteChannel): void;
    static close(self: ByteWriteChannel): void;
    static flushIfNeeded(self: ByteWriteChannel): void;
}