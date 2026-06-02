import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { LogEvent } from '../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface ErrorHandler extends Object{
    error(msg: string): void;
    error(msg: string, t: Throwable): void;
    error(msg: string, event: LogEvent, t: Throwable): void;
}