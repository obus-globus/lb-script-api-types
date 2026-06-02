import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface LogEventParser extends Object{
    parseFrom(input: number[]): LogEvent;
    parseFrom(input: number[], offset: number, length: number): LogEvent;
}