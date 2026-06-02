import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
export interface LoggerContextAccessor extends Object{
    getLoggerContext(): LoggerContext;
}