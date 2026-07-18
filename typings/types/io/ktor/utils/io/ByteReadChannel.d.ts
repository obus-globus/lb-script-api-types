import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export interface ByteReadChannel extends Object{
    readonly closedCause: Throwable | null;
    /*not mapped: */ isClosedForRead(): boolean;
    readonly readBuffer: Source;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    awaitContent(min: number, $completion: Continuation<boolean>): any;
    cancel(cause: Throwable | null): void;
}