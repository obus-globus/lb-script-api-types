import type { ByteWriteChannel } from '../../../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { WriteSuspendSession } from '../../../../../../io/ktor/utils/io/jvm/nio/WriteSuspendSession.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteSuspendSessionKt extends Object {
    static writeSuspendSession(self: ByteWriteChannel, block: (param0: WriteSuspendSession) => void): void;
    static writeWhile(self: ByteWriteChannel, block: (param0: ByteBuffer) => boolean): void;
}