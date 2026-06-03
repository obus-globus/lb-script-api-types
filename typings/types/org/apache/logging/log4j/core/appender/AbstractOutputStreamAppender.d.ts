import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export abstract class AbstractOutputStreamAppender<M extends OutputStreamManager> extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(name: string, layout: Layout<Serializable>, filter: Filter, ignoreExceptions: boolean, immediateFlush: boolean, manager: M)
    constructor(name: string, layout: Layout<Serializable>, filter: Filter, ignoreExceptions: boolean, immediateFlush: boolean, properties: Property[], manager: M)
    readonly immediateFlush: boolean;
    readonly manager: M;
    append(event: LogEvent): void;
    directEncodeEvent(event: LogEvent): void;
    getImmediateFlush(): boolean;
    getManager(): M;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
    // private tryAppend(event: LogEvent): void;
    writeByteArrayToManager(event: LogEvent): void;
}