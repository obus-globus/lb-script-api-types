import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { LoggingEventBuilder } from '../../../org/slf4j/spi/LoggingEventBuilder.d.ts'
export interface LocationAwareLogger extends Object, Logger{
    atDebug(): LoggingEventBuilder;
    atError(): LoggingEventBuilder;
    atInfo(): LoggingEventBuilder;
    atLevel(arg0: Level): LoggingEventBuilder;
    atTrace(): LoggingEventBuilder;
    atWarn(): LoggingEventBuilder;
    isEnabledForLevel(arg0: Level): boolean;
    log(arg0: Marker, arg1: string, arg2: number, arg3: string, arg4: Object[], arg5: Throwable): void;
    makeLoggingEventBuilder(arg0: Level): LoggingEventBuilder;
}