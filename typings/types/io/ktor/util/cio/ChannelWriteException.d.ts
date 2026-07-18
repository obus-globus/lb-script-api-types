import type { ChannelIOException } from '../../../../io/ktor/util/cio/ChannelIOException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ChannelWriteException extends ChannelIOException {
    constructor(message: string, exception: Throwable)
}