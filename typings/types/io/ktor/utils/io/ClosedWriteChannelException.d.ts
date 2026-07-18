import type { ClosedByteChannelException } from '../../../../io/ktor/utils/io/ClosedByteChannelException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ClosedWriteChannelException extends ClosedByteChannelException {
    constructor(cause?: Throwable | null)
}