import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { LoggingException } from '../../../../../../org/apache/logging/log4j/LoggingException.d.ts'
export class AppenderLoggingException extends LoggingException {
    constructor(message: string)
    constructor(format: string, args: Object[])
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable)
    constructor(cause: Throwable, format: string, args: Object[])
}