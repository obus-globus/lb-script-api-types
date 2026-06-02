import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LogEventParser } from '../../../../../../org/apache/logging/log4j/core/parser/LogEventParser.d.ts'
export interface TextLogEventParser extends Object, LogEventParser{
    parseFrom(input: string): LogEvent;
}