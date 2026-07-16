import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StringLayout } from '../../../../../../org/apache/logging/log4j/core/StringLayout.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
export class WriterManager extends AbstractManager {
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static getManager<T extends unknown>(paramname: string, paramdata: T, paramfactory: ManagerFactory<WriterManager, T>): WriterManager;
    static hasManager(paramname: string): boolean;
    constructor(writer: Writer, streamName: string, layout: StringLayout, writeHeader: boolean)
    // private layout: StringLayout;
    // private writer: Writer;
    closeWriter(): void;
    flush(): void;
    getWriter(): Writer;
    isOpen(): boolean;
    releaseSub(timeout: number, timeUnit: TimeUnit): boolean;
    setWriter(writer: Writer): void;
    write(str: string): void;
    writeFooter(): void;
}