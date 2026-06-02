import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
export class OutputStreamManager extends AbstractManager implements ByteBufferDestination {
    static getManager(paramname: string, paramfactory: ManagerFactory<Object, Object>, paramdata: Object | null): Object | null;
    static getManager(paramname: string, paramdata: Object | null, paramfactory: ManagerFactory<Object, Object>): OutputStreamManager;
    static hasManager(paramname: string): boolean;
    constructor(os: OutputStream, streamName: string, layout: Layout<Object>, writeHeader: boolean)
    constructor(os: OutputStream, streamName: string, layout: Layout<Object>, writeHeader: boolean, byteBuffer: ByteBuffer)
    constructor(os: OutputStream, streamName: string, layout: Layout<Object>, writeHeader: boolean, bufferSize: number)
    constructor(loggerContext: LoggerContext, os: OutputStream, streamName: string, createOnDemand: boolean, layout: Layout<Serializable>, writeHeader: boolean, byteBuffer: ByteBuffer)
    byteBuffer: ByteBuffer;
    // private layout: Layout<Object>;
    // private outputStream: OutputStream;
    // private skipFooter: boolean;
    closeOutputStream(): boolean;
    createOutputStream(): OutputStream;
    drain(buf: ByteBuffer): ByteBuffer;
    flush(): void;
    flushBuffer(buf: ByteBuffer): void;
    flushDestination(): void;
    getByteBuffer(): ByteBuffer;
    getOutputStream(): OutputStream;
    hasOutputStream(): boolean;
    isOpen(): boolean;
    releaseSub(timeout: number, timeUnit: TimeUnit): boolean;
    setOutputStream(os: OutputStream): void;
    skipFooter(skipFooter: boolean): void;
    write(bytes: number[]): void;
    write(bytes: number[], immediateFlush: boolean): void;
    write(bytes: number[], offset: number, length: number): void;
    write(bytes: number[], offset: number, length: number, immediateFlush: boolean): void;
    writeBytes(data: ByteBuffer): void;
    writeBytes(data: number[], offset: number, length: number): void;
    writeFooter(): void;
    writeHeader(os: OutputStream): void;
    writeToDestination(bytes: number[], offset: number, length: number): void;
}