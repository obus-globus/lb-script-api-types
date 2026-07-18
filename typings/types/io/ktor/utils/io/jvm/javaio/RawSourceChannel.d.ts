import type { ByteReadChannel } from '../../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteReadChannel$Companion } from '../../../../../../io/ktor/utils/io/ByteReadChannel$Companion.d.ts'
import type { CloseToken } from '../../../../../../io/ktor/utils/io/CloseToken.d.ts'
import type { CancellationException } from '../../../../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableJob } from '../../../../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Buffer } from '../../../../../../kotlinx/io/Buffer.d.ts'
import type { RawSource } from '../../../../../../kotlinx/io/RawSource.d.ts'
import type { Source } from '../../../../../../kotlinx/io/Source.d.ts'
export class RawSourceChannel extends Object implements ByteReadChannel {
    static Companion: ByteReadChannel$Companion;
    constructor(source: RawSource, parent: CoroutineContext)
    // private buffer: Buffer;
    readonly closedCause: Throwable | null;
    // private closedToken: CloseToken | null;
    readonly coroutineContext: CoroutineContext;
    /*not mapped: */ isClosedForRead(): boolean;
    readonly job: CompletableJob;
    readonly readBuffer: Source;
    // private source: RawSource;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    awaitContent(min: number, $completion: Continuation<boolean>): any;
    cancel(cause: Throwable | null): void;
    // private closeSource(cause: CancellationException | null): void;
}