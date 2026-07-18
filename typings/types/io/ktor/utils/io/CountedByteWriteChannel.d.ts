import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Sink } from '../../../../kotlinx/io/Sink.d.ts'
export class CountedByteWriteChannel extends Object implements ByteWriteChannel {
    constructor(delegate: ByteWriteChannel)
    readonly autoFlush: boolean;
    readonly closedCause: Throwable | null;
    // private delegate: ByteWriteChannel;
    // private flushedCount: number;
    // private initial: number;
    /*not mapped: */ isClosedForWrite(): boolean;
    readonly totalBytesWritten: number;
    readonly writeBuffer: Sink;
    cancel(cause: Throwable | null): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flushAndClose($completion: Continuation<void>): any;
}