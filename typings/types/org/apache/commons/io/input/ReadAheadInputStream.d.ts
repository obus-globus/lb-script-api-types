import type { ReadAheadInputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { ReadAheadInputStream$Builder } from '../../../../../org/apache/commons/io/input/ReadAheadInputStream$Builder.d.ts'
export class ReadAheadInputStream extends FilterInputStream {
    static builder(): ReadAheadInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: InputStream, arg1: number, arg2: ExecutorService)
    private constructor(arg0: InputStream, arg1: number, arg2: ExecutorService, arg3: boolean)
    private constructor(arg0: ReadAheadInputStream$Builder)
    constructor(arg0: ReadAheadInputStream$Builder, arg1: ReadAheadInputStream$1)
    // private activeBuffer: ByteBuffer;
    // private asyncReadComplete: Condition;
    // private endOfStream: boolean;
    // private executorService: ExecutorService;
    // private isClosed: boolean;
    // private isReading: boolean;
    // private isUnderlyingInputStreamBeingClosed: boolean;
    // private isWaiting: AtomicBoolean;
    // private readAborted: boolean;
    // private readAheadBuffer: ByteBuffer;
    // private readException: Throwable;
    // private readInProgress: boolean;
    // private shutdownExecutorService: boolean;
    // private stateChangeLock: ReentrantLock;
    available(): number;
    // private checkReadException(): void;
    close(): void;
    // private closeUnderlyingInputStreamIfNecessary(): void;
    // private isEndOfStream(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readAsync(): void;
    // private signalAsyncReadComplete(): void;
    skip(arg0: number): number;
    // private skipInternal(arg0: number): number;
    // private swapBuffers(): void;
    // private waitForAsyncReadComplete(): void;
}