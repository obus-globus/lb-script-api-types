import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../../java/io/RandomAccessFile.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export class RandomAccessFileManager extends OutputStreamManager {
    static getFileManager(paramfileName: string, paramappend: boolean, paramimmediateFlush: boolean, parambufferSize: number, paramadvertiseURI: string, paramlayout: Layout<Serializable>, paramconfiguration: Configuration): RandomAccessFileManager;
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static getManager<T extends unknown>(paramname: string, paramdata: T, paramfactory: ManagerFactory<OutputStreamManager, T>): OutputStreamManager;
    static hasManager(paramname: string): boolean;
    constructor(loggerContext: LoggerContext, file: RandomAccessFile, fileName: string, os: OutputStream, bufferSize: number, advertiseURI: string, layout: Layout<Serializable>, writeHeader: boolean)
    // private advertiseURI: string;
    // private randomAccessFile: RandomAccessFile;
    closeOutputStream(): boolean;
    flush(): void;
    getBufferSize(): number;
    getContentFormat(): { [key: string]: string };
    getFileName(): string;
    isEndOfBatch(): boolean;
    setEndOfBatch(endOfBatch: boolean): void;
    writeToDestination(bytes: number[], offset: number, length: number): void;
}