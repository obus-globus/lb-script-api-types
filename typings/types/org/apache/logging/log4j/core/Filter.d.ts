import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Filter$Result } from '../../../../../org/apache/logging/log4j/core/Filter$Result.d.ts'
import type { LifeCycle } from '../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
import type { LifeCycle$State } from '../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
import type { LogEvent } from '../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export interface Filter extends Object, LifeCycle{
    filter(event: LogEvent): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: Object, t: Throwable): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, ...params: Object[]): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: Message, t: Throwable): Filter$Result;
    getOnMatch(): Filter$Result;
    getOnMismatch(): Filter$Result;
    getState(): LifeCycle$State;
    initialize(): void;
    isStarted(): boolean;
    isStopped(): boolean;
    start(): void;
    stop(): void;
}