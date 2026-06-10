import type { File } from '../../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { ExecutorService } from '../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Semaphore } from '../../../../../../../java/util/concurrent/Semaphore.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LoggerContext } from '../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { FileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/FileManager.d.ts'
import type { ManagerFactory } from '../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { FileExtension } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/FileExtension.d.ts'
import type { PatternProcessor } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/PatternProcessor.d.ts'
import type { RolloverListener } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverListener.d.ts'
import type { RolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Log4jThreadFactory } from '../../../../../../../org/apache/logging/log4j/core/util/Log4jThreadFactory.d.ts'
export class RollingFileManager extends FileManager {
    static getFileManager(paramfileName: string, paramappend: boolean, paramlocking: boolean, parambufferedIo: boolean, paramcreateOnDemand: boolean, paramadvertiseUri: string, paramlayout: Layout<Serializable>, parambufferSize: number, paramfilePermissions: string, paramfileOwner: string, paramfileGroup: string, paramconfiguration: Configuration): FileManager;
    static getFileManager(paramfileName: string, parampattern: string, paramappend: boolean, parambufferedIO: boolean, parampolicy: TriggeringPolicy, paramstrategy: RolloverStrategy, paramadvertiseURI: string, paramlayout: Layout<Serializable>, parambufferSize: number, paramimmediateFlush: boolean, paramcreateOnDemand: boolean, paramfilePermissions: string, paramfileOwner: string, paramfileGroup: string, paramconfiguration: Configuration): RollingFileManager;
    static getManager(paramname: string, paramfactory: ManagerFactory<AbstractManager, Object>, paramdata: Object | null): AbstractManager | null;
    static getManager(paramname: string, paramdata: Object | null, paramfactory: ManagerFactory<OutputStreamManager, Object>): OutputStreamManager;
    static hasManager(paramname: string): boolean;
    constructor(fileName: string, pattern: string, os: OutputStream, append: boolean, size: number, initialTime: number, triggeringPolicy: TriggeringPolicy, rolloverStrategy: RolloverStrategy, advertiseURI: string, layout: Layout<Serializable>, writeHeader: boolean, buffer: ByteBuffer)
    constructor(fileName: string, pattern: string, os: OutputStream, append: boolean, size: number, initialTime: number, triggeringPolicy: TriggeringPolicy, rolloverStrategy: RolloverStrategy, advertiseURI: string, layout: Layout<Serializable>, bufferSize: number, writeHeader: boolean)
    constructor(loggerContext: LoggerContext, fileName: string, pattern: string, os: OutputStream, append: boolean, createOnDemand: boolean, size: number, initialTime: number, triggeringPolicy: TriggeringPolicy, rolloverStrategy: RolloverStrategy, advertiseURI: string, layout: Layout<Serializable>, writeHeader: boolean, buffer: ByteBuffer)
    constructor(loggerContext: LoggerContext, fileName: string, pattern: string, os: OutputStream, append: boolean, createOnDemand: boolean, size: number, initialTime: number, triggeringPolicy: TriggeringPolicy, rolloverStrategy: RolloverStrategy, advertiseURI: string, layout: Layout<Serializable>, filePermissions: string, fileOwner: string, fileGroup: string, writeHeader: boolean, buffer: ByteBuffer)
    // private asyncExecutor: ExecutorService;
    readonly directWrite: boolean;
    readonly fileName: string;
    // private initialTime: number;
    // private initialized: boolean;
    readonly patternProcessor: PatternProcessor;
    readonly renameEmptyFiles: boolean;
    // private rolloverListeners: RolloverListener[];
    readonly rolloverStrategy: RolloverStrategy;
    // private semaphore: Semaphore;
    // private size: number;
    // private threadFactory: Log4jThreadFactory;
    readonly triggeringPolicy: TriggeringPolicy;
    addRolloverListener(listener: RolloverListener): void;
    checkRollover(event: LogEvent): void;
    createFileAfterRollover(): void;
    createParentDir(file: File): void;
    getFileExtension(): FileExtension;
    getFileName(): string;
    getFileSize(): number;
    getFileTime(): number;
    getPatternProcessor(): PatternProcessor;
    getRolloverStrategy(): RolloverStrategy;
    getSemaphore(): Semaphore;
    getTriggeringPolicy<T extends TriggeringPolicy>(): T;
    initialize(): void;
    isDirectWrite(): boolean;
    isRenameEmptyFiles(): boolean;
    releaseSub(timeout: number, timeUnit: TimeUnit): boolean;
    removeRolloverListener(listener: RolloverListener): void;
    rollover(): void;
    rollover(prevFileTime: Date, prevRollTime: Date): void;
    // private rollover(strategy: RolloverStrategy): boolean;
    setPatternProcessor(patternProcessor: PatternProcessor): void;
    setRenameEmptyFiles(renameEmptyFiles: boolean): void;
    setRolloverStrategy(rolloverStrategy: RolloverStrategy): void;
    setTriggeringPolicy(triggeringPolicy: TriggeringPolicy): void;
    updateData(data: Object): void;
    write(bytes: number[]): void;
    write(bytes: number[], immediateFlush: boolean): void;
    write(bytes: number[], offset: number, length: number): void;
    write(bytes: number[], offset: number, length: number, immediateFlush: boolean): void;
    writeToDestination(bytes: number[], offset: number, length: number): void;
}