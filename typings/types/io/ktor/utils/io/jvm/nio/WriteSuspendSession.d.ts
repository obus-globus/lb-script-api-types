import type { ByteWriteChannel } from '../../../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
export class WriteSuspendSession extends Object {
    constructor(channel: ByteWriteChannel)
    // private byteBuffer: ByteBuffer;
    readonly channel: ByteWriteChannel;
    request(count: number): ByteBuffer | null;
    tryAwait(count: number): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    written(rc: number, $completion: Continuation<void>): any;
}