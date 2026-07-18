import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { NIOSocketImpl } from '../../../../io/ktor/network/sockets/NIOSocketImpl.d.ts'
import type { Socket } from '../../../../io/ktor/network/sockets/Socket.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { SocketOptions$TCPClientSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$TCPClientSocketOptions.d.ts'
import type { SocketAddress as SocketAddress_2 } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class SocketImpl<S extends SocketChannel> extends NIOSocketImpl<S> implements Socket {
    constructor(channel: S, selector: SelectorManager, socketOptions: SocketOptions$TCPClientSocketOptions | null)
    readonly channel: S;
    readonly localAddress: SocketAddress;
    readonly remoteAddress: SocketAddress;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    connect(target: SocketAddress_2, $completion: Continuation<Socket>): any;
    // private inetSelfConnect(): boolean;
    // private wantConnect(state: boolean): void;
}