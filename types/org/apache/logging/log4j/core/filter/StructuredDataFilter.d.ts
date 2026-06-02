import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Filter$Result } from '../../../../../../org/apache/logging/log4j/core/Filter$Result.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { MapFilter } from '../../../../../../org/apache/logging/log4j/core/filter/MapFilter.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StructuredDataMessage } from '../../../../../../org/apache/logging/log4j/message/StructuredDataMessage.d.ts'
export class StructuredDataFilter extends MapFilter {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createFilter(parampairs: (Object | null)[], paramoper: string, parammatch: Filter$Result, parammismatch: Filter$Result): MapFilter;
    static createFilter(parampairs: (Object | null)[], paramoper: string, parammatch: Filter$Result, parammismatch: Filter$Result): StructuredDataFilter;
    private constructor(map: { [key: string]: string[] }, oper: boolean, onMatch: Filter$Result, onMismatch: Filter$Result)
    // private appendOrNull(value: string, sb: StringBuilder): StringBuilder;
    filter(event: LogEvent): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: Message, t: Throwable): Filter$Result;
    filter(message: StructuredDataMessage): Filter$Result;
    // private getStringBuilder(): StringBuilder;
    // private getValue(data: StructuredDataMessage, key: string): StringBuilder;
    // private listContainsValue(candidates: string[], toMatch: StringBuilder): boolean;
}