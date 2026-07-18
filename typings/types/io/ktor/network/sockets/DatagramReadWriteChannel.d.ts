import type { Datagram } from '../../../../io/ktor/network/sockets/Datagram.d.ts'
import type { DatagramReadChannel } from '../../../../io/ktor/network/sockets/DatagramReadChannel.d.ts'
import type { DatagramWriteChannel } from '../../../../io/ktor/network/sockets/DatagramWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface DatagramReadWriteChannel extends DatagramReadChannel, DatagramWriteChannel, Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receive($completion: Continuation<Datagram>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(datagram: Datagram, $completion: Continuation<void>): any;
}