import type { LogRecord } from '../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Filter extends Object{
    isLoggable(arg0: LogRecord): boolean;
}