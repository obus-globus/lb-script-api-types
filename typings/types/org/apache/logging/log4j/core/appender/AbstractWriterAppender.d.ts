import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { StringLayout } from '../../../../../../org/apache/logging/log4j/core/StringLayout.d.ts'
import type { AbstractAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { WriterManager } from '../../../../../../org/apache/logging/log4j/core/appender/WriterManager.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export abstract class AbstractWriterAppender<M extends WriterManager> extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(name: string, layout: StringLayout, filter: Filter, ignoreExceptions: boolean, immediateFlush: boolean, manager: M)
    constructor(name: string, layout: StringLayout, filter: Filter, ignoreExceptions: boolean, immediateFlush: boolean, properties: Property[], manager: M)
    // private immediateFlush: boolean;
    readonly manager: M;
    // private readLock: Lock;
    // private readWriteLock: ReadWriteLock;
    append(event: LogEvent): void;
    getManager(): M;
    getStringLayout(): StringLayout;
    start(): void;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}