import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggerContextShutdownAware } from '../../../../../org/apache/logging/log4j/spi/LoggerContextShutdownAware.d.ts'
export interface LoggerContextShutdownEnabled extends Object{
    addShutdownListener(listener: LoggerContextShutdownAware): void;
    getListeners(): LoggerContextShutdownAware[];
}