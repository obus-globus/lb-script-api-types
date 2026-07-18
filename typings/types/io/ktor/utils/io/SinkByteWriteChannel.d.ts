import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { RawSink } from '../../../../kotlinx/io/RawSink.d.ts'
import type { Sink } from '../../../../kotlinx/io/Sink.d.ts'
export class SinkByteWriteChannel extends Object implements ByteWriteChannel {
    constructor(origin: RawSink)
    readonly autoFlush: boolean;
    // private buffer: Sink;
    readonly closedCause: Throwable | null;
    /*not mapped: */ isClosedForWrite(): boolean;
    readonly writeBuffer: Sink;
    cancel(cause: Throwable | null): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flushAndClose($completion: Continuation<void>): any;
}