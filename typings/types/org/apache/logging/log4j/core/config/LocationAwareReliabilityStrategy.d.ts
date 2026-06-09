import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { Supplier } from '../../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export interface LocationAwareReliabilityStrategy extends Object {
    log(reconfigured: () => LoggerConfig, loggerName: string, fqcn: string, location: StackTraceElement, marker: Marker, level: Level, data: Message, t: Throwable): void;
}