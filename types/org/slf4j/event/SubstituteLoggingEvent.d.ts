import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { KeyValuePair } from '../../../org/slf4j/event/KeyValuePair.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { LoggingEvent } from '../../../org/slf4j/event/LoggingEvent.d.ts'
import type { SubstituteLogger } from '../../../org/slf4j/helpers/SubstituteLogger.d.ts'
export class SubstituteLoggingEvent extends Object implements LoggingEvent {
    constructor()
    // private argArray: Object[];
    // private keyValuePairList: KeyValuePair[];
    level: Level;
    logger: SubstituteLogger;
    loggerName: string;
    markers: Marker[];
    message: string;
    threadName: string;
    throwable: Throwable;
    timeStamp: number;
    addMarker(arg0: Marker): void;
    getArgumentArray(): Object[];
    getArguments(): Object[];
    getCallerBoundary(): string;
    getKeyValuePairs(): KeyValuePair[];
    getLevel(): Level;
    getLogger(): SubstituteLogger;
    getLoggerName(): string;
    getMarkers(): Marker[];
    getMessage(): string;
    getThreadName(): string;
    getThrowable(): Throwable;
    getTimeStamp(): number;
    setArgumentArray(arg0: Object[]): void;
    setLevel(arg0: Level): void;
    setLogger(arg0: SubstituteLogger): void;
    setLoggerName(arg0: string): void;
    setMessage(arg0: string): void;
    setThreadName(arg0: string): void;
    setThrowable(arg0: Throwable): void;
    setTimeStamp(arg0: number): void;
}