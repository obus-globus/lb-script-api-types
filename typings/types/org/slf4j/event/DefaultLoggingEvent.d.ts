import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { KeyValuePair } from '../../../org/slf4j/event/KeyValuePair.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { LoggingEvent } from '../../../org/slf4j/event/LoggingEvent.d.ts'
export class DefaultLoggingEvent extends Object implements LoggingEvent {
    constructor(arg0: Level, arg1: Logger)
    arguments: Object[];
    callerBoundary: string;
    keyValuePairs: KeyValuePair[];
    level: Level;
    // private logger: Logger;
    markers: Marker[];
    message: string;
    threadName: string;
    throwable: Throwable;
    timeStamp: number;
    addArgument(arg0: Object): void;
    addArguments(...arg0: Object[]): void;
    addKeyValue(arg0: string, arg1: Object): void;
    addMarker(arg0: Marker): void;
    getArgumentArray(): Object[];
    getArguments(): Object[];
    getCallerBoundary(): string;
    getKeyValuePairs(): KeyValuePair[];
    getLevel(): Level;
    getLoggerName(): string;
    getMarkers(): Marker[];
    getMessage(): string;
    // private getNonNullArguments(): Object[];
    // private getNonnullKeyValuePairs(): KeyValuePair[];
    getThreadName(): string;
    getThrowable(): Throwable;
    getTimeStamp(): number;
    setCallerBoundary(arg0: string): void;
    setMessage(arg0: string): void;
    setThrowable(arg0: Throwable): void;
    setTimeStamp(arg0: number): void;
}