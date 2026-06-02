import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractStringLayout$Serializer2 } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer2.d.ts'
export interface AbstractStringLayout$Serializer extends Object, AbstractStringLayout$Serializer2{
    toSerializable(event: LogEvent): string;
    toSerializable(event: LogEvent, builder: StringBuilder): StringBuilder;
}