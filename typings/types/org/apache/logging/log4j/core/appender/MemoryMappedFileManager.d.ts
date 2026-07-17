import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../../java/io/RandomAccessFile.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { MappedByteBuffer } from '../../../../../../java/nio/MappedByteBuffer.d.ts'
import type { FileChannel } from '../../../../../../java/nio/channels/FileChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
export class MemoryMappedFileManager extends OutputStreamManager {
    static getFileManager(paramfileName: string, paramappend: boolean, paramimmediateFlush: boolean, paramregionLength: number, paramadvertiseURI: string, paramlayout: Layout<Serializable>): MemoryMappedFileManager;
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static getManager<T extends unknown>(paramname: string, paramdata: T, paramfactory: ManagerFactory<OutputStreamManager, T>): OutputStreamManager;
    static hasManager(paramname: string): boolean;
    static mmap(paramfileChannel: FileChannel, paramfileName: string, paramstart: number, paramsize: number): MappedByteBuffer;
    constructor(file: RandomAccessFile, fileName: string, os: OutputStream, immediateFlush: boolean, position: number, regionLength: number, advertiseURI: string, layout: Layout<Serializable>, writeHeader: boolean)
    // private advertiseURI: string;
    readonly immediateFlush: boolean;
    // private mappedBuffer: MappedByteBuffer;
    // private mappingOffset: number;
    // private randomAccessFile: RandomAccessFile;
    readonly regionLength: number;
    closeOutputStream(): boolean;
    drain(buf: ByteBuffer): ByteBuffer;
    flush(): void;
    flushBuffer(buffer: ByteBuffer): void;
    getByteBuffer(): ByteBuffer;
    getContentFormat(): JavaMap<string, string>;
    getFileName(): string;
    getRegionLength(): number;
    isEndOfBatch(): boolean;
    isImmediateFlush(): boolean;
    // private remap(): void;
    setEndOfBatch(endOfBatch: boolean): void;
    write(bytes: number[]): void;
    write(bytes: number[], immediateFlush: boolean): void;
    write(bytes: number[], offset: number, length: number): void;
    write(bytes: number[], offset: number, length: number, immediateFlush: boolean): void;
}