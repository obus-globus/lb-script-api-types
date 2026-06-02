import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class LoggingException extends RuntimeException {
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable)
}