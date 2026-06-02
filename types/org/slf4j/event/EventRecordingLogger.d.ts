import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { SubstituteLoggingEvent } from '../../../org/slf4j/event/SubstituteLoggingEvent.d.ts'
import type { LegacyAbstractLogger } from '../../../org/slf4j/helpers/LegacyAbstractLogger.d.ts'
import type { SubstituteLogger } from '../../../org/slf4j/helpers/SubstituteLogger.d.ts'
export class EventRecordingLogger extends LegacyAbstractLogger {
    static ROOT_LOGGER_NAME: string;
    constructor(arg0: SubstituteLogger, arg1: SubstituteLoggingEvent[])
    // private eventQueue: SubstituteLoggingEvent[];
    // private logger: SubstituteLogger;
    name: string;
    getFullyQualifiedCallerName(): string;
    getName(): string;
    handleNormalizedLoggingCall(arg0: Level, arg1: Marker, arg2: string, arg3: Object[], arg4: Throwable): void;
    isDebugEnabled(): boolean;
    isErrorEnabled(): boolean;
    isInfoEnabled(): boolean;
    isTraceEnabled(): boolean;
    isWarnEnabled(): boolean;
}