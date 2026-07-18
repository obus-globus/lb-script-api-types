import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { LookAheadSuspendSession } from '../../../../io/ktor/utils/io/LookAheadSuspendSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LookAheadSessionKt extends Object {
    static lookAhead(self: ByteReadChannel, block: (param0: LookAheadSuspendSession) => void): void;
    static lookAheadSuspend(self: ByteReadChannel, block: (param0: LookAheadSuspendSession) => void): void;
}