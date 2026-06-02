import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { LocationAwareLogEventFactory } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAwareLogEventFactory.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
export interface LogEventFactory extends Object, LocationAwareLogEventFactory{
    createEvent(loggerName: string, marker: Marker, fqcn: string, location: StackTraceElement, level: Level, data: Message, properties: Property[], t: Throwable): LogEvent;
    createEvent(loggerName: string, marker: Marker, fqcn: string, level: Level, data: Message, properties: Property[], t: Throwable): LogEvent;
}