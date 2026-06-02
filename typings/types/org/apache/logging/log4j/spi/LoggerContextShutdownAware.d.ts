import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
export interface LoggerContextShutdownAware extends Object{
    contextShutdown(loggerContext: LoggerContext): void;
}