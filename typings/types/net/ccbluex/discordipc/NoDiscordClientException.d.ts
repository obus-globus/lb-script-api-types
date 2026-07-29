import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class NoDiscordClientException extends IOException {
    constructor(cause?: Throwable | null)
}