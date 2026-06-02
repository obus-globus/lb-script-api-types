import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface AbstractStringLayout$Serializer2 extends Object{
    toSerializable(event: LogEvent, builder: StringBuilder): StringBuilder;
}