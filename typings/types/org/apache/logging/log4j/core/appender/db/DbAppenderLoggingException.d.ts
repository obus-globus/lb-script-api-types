import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { AppenderLoggingException } from '../../../../../../../org/apache/logging/log4j/core/appender/AppenderLoggingException.d.ts'
export class DbAppenderLoggingException extends AppenderLoggingException {
    constructor(format: string, ...args: Object[])
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable, format: string, ...args: Object[])
}