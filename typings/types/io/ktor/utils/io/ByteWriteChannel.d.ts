import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Sink } from '../../../../kotlinx/io/Sink.d.ts'
export interface ByteWriteChannel extends Object{
    readonly autoFlush: boolean;
    readonly closedCause: Throwable | null;
    /*not mapped: */ isClosedForWrite(): boolean;
    readonly writeBuffer: Sink;
    cancel(cause: Throwable | null): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flushAndClose($completion: Continuation<void>): any;
}