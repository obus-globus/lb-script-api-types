import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { KeyValuePair } from '../../../org/slf4j/event/KeyValuePair.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
export interface LoggingEvent extends Object{
    getArgumentArray(): Object[];
    getArguments(): Object[];
    getCallerBoundary(): string;
    getKeyValuePairs(): KeyValuePair[];
    getLevel(): Level;
    getLoggerName(): string;
    getMarkers(): Marker[];
    getMessage(): string;
    getThreadName(): string;
    getThrowable(): Throwable;
    getTimeStamp(): number;
}