import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { PosixFilePermission } from '../../../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export class FileManager extends OutputStreamManager {
    static getFileManager(paramfileName: string, paramappend: boolean, paramlocking: boolean, parambufferedIo: boolean, paramcreateOnDemand: boolean, paramadvertiseUri: string, paramlayout: Layout<Object>, parambufferSize: number, paramfilePermissions: string, paramfileOwner: string, paramfileGroup: string, paramconfiguration: Configuration): FileManager;
    static getManager(paramname: string, paramfactory: ManagerFactory<Object, Object>, paramdata: Object | null): Object | null;
    static getManager(paramname: string, paramdata: Object | null, paramfactory: ManagerFactory<Object, Object>): OutputStreamManager;
    static hasManager(paramname: string): boolean;
    constructor(fileName: string, os: OutputStream, append: boolean, locking: boolean, advertiseURI: string, layout: Layout<Serializable>, writeHeader: boolean, buffer: ByteBuffer)
    constructor(fileName: string, os: OutputStream, append: boolean, locking: boolean, advertiseURI: string, layout: Layout<Serializable>, bufferSize: number, writeHeader: boolean)
    constructor(loggerContext: LoggerContext, fileName: string, os: OutputStream, append: boolean, locking: boolean, createOnDemand: boolean, advertiseURI: string, layout: Layout<Serializable>, writeHeader: boolean, buffer: ByteBuffer)
    constructor(loggerContext: LoggerContext, fileName: string, os: OutputStream, append: boolean, locking: boolean, createOnDemand: boolean, advertiseURI: string, layout: Layout<Serializable>, filePermissions: string, fileOwner: string, fileGroup: string, writeHeader: boolean, buffer: ByteBuffer)
    // private advertiseURI: string;
    readonly attributeViewEnabled: boolean;
    readonly bufferSize: number;
    readonly createOnDemand: boolean;
    readonly fileGroup: string;
    readonly fileOwner: string;
    readonly filePermissions: PosixFilePermission[];
    // private isAppend: boolean;
    // private isLocking: boolean;
    createOutputStream(): OutputStream;
    createParentDir(file: File): void;
    defineAttributeView(path: Path[]): void;
    getBufferSize(): number;
    getContentFormat(): { [key: string]: string };
    getFileGroup(): string;
    getFileName(): string;
    getFileOwner(): string;
    getFilePermissions(): PosixFilePermission[];
    isAppend(): boolean;
    isAttributeViewEnabled(): boolean;
    isCreateOnDemand(): boolean;
    isLocking(): boolean;
    write(bytes: number[]): void;
    write(bytes: number[], immediateFlush: boolean): void;
    write(bytes: number[], offset: number, length: number): void;
    write(bytes: number[], offset: number, length: number, immediateFlush: boolean): void;
    writeToDestination(bytes: number[], offset: number, length: number): void;
}