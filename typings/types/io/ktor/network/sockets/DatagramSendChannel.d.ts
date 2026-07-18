import type { Datagram } from '../../../../io/ktor/network/sockets/Datagram.d.ts'
import type { DatagramSocketImpl } from '../../../../io/ktor/network/sockets/DatagramSocketImpl.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { ChannelResult } from '../../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SendChannel } from '../../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause2 } from '../../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
import type { Mutex } from '../../../../kotlinx/coroutines/sync/Mutex.d.ts'
export class DatagramSendChannel extends Object implements SendChannel<Datagram> {
    constructor(channel: DatagramChannel, socket: DatagramSocketImpl)
    readonly channel: DatagramChannel;
    /*not mapped: */ isClosedForSend(): boolean;
    // private lock: Mutex;
    readonly onSend: SelectClause2<Datagram, SendChannel<Datagram>>;
    readonly socket: DatagramSocketImpl;
    close(cause: Throwable | null): boolean;
    // private closeAndCheckHandler(): void;
    invokeOnClose(handler: (param0: Throwable | null) => void): void;
    offer(element: Datagram): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(element: Datagram, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private sendSuspend(buffer: ByteBuffer, address: SocketAddress, $completion: Continuation<void>): any;
    trySend(element: Datagram): ChannelResult<void>;
}