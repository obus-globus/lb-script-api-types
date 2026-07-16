import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Appender } from '../../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { RewritePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rewrite/RewritePolicy.d.ts'
import type { AppenderControl } from '../../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
import type { AppenderRef } from '../../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class RewriteAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramname: string, paramignore: string, paramappenderRefs: AppenderRef[], paramconfig: Configuration, paramrewritePolicy: RewritePolicy, paramfilter: Filter): RewriteAppender;
    static parseInt(params: string, paramdefaultValue: number): number;
    private constructor(name: string, filter: Filter, ignoreExceptions: boolean, appenderRefs: AppenderRef[], rewritePolicy: RewritePolicy, config: Configuration, properties: Property[])
    // private appenderRefs: AppenderRef[];
    // private appenders: { [key: string]: AppenderControl };
    // private config: Configuration;
    // private rewritePolicy: RewritePolicy;
    append(event: LogEvent): void;
    requiresLocation(): boolean;
    start(): void;
}