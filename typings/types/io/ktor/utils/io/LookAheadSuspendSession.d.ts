import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class LookAheadSuspendSession extends Object {
    constructor(channel: ByteReadChannel)
    // private channel: ByteReadChannel;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    awaitAtLeast(min: number, $completion: Continuation<boolean>): any;
    consumed(count: number): void;
    request(skip: number, atLeast: number): ByteBuffer | null;
}