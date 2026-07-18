import type { BufferedByteWriteChannel } from '../../../../io/ktor/utils/io/BufferedByteWriteChannel.d.ts'
import type { ByteChannel$Slot$Task } from '../../../../io/ktor/utils/io/ByteChannel$Slot$Task.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteReadChannel$Companion } from '../../../../io/ktor/utils/io/ByteReadChannel$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { DisposableHandle } from '../../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Buffer } from '../../../../kotlinx/io/Buffer.d.ts'
import type { Sink } from '../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class ByteChannel extends Object implements BufferedByteWriteChannel, ByteReadChannel {
    static Companion: ByteReadChannel$Companion;
    constructor(autoFlush?: boolean)
    // private _readBuffer: Buffer;
    // private _writeBuffer: Buffer;
    readonly autoFlush: boolean;
    readonly closedCause: Throwable | null;
    // private flushBuffer: Buffer;
    // private flushBufferMutex: Object;
    // private flushBufferSize: number;
    readonly hasFreeSpace: boolean;
    /*not mapped: */ isClosedForRead(): boolean;
    /*not mapped: */ isClosedForWrite(): boolean;
    readonly readBuffer: Source;
    readonly writeBuffer: Sink;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    awaitContent(min: number, $completion: Continuation<boolean>): any;
    cancel(cause: Throwable | null): void;
    close(): void;
    // private closeSlot(cause: Throwable | null): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flushAndClose($completion: Continuation<void>): any;
    flushWriteBuffer(): void;
    invokeOnClose(handler: (param0: Throwable | null) => void): DisposableHandle;
    // private moveFlushToReadBuffer(): void;
    // private resumeSlot(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private sleepWhile<TaskType extends ByteChannel$Slot$Task>(createTask: (param0: Continuation<void>) => TaskType, shouldSleep: () => boolean, $completion: Continuation<void>): any;
    toString(): string;
    // private trySuspend<TaskType extends ByteChannel$Slot$Task>(slot: TaskType, shouldSleep: () => boolean): void;
}