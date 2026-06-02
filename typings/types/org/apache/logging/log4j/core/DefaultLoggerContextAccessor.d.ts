import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { LoggerContextAccessor } from '../../../../../org/apache/logging/log4j/core/LoggerContextAccessor.d.ts'
export class DefaultLoggerContextAccessor extends Object implements LoggerContextAccessor {
    static INSTANCE: DefaultLoggerContextAccessor;
    constructor()
    getLoggerContext(): LoggerContext;
}