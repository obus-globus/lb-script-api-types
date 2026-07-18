import type { Datagram } from '../../../../io/ktor/network/sockets/Datagram.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export interface DatagramReadChannel extends Object{
    readonly incoming: ReceiveChannel<Datagram>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receive($completion: Continuation<Datagram>): any;
}