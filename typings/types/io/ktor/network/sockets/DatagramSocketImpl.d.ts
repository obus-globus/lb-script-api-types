import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { BoundDatagramSocket } from '../../../../io/ktor/network/sockets/BoundDatagramSocket.d.ts'
import type { ConnectedDatagramSocket } from '../../../../io/ktor/network/sockets/ConnectedDatagramSocket.d.ts'
import type { Datagram } from '../../../../io/ktor/network/sockets/Datagram.d.ts'
import type { NIOSocketImpl } from '../../../../io/ktor/network/sockets/NIOSocketImpl.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class DatagramSocketImpl extends NIOSocketImpl<DatagramChannel> implements BoundDatagramSocket, ConnectedDatagramSocket {
    constructor(channel: DatagramChannel, selector: SelectorManager)
    readonly channel: DatagramChannel;
    readonly incoming: ReceiveChannel<Datagram>;
    readonly localAddress: SocketAddress;
    readonly outgoing: SendChannel<Datagram>;
    // private receiver: ReceiveChannel<Datagram>;
    readonly remoteAddress: SocketAddress;
    // private sender: SendChannel<Datagram>;
    close(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private receiveImpl($completion: Continuation<Datagram>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private receiveSuspend(buffer: ByteBuffer, $completion: Continuation<Datagram>): any;
}