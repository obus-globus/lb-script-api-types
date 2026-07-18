import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteReadChannel$Companion } from '../../../../io/ktor/utils/io/ByteReadChannel$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Buffer } from '../../../../kotlinx/io/Buffer.d.ts'
export class CountedByteReadChannel extends Object implements ByteReadChannel {
    static Companion: ByteReadChannel$Companion;
    constructor(delegate: ByteReadChannel)
    // private buffer: Buffer;
    readonly closedCause: Throwable | null;
    // private consumed: number;
    readonly delegate: ByteReadChannel;
    // private initial: number;
    /*not mapped: */ isClosedForRead(): boolean;
    readonly readBuffer: Buffer;
    readonly totalBytesRead: number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    awaitContent(min: number, $completion: Continuation<boolean>): any;
    cancel(cause: Throwable | null): void;
    // private transferFromDelegate(): void;
    // private updateConsumed(): void;
}