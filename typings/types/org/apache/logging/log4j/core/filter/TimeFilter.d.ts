import type { LocalDate } from '../../../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../../../java/time/ZoneId.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Filter$Result } from '../../../../../../org/apache/logging/log4j/core/Filter$Result.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { AbstractFilter } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilter.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class TimeFilter extends AbstractFilter {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createFilter(paramstart: string, paramend: string, paramtz: string, parammatch: Filter$Result, parammismatch: Filter$Result): TimeFilter;
    private constructor(start: LocalTime, end: LocalTime, timeZone: ZoneId, onMatch: Filter$Result, onMismatch: Filter$Result)
    constructor(start: LocalTime, end: LocalTime, timeZone: ZoneId, onMatch: Filter$Result, onMismatch: Filter$Result, now: LocalDate)
    // private duration: number;
    // private end: number;
    // private endTime: LocalTime;
    // private start: number;
    // private startTime: LocalTime;
    // private timeZone: ZoneId;
    // private adjustTimes(currentTimeMillis: number): void;
    // private filter(): Filter$Result;
    filter(currentTimeMillis: number): Filter$Result;
    filter(event: LogEvent): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: Object, t: Throwable): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, params: Object[]): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: Message, t: Throwable): Filter$Result;
    toString(): string;
}