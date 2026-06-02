import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
export interface LoggerContextAware extends Object{
    setLoggerContext(loggerContext: LoggerContext): void;
}