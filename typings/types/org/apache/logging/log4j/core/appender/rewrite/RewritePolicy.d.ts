import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface RewritePolicy extends Object{
    rewrite(source: LogEvent): LogEvent;
}