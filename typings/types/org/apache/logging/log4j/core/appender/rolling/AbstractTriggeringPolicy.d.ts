import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AbstractLifeCycle } from '../../../../../../../org/apache/logging/log4j/core/AbstractLifeCycle.d.ts'
import type { TriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
export abstract class AbstractTriggeringPolicy extends AbstractLifeCycle implements TriggeringPolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor()
}