import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { AbstractStringLayout$Serializer } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer.d.ts'
export interface PatternLayout$PatternSerializer extends Object, LocationAware, AbstractStringLayout$Serializer{
    requiresLocation(): boolean;
    toSerializable(event: LogEvent): string;
    toSerializable(event: LogEvent, builder: StringBuilder): StringBuilder;
}