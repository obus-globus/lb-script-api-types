import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { RewritePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rewrite/RewritePolicy.d.ts'
export class LoggerNameLevelRewritePolicy extends Object implements RewritePolicy {
    static createPolicy(paramloggerNamePrefix: string, paramlevelPairs: (Object | null)[]): LoggerNameLevelRewritePolicy;
    private constructor(loggerName: string, map: Map<Level, Level>)
    // private loggerName: string;
    // private map: Map<Level, Level>;
    rewrite(event: LogEvent): LogEvent;
}