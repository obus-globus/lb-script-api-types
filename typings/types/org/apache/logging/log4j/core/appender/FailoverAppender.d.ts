import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { AppenderControl } from '../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class FailoverAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramname: string, paramprimary: string, paramfailovers: (Object | null)[], paramretryIntervalSeconds: string, paramconfig: Configuration, paramfilter: Filter, paramignore: string): FailoverAppender;
    static parseInt(params: string, paramdefaultValue: number): number;
    private constructor(name: string, filter: Filter, primary: string, failovers: string[], intervalMillis: number, config: Configuration, ignoreExceptions: boolean, properties: Property[])
    // private config: Configuration;
    // private failoverAppenders: AppenderControl[];
    // private failovers: string[];
    // private intervalNanos: number;
    // private nextCheckNanos: number;
    // private primary: AppenderControl;
    // private primaryRef: string;
    append(event: LogEvent): void;
    // private callAppender(event: LogEvent): void;
    // private failover(event: LogEvent, ex: Exception): void;
    requiresLocation(): boolean;
    start(): void;
    toString(): string;
}