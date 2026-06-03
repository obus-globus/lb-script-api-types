import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Future } from '../../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Lock } from '../../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { AbstractDatabaseManager } from '../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseManager.d.ts'
import type { Property } from '../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export abstract class AbstractDatabaseAppender<T extends AbstractDatabaseManager> extends AbstractAppender {
    static DEFAULT_RECONNECT_INTERVAL_MILLIS: number;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(name: string, filter: Filter, ignoreExceptions: boolean, manager: T)
    constructor(name: string, filter: Filter, layout: Layout<Serializable>, ignoreExceptions: boolean, manager: T)
    constructor(name: string, filter: Filter, layout: Layout<Serializable>, ignoreExceptions: boolean, properties: Property[], manager: T)
    // private lock: ReadWriteLock;
    readonly manager: T;
    // private readLock: Lock;
    // private writeLock: Lock;
    append(event: LogEvent): void;
    getLayout(): Layout<LogEvent>;
    getManager(): T;
    replaceManager(manager: T): void;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
}