import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ChannelIOException extends IOException {
    constructor(message: string, exception: Throwable)
}