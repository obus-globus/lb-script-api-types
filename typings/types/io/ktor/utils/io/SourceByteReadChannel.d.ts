import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteReadChannel$Companion } from '../../../../io/ktor/utils/io/ByteReadChannel$Companion.d.ts'
import type { CloseToken } from '../../../../io/ktor/utils/io/CloseToken.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class SourceByteReadChannel extends Object implements ByteReadChannel {
    static Companion: ByteReadChannel$Companion;
    constructor(source: Source)
    // private closed: CloseToken | null;
    readonly closedCause: Throwable | null;
    /*not mapped: */ isClosedForRead(): boolean;
    readonly readBuffer: Source;
    // private source: Source;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    awaitContent(min: number, $completion: Continuation<boolean>): any;
    cancel(cause: Throwable | null): void;
}