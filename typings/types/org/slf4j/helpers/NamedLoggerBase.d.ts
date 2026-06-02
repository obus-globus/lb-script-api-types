import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { LoggingEventBuilder } from '../../../org/slf4j/spi/LoggingEventBuilder.d.ts'
export abstract class NamedLoggerBase extends Object implements Serializable, Logger {
    static ROOT_LOGGER_NAME: string;
    constructor()
    name: string;
    atDebug(): LoggingEventBuilder;
    atError(): LoggingEventBuilder;
    atInfo(): LoggingEventBuilder;
    atLevel(arg0: Level): LoggingEventBuilder;
    atTrace(): LoggingEventBuilder;
    atWarn(): LoggingEventBuilder;
    getName(): string;
    isEnabledForLevel(arg0: Level): boolean;
    makeLoggingEventBuilder(arg0: Level): LoggingEventBuilder;
    readResolve(): Object;
}