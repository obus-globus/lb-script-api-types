import type { Datagram } from '../../../../io/ktor/network/sockets/Datagram.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { SendChannel } from '../../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export interface DatagramWriteChannel extends Object{
    readonly outgoing: SendChannel<Datagram>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(datagram: Datagram, $completion: Continuation<void>): any;
}