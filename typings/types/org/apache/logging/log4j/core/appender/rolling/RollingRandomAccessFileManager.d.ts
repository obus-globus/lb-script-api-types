import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../../../java/io/RandomAccessFile.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LoggerContext } from '../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { FileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/FileManager.d.ts'
import type { ManagerFactory } from '../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { RolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export class RollingRandomAccessFileManager extends RollingFileManager {
    static DEFAULT_BUFFER_SIZE: number;
    static getFileManager(paramfileName: string, paramappend: boolean, paramlocking: boolean, parambufferedIo: boolean, paramcreateOnDemand: boolean, paramadvertiseURI: string, paramlayout: Layout<Serializable>, parambufferSize: number, paramfilePermissions: string, paramfileOwner: string, paramfileGroup: string, paramconfiguration: Configuration): FileManager;
    static getFileManager(paramfileName: string, parampattern: string, paramappend: boolean, parambufferedIO: boolean, parampolicy: TriggeringPolicy, paramstrategy: RolloverStrategy, paramadvertiseURI: string, paramlayout: Layout<Serializable>, parambufferSize: number, paramimmediateFlush: boolean, paramcreateOnDemand: boolean, paramfilePermissions: string, paramfileOwner: string, paramfileGroup: string, paramconfiguration: Configuration): RollingFileManager;
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static getManager<T extends unknown>(paramname: string, paramdata: T, paramfactory: ManagerFactory<OutputStreamManager, T>): OutputStreamManager;
    static getRollingRandomAccessFileManager(paramfileName: string, paramfilePattern: string, paramappend: boolean, paramimmediateFlush: boolean, parambufferSize: number, parampolicy: TriggeringPolicy, paramstrategy: RolloverStrategy, paramadvertiseURI: string, paramlayout: Layout<Serializable>, paramfilePermissions: string, paramfileOwner: string, paramfileGroup: string, paramconfiguration: Configuration): RollingRandomAccessFileManager;
    static hasManager(paramname: string): boolean;
    constructor(loggerContext: LoggerContext, raf: RandomAccessFile, fileName: string, pattern: string, os: OutputStream, append: boolean, immediateFlush: boolean, bufferSize: number, size: number, time: number, policy: TriggeringPolicy, strategy: RolloverStrategy, advertiseURI: string, layout: Layout<Serializable>, writeHeader: boolean)
    constructor(loggerContext: LoggerContext, raf: RandomAccessFile, fileName: string, pattern: string, os: OutputStream, append: boolean, immediateFlush: boolean, bufferSize: number, size: number, initialTime: number, policy: TriggeringPolicy, strategy: RolloverStrategy, advertiseURI: string, layout: Layout<Serializable>, filePermissions: string, fileOwner: string, fileGroup: string, writeHeader: boolean)
    // private randomAccessFile: RandomAccessFile;
    closeOutputStream(): boolean;
    createFileAfterRollover(): void;
    // private createFileAfterRollover(fileName: string): void;
    flush(): void;
    getBufferSize(): number;
    isEndOfBatch(): boolean;
    setEndOfBatch(endOfBatch: boolean): void;
    updateData(data: Object): void;
    write(bytes: number[]): void;
    write(bytes: number[], immediateFlush: boolean): void;
    write(bytes: number[], offset: number, length: number): void;
    write(bytes: number[], offset: number, length: number, immediateFlush: boolean): void;
    // private writeHeader(): void;
    writeHeader(os: OutputStream): void;
    writeToDestination(bytes: number[], offset: number, length: number): void;
}