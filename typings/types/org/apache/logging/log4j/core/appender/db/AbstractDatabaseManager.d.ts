import type { Flushable } from '../../../../../../../java/io/Flushable.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractManager } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export abstract class AbstractDatabaseManager extends AbstractManager implements Flushable {
    static getManager(paramname: string, paramfactory: ManagerFactory<AbstractManager, Object>, paramdata: Object | null): AbstractManager | null;
    static hasManager(paramname: string): boolean;
    constructor(name: string, bufferSize: number)
    constructor(name: string, bufferSize: number, layout: Layout<Serializable>)
    constructor(name: string, bufferSize: number, layout: Layout<Serializable>, configuration: Configuration)
    // private buffer: LogEvent[];
    // private bufferSize: number;
    // private layout: Layout<Serializable>;
    readonly running: boolean;
    buffer(event: LogEvent): void;
    commitAndClose(): boolean;
    connectAndStart(): void;
    flush(): void;
    isBuffered(): boolean;
    isRunning(): boolean;
    releaseSub(timeout: number, timeUnit: TimeUnit): boolean;
    shutdown(): boolean;
    shutdownInternal(): boolean;
    startup(): void;
    startupInternal(): void;
    toString(): string;
    write(event: LogEvent): void;
    write(event: LogEvent, serializable: Serializable): void;
    writeInternal(event: LogEvent): void;
    writeInternal(event: LogEvent, serializable: Serializable): void;
    writeThrough(event: LogEvent, serializable: Serializable): void;
}