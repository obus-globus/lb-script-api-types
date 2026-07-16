import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { ErrorHandler } from '../../../../../../org/apache/logging/log4j/core/ErrorHandler.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { AbstractFilterable } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilterable.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
export abstract class AbstractAppender extends AbstractFilterable implements Appender, LocationAware {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(name: string, filter: Filter, layout: Layout<Serializable>)
    constructor(name: string, filter: Filter, layout: Layout<Serializable>, ignoreExceptions: boolean)
    constructor(name: string, filter: Filter, layout: Layout<Serializable>, ignoreExceptions: boolean, properties: Property[])
    readonly handler: ErrorHandler;
    // private ignoreExceptions: boolean;
    readonly layout: Layout<Serializable>;
    readonly name: string;
    append(event: LogEvent): void;
    error(msg: string): void;
    error(msg: string, t: Throwable): void;
    error(msg: string, event: LogEvent, t: Throwable): void;
    getHandler(): ErrorHandler;
    getLayout(): Layout<Serializable>;
    getName(): string;
    ignoreExceptions(): boolean;
    requiresLocation(): boolean;
    setHandler(handler: ErrorHandler): void;
    toSerializable(event: LogEvent): Serializable;
    toString(): string;
}